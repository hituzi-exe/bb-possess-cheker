import * as menuTypes from '../utils/menuTypes';

const version = 0b100001;
const dec64char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

export const encodeParam = (menuList) => {
    const partsItems = menuList.find(m => m.menuType === menuTypes.MENU_PARTS).items;
    const weaponItems = menuList.find(m => m.menuType === menuTypes.MENU_WEAPON).items;

    const param = encodeUrlParamHeader(partsItems.length, weaponItems.length) +
        createUrlParamBody(partsItems) +
        createUrlParamBody(weaponItems);

    return param;
}

export const decodeParam = (param) => {
    const header = decodeUrlParamHeader(param);
    const body = decodeUrlParamBody(param, header.partsNum, header.weaponNum);

    //TODO デバッグ用
    return header.vesion + ":" +
        header.partsNum + ":" +
        header.weaponNum + ":" +
        body.partsArray + ":" +
        body.weaponArray;
}

//先頭6bitをバージョン情報、24bitをパーツの総数、武器の総数を表現。
//それぞれ12bitずつ使用する。さすがに4000種類以上は実装されないだろうとの算段。
//30bitを64進数の文字列で返す。5文字帰ってくるはず。
const encodeUrlParamHeader = (partsNum, weaponNum) => {
    return dec64char.charAt(version) +
        partsNumTo64String(partsNum) +
        partsNumTo64String(weaponNum);
}

const partsNumTo64String = (num) => dec64char.charAt((num & 0xfc0) >> 6) + dec64char.charAt(num & 0x03f);

export const decodeUrlParamHeader = (param) => {
    const nullParamHeader = { vesion: parseInt(version), partsNum: 0, weaponNum: 0, }

    const paramVersion = decodeVesion(param);
    
    const partsStr = param.substr(1, 2);
    const weaponStr = param.substr(3, 2);
    
    if (version !== paramVersion) {
        return nullParamHeader;
    }
    
    return {
        vesion: paramVersion,
        partsNum: dec64TopartsNum(partsStr),
        weaponNum: dec64TopartsNum(weaponStr),
    }
}

export const decodeVesion = (param) => dec64char.indexOf(param.charAt(0));

export const decodeUrlParamBody = (param, partsNum, weaponNum) => {
    const partsNumString = param.substr(5, Math.ceil(partsNum / 2));
    const weaponNumString = param.substr(5 + Math.ceil(partsNum / 2), Math.ceil(weaponNum / 2));
    
    return {
        partsArray: numStringToObject(partsNumString),
        weaponArray: numStringToObject(weaponNumString)
    }
}

const numStringToObject = (numString) => {
    return numString
        .split('')
        .map(str => dec64char.indexOf(str))
        .map(num => [num & 0b000111, (num & 0b111000) >> 3])
        .flat()
        .map((m, idx) => { return { idx: idx, count: m } });
    
}
const dec64TopartsNum = (dec64String) => {
    return (dec64char.indexOf(dec64String.charAt(0)) << 6) + dec64char.indexOf(dec64String.charAt(1));
}

const createUrlParamBody = (items) => {
    let retStr = "";

    //元の変数にpushしたら大変なことになるので別のを生成
    let items2 = Object.assign([], items);

    //一つの部品情報は3bitで保持、端数がでてたら埋める
    if (items2.length % 2 === 1) { 
        items2.push({ count: 0 });
    }
    for (let i = 0; i < items2.length; i = i + 2) {
        retStr = retStr + dec64char.charAt(items2[i].count + (items2[i + 1].count << 3));
    }
    return retStr;
}

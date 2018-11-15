import * as menuTypes from '../utils/menuTypes';

const dec64char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

export const encodeParam = (menuList) => {
    const partsItems = menuList.find(m => m.menuType === menuTypes.MENU_PARTS).items;
    const weaponItems = menuList.find(m => m.menuType === menuTypes.MENU_WEAPON).items;

    const param = createUrlParamHeader(partsItems.length, weaponItems.length) +
        createUrlParamBody(weaponItems) +
        createUrlParamBody(partsItems);

    return param;
}

//先頭6bit(110101(適当なbit列))+24bitでパーツの総数、武器の総数を表現。
//それぞれ12bitずつ使用する。さすがに4000種類以上は実装されないだろうとの算段。
//30bitを64進数の文字列で返す。5文字帰ってくるはず。
const createUrlParamHeader = (partsNum, weaponNum) => {
    return dec64char.charAt(53) +
        partsNumTo64String(partsNum) +
        partsNumTo64String(weaponNum);
}

const partsNumTo64String = (num) => dec64char.charAt((num & 0xfc0) >> 6) + dec64char.charAt(num & 0x03f);

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

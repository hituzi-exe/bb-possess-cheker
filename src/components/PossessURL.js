import React from 'react'
import * as menuTypes from '../utils/menuTypes';

const PossessURL = ({ menuList }) => {
    return (        
        <div className={"PossessURL"}>
            <span>{encodeUrlParam(menuList)}</span>
        </div>
    )
};

const encodeUrlParam = (menuList) => {
    const partsItems = menuList.find(m => m.menuType === menuTypes.MENU_PARTS).items;
    const weaponItems = menuList.find(m => m.menuType === menuTypes.MENU_WEAPON).items;
    

    const hexParam = createUrlParamHeader(partsItems.length, weaponItems.length) +
        createUrlParamBody(weaponItems) +
        createUrlParamBody(partsItems);

    return hexParam;
}

//---------そのうち別ファイルに分けること-------------

const dec64char =
    "01234567" +
    "89abcdef" +
    "ghijklmn" +
    "opqrstuv" +
    "wxyzABCD" +
    "EFGHIJKL" +
    "MNOPQRST" +
    "UVWXYZ+/";

//先頭6bit(110101(適当なbit列))+24bitでパーツの総数、武器の総数を表現。
//それぞれ12bitずつ使用する。さすがに4000種類以上は実装されないだろうとの算段。
//24bitを64進数の文字列で返す。-> 4文字帰ってくるはず。
const createUrlParamHeader = (partsNum, weaponNum) => {
    return dec64char.charAt(53) +
        decTo64String(partsNum) +
        decTo64String(weaponNum);
}

const decTo64String = (num) => dec64char.charAt((num & 0xfc0) >> 6) + dec64char.charAt(num & 0x03f);

const createUrlParamBody = (items) => {
    let retStr = "";
    let items2 = Object.assign([], items);

    //一つの部品情報は3bitで保持、端数がでてたら埋める
    if (items2.length % 2 === 1) { 
        items2.push({ count: 0 });
    }
    for (let i = 0; i < items2.length; i += 2) {
        retStr += decTo64String(items2[i].count + (items2[i + 1].count << 3));
    }
    return retStr;
}


export default PossessURL;

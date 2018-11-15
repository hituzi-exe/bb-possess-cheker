//TODO UrlParamEncoderのversionと同じにする
const version = 0b100001;
const dec64char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

export const decodeParam = (param) => {
    if (param == null) {
        return { version: 0, partsArray: [], weaponArray: [] }
    }

    const header = decodeUrlParamHeader(param);
    const body = decodeUrlParamBody(param, header.partsNum, header.weaponNum);

    return {
        version: header.version,
        partsArray: body.partsArray,
        weaponArray: body.weaponArray
    }
}

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
const dec64TopartsNum = (dec64String) => ((dec64char.indexOf(dec64String.charAt(0)) << 6) + dec64char.indexOf(dec64String.charAt(1)));

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
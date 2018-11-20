//今の環境だと1回のテストに1分弱かかるので作成しない

import { decodeVesion } from './UrlParamEncoder';


it('UrlParamEncoder decodeParamHeader', () => {
    const version = decodeVesion("x");
    
    expect(version).toBe(33);
});
it('UrlParamEncoder decodeParamHeader', () => {
    const version = decodeVesion("y");
    
    expect(version).toBe(34);
});
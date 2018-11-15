import { decodeVesion } from './UrlParamEncoder';


it('UrlParamEncoder decodeParamHeader', () => {
    const version = decodeVesion("x");
    
    expect(version).toBe(33);
});
it('UrlParamEncoder decodeParamHeader', () => {
    const version = decodeVesion("y");
    
    expect(version).toBe(34);
});
import {getStorageName} from "@/utils/utils.js";
import {expect} from "chai";

describe('utils.js', () => {
    it('gets storage name', () => {
        const result = getStorageName('A Spicy Meme');
        expect(result).to.equal('aspicymeme');
    })
});

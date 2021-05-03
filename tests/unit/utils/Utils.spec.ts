import {convertHumanNameToFileName} from "@/utils/utils.js";
import {expect} from "chai";

describe('utils.js', () => {
    it('gets storage name', () => {
        const result = convertHumanNameToFileName('A Spicy Meme');
        expect(result).to.equal('aspicymeme');
    })
});

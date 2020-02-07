import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import PartialFooter from "@/components/PartialFooter.vue";

describe('PartialFooter.vue', () => {
    it('renders', () => {
        const footerText = 'All the nostalgic sounds from Empire Earth - the 2001 classic RTS game';
        const wrapper = shallowMount(PartialFooter);
        expect(wrapper.text()).to.include(footerText);
    })
});

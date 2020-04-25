import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import PartialFooter from "@/components/PartialFooter.vue";

describe('PartialFooter.vue', () => {
    it('renders', () => {
        const footerText = 'By Steve Barker';
        const wrapper = shallowMount(PartialFooter);
        expect(wrapper.text()).to.include(footerText);
    })
});

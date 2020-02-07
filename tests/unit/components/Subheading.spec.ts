import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Subheading from "@/components/Subheading.vue";

describe('PartialFooter.vue', () => {
    it('renders', () => {
        const wrapper = mount(Subheading, {
            propsData: {
                text: 'Label Text'
            }
        });

        expect(wrapper.text()).to.include('Label Text');
        expect(wrapper.text()).to.include('∆');
    })
});

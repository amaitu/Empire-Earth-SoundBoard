import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import SoundButton from '@/components/SoundButton.vue';

describe('SoundButton.vue', () => {
    it('renders', () => {
        const expectedText = 'Cyborg Molotov';

        const wrapper = mount(SoundButton, {
            propsData: {
                text: expectedText,
                filename: 'some name',
                type: 'some type',
            }
        });

        expect(wrapper.text()).to.include(expectedText);
    })
});

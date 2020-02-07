import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import App from "@/App.vue";

describe('App.vue', () => {
    it('renders', () => {
        const h1Text = 'Empire Earth Soundboard';
        const wrapper = shallowMount(App);
        expect(wrapper.text()).to.include(h1Text);
    })
});

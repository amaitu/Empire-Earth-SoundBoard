<template>
    <div v-if="sounds.length > 0">
        <div v-on:click="toggle">
            <subheading :text="name" v-bind:hidden="hidden"></subheading>
        </div>

        <div v-bind:class="{ hidden: hidden }" class="flex flex-wrap justify-center slide-up">
            <sound-button v-for="sound in sounds" v-on:click="click" :type="type" :filename="sound.filename" :text="sound.label"></sound-button>
        </div>
    </div>
</template>

<script>
    import SoundButton from "@/components/SoundButton";
    import Subheading from "@/components/Subheading";

    export default {
        name: 'Group',

        components: {Subheading, SoundButton},

        data() {
            return {
                hidden: false,
            }
        },

        methods: {
            toggle: function () {
                this.hidden =!this.hidden;
            },
        },

        props: {
            name: {
                type: String,
                required: true
            },

            type: {
                type: String,
                required: true
            },

            sounds: {
                // type: Array,
                required: true
            },
        },
    }
</script>

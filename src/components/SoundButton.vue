<template>
    <div
            v-on:click="activateButton()"
            class="cursor-pointer hover:opacity-75 font-bold w-1/3 p-3 md:w-1/6 lg:w-1/6 lg:w-1/12 xl:w-1/12 mx-2 xl:mx-3 mb-4 h-24 rounded text-white text-sm md:text-base lg:text-sm text-center bg-black opacity-50 shadow-2xl border-yellow-200">
        <span>{{buttonCopy}}</span>
    </div>
</template>

<script>
    import {groups, groupTypes} from '@/groups';
    import {getStorageName} from "@/utils/utils.js";

    export default {
        name: 'SoundButton',

        props: [
            'text',
            'filename',
            'type',
        ],

        data() {
            return {
                audio: null,
                buttonCopy: this.text,
            }
        },

        methods: {
            activateButton: function () {
                if (this.buttonCopy === 'stop' && this.audio) {
                    this.pauseAudio();
                    this.buttonCopy = this.text;
                    return;
                }

                if (this.type === 'random') {
                    this.playRandom();
                    return;
                }

                const path = this.getPath(this.type, this.filename, this.text);

                if (this.type === 'music') {
                    this.buttonCopy = 'stop';
                }

                this.playAudio(path);
            },

            pauseAudio: function () {
                this.audio.pause();
            },

            playAudio: function (path) {
                this.audio = new Audio(path);
                this.audio.play();
            },

            getPath: function (type, filename, text) {
                const prefix = 'https://assets.eesoundboard.online/file/ee-soundboard/';
                let dir;
                let extension;

                switch (type) {
                    case 'unit':
                        dir = prefix + 'units/';
                        extension = '.wav';
                        break;

                    case 'music':
                        dir = prefix + 'music/';
                        extension = '.mp3';
                        break;

                    case 'dialog':
                        dir = prefix + 'dialog/';
                        extension = '.mp3';
                        break;
                }

                let fileName = filename ? filename : getStorageName(text);
                return dir + fileName + extension;
            },

            playRandom: function () {
                const sounds = groups.units.sounds;

                const sound = sounds[Math.floor(Math.random() * sounds.length)];

                const path = this.getPath(groupTypes.UNIT, sound.filename, sound.label);

                this.playAudio(path);
            },
        },
    }
</script>



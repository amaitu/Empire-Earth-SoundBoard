<template>
    <div
            v-on:click="activateButton()"
            class="cursor-pointer hover:opacity-75 font-bold w-1/3 p-3 md:w-1/6 lg:w-1/6 lg:w-1/12 xl:w-1/12 mx-2 xl:mx-3 mb-4 h-24 rounded text-white text-sm md:text-base lg:text-sm text-center bg-black opacity-50 shadow-2xl border-yellow-200">
        <span v-if="playState === 'default'">
            {{buttonCopy}}
        </span>
        <span v-if="playState === 'active'">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </span>
    </div>
</template>

<script>
    import {groups, groupTypes} from '@/groups';
    import {getStorageName} from "@/utils/utils.js";

    const PLAY_STATE_DEFAULT = 'default';
    const PLAY_STATE_ACTIVE = 'active';

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
                playState: PLAY_STATE_DEFAULT,
            }
        },

        methods: {
            activateButton: function () {
                // If the audio is already playing, return.
                if (this.playState === PLAY_STATE_ACTIVE) {
                    return;
                }

                if (this.type === 'random') {
                    return this.playRandom();
                }

                this.playState = PLAY_STATE_ACTIVE;
                this.playAudio(
                    this.getPath(this.type, this.filename, this.text)
                ).then(this.resetButton)
            },

            resetButton: function () {
                this.playState = 'default'
            },

            // isPausable: function () {
            // todo - make music sounds pausable
            // return this.type === 'music'
            // },

            // pauseAudio: function () {
            //     this.audio.pause();
            // },

            playAudio: function (path) {
                return new Promise(function (resolve, reject) {   // return a promise
                    var audio = new Audio(path);                     // create audio wo/ src
                    audio.preload = "auto";                      // intend to play through
                    audio.autoplay = true;                       // autoplay when loaded
                    audio.onerror = reject;                      // on error, reject
                    audio.onended = resolve;                     // when done, resolve

                    // audio.src = path + url + suffix; // just for example
                });

            },

            loadAudio: function (path) {
                this.audio = new Audio(path);
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



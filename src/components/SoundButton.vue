<template>
  <div
      v-on:click="activateButton()"
      class="cursor-pointer hover:opacity-75 font-bold w-1/3 p-3 md:w-1/6 lg:w-1/6 lg:w-1/12 xl:w-1/12 mx-2 xl:mx-3 mb-4 h-24 rounded text-white text-sm md:text-base lg:text-sm text-center bg-black opacity-50 shadow-2xl border-yellow-200">
        <span v-if="playState === 'default'">
            {{ buttonCopy }}
        </span>
    <span v-if="playState === 'active'">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </span>
  </div>
</template>

<script>
import {groups, groupTypes} from '@/groups';
import {convertHumanNameToFileName} from "@/utils/utils.js";

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
    resetTitle: function () {
      document.title = 'Empire Earth Soundboard';
    },

    updateTitle: function (string) {
      document.title = string;
    },

    activateButton: function () {
      this.playState = PLAY_STATE_ACTIVE;

      this.updateTitle('🔊 ' + this.text)

      this.playAudio(
          this.getPath(this.type, this.filename, this.text)
      )
          .then(
              this.resetButton
          )
    },

    resetButton: function () {
      this.resetTitle();
      this.playState = PLAY_STATE_DEFAULT
    },

    handleError: function () {
      alert('Error playing sound. Please try again later.')
    },

    playAudio: function (path) {
      return new Promise(function (resolve, reject) {
        let audio = new Audio();
        audio.preload = 'auto';
        audio.autoplay = true;
        audio.onerror = reject;
        audio.onended = resolve;
        audio.src = path;
      });
    },

    getPath: function (type, filename, text) {
      // todo - refactor
      if (type === groupTypes.RANDOM) {
        const sound = this.getRandomSound();
        type = groupTypes.UNIT;
        filename = sound.filename;
        text = sound.label;
      }

      const prefix = 'sounds/';
      let dir;
      let extension;

      switch (type) {
        case groupTypes.UNIT:
          dir = prefix + 'units/';
          extension = '.wav';
          break;

        case groupTypes.MUSIC:
          dir = prefix + 'music/';
          extension = '.mp3';
          break;

        case groupTypes.UNSORTED:
          dir = prefix + 'unsorted/';
          extension = '.wav';
          break;

        case groupTypes.DIALOG:
          dir = prefix + 'dialog/';
          extension = '.mp3';
          break;
      }

      let fileName = filename ? filename : convertHumanNameToFileName(text);
      return dir + fileName + extension;
    },

    getRandomSound: function () {
      const sounds = groups.units.sounds;
      return sounds[Math.floor(Math.random() * sounds.length)];
    },
  },
}
</script>



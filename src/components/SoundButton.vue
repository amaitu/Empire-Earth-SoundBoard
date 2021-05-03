<template>
  <div
      v-on:click="activateButton()"
      class="break-words cursor-pointer select-none hover:opacity-75 font-bold p-3 w-40 mx-2 xl:mx-3 mb-4 h-24 rounded text-white text-base text-center bg-black opacity-50 shadow-2xl border-yellow-200">
        <span v-if="playState === 'default'">
            {{ sound.label ? sound.label : sound.filename }}
        </span>
    <span v-if="playState === 'active'">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </span>
  </div>
</template>

<script>
import {playSound} from "@/utils/playSound";

const PLAY_STATE_DEFAULT = 'default';
const PLAY_STATE_ACTIVE = 'active';

export default {
  name: 'SoundButton',

  props: [
    'sound',
    'extension',
    'type',
  ],

  data() {
    return {
      audio: null,
      playState: PLAY_STATE_DEFAULT,
    }
  },

  methods: {
    activateButton: function () {
      this.playState = PLAY_STATE_ACTIVE;

      playSound(this.sound, this.extension, this.type)
          .then(() => {
            this.resetButton()
          })
          .catch(() => {
            this.handleError()
          })
    },

    resetButton: function () {
      this.playState = PLAY_STATE_DEFAULT
    },

    handleError: function () {
      alert('Error playing sound. Please try again later.')
    },
  },
}
</script>



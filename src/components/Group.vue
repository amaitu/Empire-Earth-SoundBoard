<template>
  <div v-if="sounds.length > 0">
    <div v-on:click="toggle">
      <subheading :text="name" v-bind:hidden="hidden"/>
    </div>

    <div v-bind:class="{ hidden: hidden }" class="flex w-full flex-wrap justify-center slide-up">
      <sound-button v-for="sound in sounds"
                    :sound="sound"
                    :extension="extension"
                    :type="type"
      />
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
      this.hidden = !this.hidden;
    },
  },

  props: {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    sounds: {
      type: Array,
      required: true,
    },

    extension: {
      type: String,
      required: true,
    },
  },
}
</script>

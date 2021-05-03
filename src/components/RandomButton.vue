<template>
  <div
      v-on:click="activateButton()"
      class="p-3 flex tracking-wide justify-center select-none text-center hover:opacity-75 m-auto rounded bg-empire-red text-xl cursor-pointer text-white w-1/3 md:w-1/6 lg:w-1/6 lg:w-1/12 xl:w-1/12 mt-6">
    Random
  </div>

</template>

<script>
import {playSound} from "@/utils/playSound";
import {groups} from "@/groups";

export default {
  name: "RandomButton",
  methods: {
    activateButton: function () {
      const groupsToInclude = [
        'units',
        'unsorted',
      ]

      const groupName = groupsToInclude[Math.floor(Math.random() * groupsToInclude.length)];
      const group = groups[groupName]
      const sounds = groups[groupName]['sounds']
      const sound = sounds[Math.floor(Math.random() * sounds.length)];

      playSound(sound, group.extension, group.type)
    },
  },
}


</script>



<template>
  <div id="app" class="mx-auto font-serif">
    <header class="flex items-center">
      <div
          class="uppercase hover:text-empire-red-light stroke tracking-wider text-empire-red text-4xl md:text-4xl lg:text-6xl text-center m-auto font-normal lg:p-3">
        <a href="https://eesoundboard.online">
          <h1 class=""
              style="font-family: 'Broadsheet LDO', serif">
            Empire Earth Soundboard
          </h1>
        </a>
      </div>
    </header>

    <random-button/>

    <div v-for="(group, groupName) in groups">
      <group
          :name="groupName"
          :type="group['type']"
          :extension="group['extension']"
          :sounds="group['sounds']"
      />
    </div>

    <partial-footer/>
  </div>
</template>

<script>
import Subheading from "./components/Subheading";
import SoundButton from "./components/SoundButton";
import PartialFooter from "./components/PartialFooter";
import Group from "@/components/Group";
import {groups} from "@/groups";
import RandomButton from "@/components/RandomButton";

export default {
  name: 'app',

  components: {
    RandomButton,
    Group,
    PartialFooter,
    SoundButton,
    Subheading,
  },

  data: data,
}

function data() {
  return {
    urlPrefix: '/sounds/ee/',
    groups: groups,
  };
}
</script>

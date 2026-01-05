<template>
  <div id="app" class="mx-auto font-serif">
    <header class="flex items-center justify-between px-4 w-full">
      <div
          class="uppercase hover:text-empire-red-light stroke tracking-wider text-empire-red text-4xl md:text-4xl lg:text-6xl text-center m-auto font-normal lg:p-3">
        <a href="https://eesoundboard.online">
          <h1 class=""
              style="font-family: 'Broadsheet LDO', serif">
            Empire Earth Soundboard
          </h1>
        </a>
      </div>
      <language-toggle @language-changed="setLanguage"/>
    </header>

    <random-button :language="language"/>

    <div v-for="(group, groupName) in visibleGroups">
      <group
          :name="groupName"
          :type="group['type']"
          :extension="group['extension']"
          :sounds="group['sounds']"
          :language="language"
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
import LanguageToggle from "@/components/LanguageToggle";

export default {
  name: 'app',

  components: {
    RandomButton,
    Group,
    PartialFooter,
    SoundButton,
    Subheading,
    LanguageToggle,
  },

  data: data,

  computed: {
    // Show only the 'unsorted' group when German is selected; otherwise show all groups
    visibleGroups() {
      if (this.language === 'de') {
        return { unsorted: this.groups.unsorted };
      }
      return this.groups;
    }
  },

  methods: {
    setLanguage(lang) {
      this.language = lang;
    },
    onLanguageChange(event) {
      const newLang = event.target.value;
      this.language = newLang;
    }
  },
};

function data() {
  return {
    urlPrefix: '/sounds/ee/',
    groups: groups,
  };
}
</script>

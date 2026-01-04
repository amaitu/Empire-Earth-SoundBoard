<template>
  <div class="ml-4 mr-4 flex items-center">
    <label for="language-select" class="hidden sm:inline text-sm text-gray-700 mr-2">Audio:</label>
    <select
      id="language-select"
      v-model="language"
      @change="emitChange"
      class="bg-white border border-gray-300 rounded px-3 py-1 pr-4 text-sm"
      aria-label="Select language">
      <option value="en">🇬🇧 English</option>
      <option value="de">🇩🇪 Deutsch</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageToggle',
  data() {
    return {
      language: 'en',
    };
  },
  methods: {
    emitChange() {
      // keep it visual for now; emit event for future wiring
      this.$emit('language-changed', this.language);
    },
  },
};
</script>

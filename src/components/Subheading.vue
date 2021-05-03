<template>
  <div
      class="flex tracking-wide uppercase justify-center slide-up capitalize cursor-pointer text-xl lg:text-2xl hover:text-empire-red-light text-empire-red mb-4 text-center mt-10 lg:mt-12">
    <h2> {{ text }} </h2> <span v-bind:class="{ 'upside-down': !hidden }" class="mx-2"> <img style="width: 18px" class="select-none hover:-rotate-180 bg-empire-red-light" alt="expand section" src="../assets/img/chevron-arrow-down.svg"></span>
  </div>
</template>

<script>
export default {
  name: 'Subheading',
  props: [
    'text',
    'hidden',
  ],
}
</script>

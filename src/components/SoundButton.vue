<template>
    <div
            v-on:click="click"
            class="cursor-pointer font-bold w-1/3 p-3 md:w-1/6 lg:w-1/6 lg:w-1/12 xl:w-1/12 mx-2 xl:mx-3 mb-4 h-20 rounded text-white text-sm text-center bg-black opacity-50 shadow-2xl border-yellow-200">
        <span>{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'SoundButton',
        props: ['text'],

        methods: {
            click: function () {
                this.$emit('buttonClick', this.text)
            }
        },
    }
</script>

<style scoped>

</style>
<template>
    <div class="flex justify-center capitalize cursor-pointer text-xl lg:text-2xl hover:text-empire-red-light text-empire-red mb-4 text-center mt-10 lg:mt-12">
        <h2> {{ text }} </h2> <span v-bind:class="{ 'upside-down': !hidden }" class="mx-2">∆</span>
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

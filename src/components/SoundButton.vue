<template>
    <div
            v-on:click="activateButton()"
            class="cursor-pointer font-bold w-1/3 p-3 md:w-1/6 lg:w-1/6 lg:w-1/12 xl:w-1/12 mx-2 xl:mx-3 mb-4 h-20 rounded text-white text-sm text-center bg-black opacity-50 shadow-2xl border-yellow-200">
        <span>{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'SoundButton',

        props: [
            'text',
            'filename',
            'type',
        ],

        data: () => ({
            urlPrefix: '/sounds/ee/',
            fileExtension: '.wav',
        }),

        methods: {
            activateButton: function () {
                const path = this.getPath();
                this.playAudio(path);
            },

            playAudio: function (path)
            {
                new Audio(path).play();
            },

            getPath: function () {
                const prefix = '/sounds/ee/';
                let dir;
                let extension;

                switch (this.type) {
                    case 'unit':
                        dir = prefix + 'units/';
                        extension = '.wav';
                        break;

                    case 'music':
                        dir = prefix + 'music/';
                        extension = '.mp3';
                        break;

                    case 'dialog':
                        dir = prefix + 'dialog/';
                        extension = '.mp3';
                        break;

                    case 'custom':
                        break;
                }

                let fileName = this.filename ? this.filename : this.flatten(this.text);
                return dir + fileName + extension;
            },


            flatten: name => name.replace(/\s/g, '').toLowerCase()
        },
    }
</script>

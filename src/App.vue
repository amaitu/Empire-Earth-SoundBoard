<template>
    <div id="app" class="mx-auto font-serif">

        <header class="flex items-center ">
            <div class="flex justify-between items-center w-full">
                <h2 class="uppercase stroke tracking-wider text-empire-red text-3xl md:text-4xl lg:text-6xl text-center m-auto font-normal lg:p-3"
                    style="font-family: 'Broadsheet LDO'">
                    Empire Earth Soundboard
                </h2>
            </div>
        </header>

        <div v-for="(group, groupName) in sounds">
            <subheading :text="groupName"></subheading>

            <div class="flex flex-wrap justify-center ">
                <sound-button v-for="sound in group" v-on:buttonClick="play($event)" :text="sound"></sound-button>
            </div>
        </div>

        <subheading text="feeling lucky"></subheading>

        <div class="flex flex-wrap justify-center ">
            <sound-button v-on:buttonClick="playRandom" text="?"></sound-button>
        </div>

        <footer class="mt-10 flex p-10 justify-around bg-black text-empire-gold-light md:justify-between text-sm lg:text-base">
            <div class="flex flex-col text-center">
                <p>Empire Earth Soundboard</p>
                <a href="https://sgbarker.com" class="underline">by Steve Barker</a>
                <p>ee@sgbarker.com</p>
            </div>

            <div class="flex flex-col underline">
                <a href="https://github.com/amaitu/Empire-Earth-SoundBoard">Source code</a>
                <a href="https://en.wikipedia.org/wiki/Empire_Earth_(video_game)">Empire Earth</a>
                <a href="https://www.youtube.com/watch?v=347qmxgydkE&list=PLB489C5423FD3D057">Empire Earth
                    soundtrack</a>
            </div>
        </footer>
    </div>
</template>

<script>
    import Sound from "./components/Sound";
    import Subheading from "./components/Subheading";
    import SoundButton from "./components/SoundButton";

    export default {
        name: 'app',

        components: {
            SoundButton,
            Subheading,
            Sound
        },

        data: function () {
            return {
                urlPrefix: 'https://ee-sounds.s3.eu-west-2.amazonaws.com/ee/',
                fileExtension: '.wav',
                sounds: {
                    units: [
                        'Deus Walt',
                        'What is your bidding',
                        'As you wish',
                        'Outstanding',
                        'Pikemen forward',
                        'Swordsmen forward',
                        'Set full sail',
                        'Sink the land lubbers',
                        'SIRE',
                        'Yeah',
                        'Scream 1',
                        'Scream 2',
                        'Scream 3',
                        'The bell tolls for thee',
                        'To Victory',
                        'Where can I go',
                        'Who can I kill',
                        'Yes great one',
                        'Yes me lord',
                        'Your orders',
                    ],

                    animals: [
                        'Giraffe',
                        'Tiger',
                    ],

                    ambient: [
                        'Plague',
                        'Nuke bomb',
                    ],

                    misc: [
                        'Button 1',
                    ],
                },
            }
        },

        methods: {
            playRandom: function () {
                const sounds = Object.values(this.sounds).flat(Infinity);
                this.play(sounds[Math.floor(Math.random() * sounds.length)]);
            },

            play: function (sound) {
                const audio = new Audio(this.urlPrefix + this.flattenName(sound) + this.fileExtension);
                audio.play();
            },

            flattenName: function (name) {
                return name.replace(/\s/g, '').toLowerCase();
            }
        },
    }
</script>

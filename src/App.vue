<template>
    <div id="app" class="mx-auto font-serif">

        <header class="flex items-center ">
            <div class="flex justify-between items-center w-full">
                <h1 class="uppercase stroke tracking-wider text-empire-red text-3xl md:text-4xl lg:text-6xl text-center m-auto font-normal lg:p-3"
                    style="font-family: 'Broadsheet LDO'">
                    <a href="https://eesoundboard.online">Empire Earth Soundboard</a>
                </h1>
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

        <partial-footer></partial-footer>
    </div>
</template>

<script>
    import Sound from "./components/Sound";
    import Subheading from "./components/Subheading";
    import SoundButton from "./components/SoundButton";
    import PartialFooter from "./components/PartialFooter";

    export default {
        name: 'app',

        components: {
            PartialFooter,
            SoundButton,
            Subheading,
            Sound
        },

        data: function () {
            return {
                urlPrefix: '/sounds/ee/',
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
                        'All hands on deck',
                        'SIRE',
                        'Yeah',
                        'Scream 1',
                        'Scream 2',
                        'Scream 3',
                        'Grigor 1',
                        'Jester 1',
                        'Jester 2',
                        'Jester 3',
                        'Jester 4',
                        'The bell tolls for thee',
                        'To Victory',
                        'Where shall I go',
                        // 'William 3', // not working
                        'Who can I kill',
                        'Yes great one',
                        'Yes me lord',
                        'Allah wills it',
                        'For paradise',
                        'For the motherland',
                        'Your orders',
                        'Certainly',
                    ],

                    animals: [
                        'Giraffe',
                        'Tiger',
                        'Hippo dying',
                    ],

                    ambient: [
                        'Plague',
                        'Nuke bomb',
                        'Building blow',
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

<template>
    <div id="app" class="mx-auto font-serif">

        <header class="flex items-center ">
            <div class="flex justify-between items-center w-full">
                <h2 class="stroke tracking-wider text-empire-red text-3xl md:text-4xl lg:text-6xl text-center m-auto font-normal lg:p-3"
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

        <footer class="mt-10 flex p-10 justify-around md:justify-between text-sm">
            <div class="flex flex-col">
                <p>Empire Earth Soundboard </p>
                <p>by Steve Barker</p>
                <p>ee@sgbarker.com</p>
            </div>

            <div class="flex flex-col">
                <a href="https://en.wikipedia.org/wiki/Empire_Earth_(video_game)">Empire Earth</a>
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

                    misc: [
                        'Button 1',
                    ],
                },
            }
        },

        methods: {
            playRandom: function () {
                this.play('button1');

                const groupsKeys = Object.keys(this.sounds);
                const group = this.sounds[groupsKeys[groupsKeys.length * Math.random() << 0]];

                const sound = group[Math.floor(Math.random() * group.length)];
                this.play(sound);
            },

            play: function (sound) {
                const audio = new Audio(this.urlPrefix + this.parseName(sound) + this.fileExtension);
                audio.play();
            },

            parseName: function (name) {
                return name.replace(/\s/g, '').toLowerCase();
            }
        },
    }
</script>

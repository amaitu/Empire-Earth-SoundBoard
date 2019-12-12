<template>
    <div id="app" class="mx-auto font-serif">

        <header class="flex items-center">
            <div class="flex justify-between items-center w-full">
                <h1 class="uppercase hover:text-empire-red-light stroke tracking-wider text-empire-red text-3xl md:text-4xl lg:text-6xl text-center m-auto font-normal lg:p-3"
                    style="font-family: 'Broadsheet LDO', serif">
                    <a href="https://eesoundboard.online">Empire Earth Soundboard</a>
                </h1>
            </div>
        </header>

        <div v-for="(group, groupName) in groups">
            <group :name="groupName" :type="group['type']" :sounds="group['sounds']"></group>
        </div>

        <partial-footer></partial-footer>
    </div>
</template>

<script>
    import Subheading from "./components/Subheading";
    import SoundButton from "./components/SoundButton";
    import PartialFooter from "./components/PartialFooter";
    import Group from "@/components/Group";

    export default {
        name: 'app',

        components: {
            Group,
            PartialFooter,
            SoundButton,
            Subheading,
        },

        data: data,
    }

    function data() {
        const groupTypes =
            {
                MUSIC: 'music',
                UNIT: 'unit',
                DIALOG: 'dialog',
                RANDOM: 'random',
            };

        return {
            urlPrefix: '/sounds/ee/',
            groups: {
                units: {
                    type: groupTypes.UNIT,
                    sounds: [
                        {
                            label: 'Deus Vult',
                            filename: null,
                        },
                        {
                            label: 'What is your bidding',
                            filename: null,
                        },
                        {
                            label: 'As you wish',
                            filename: null,
                        },
                        {
                            label: 'Outstanding',
                            filename: null,
                        },
                        {
                            label: 'Pikemen forward',
                            filename: null,
                        },
                        {
                            label: 'Swordsmen forward',
                            filename: null,
                        },
                        {
                            label: 'Set full sail',
                            filename: null,
                        },
                        {
                            label: 'Sink the land lubbers',
                            filename: null,
                        },
                        {
                            label: 'All hands on deck',
                            filename: null,
                        },
                        {
                            label: 'SIRE',
                            filename: null,
                        },
                        {
                            label: 'Yeah',
                            filename: null,
                        },
                        {
                            label: 'Scream 1',
                            filename: null,
                        },
                        {
                            label: 'Scream 2',
                            filename: null,
                        },
                        {
                            label: 'Scream 3',
                            filename: null,
                        },
                        {
                            label: 'Grigor 1',
                            filename: null,
                        },
                        {
                            label: 'Jester 1',
                            filename: null,
                        },
                        {
                            label: 'Jester 2',
                            filename: null,
                        },
                        {
                            label: 'Jester 3',
                            filename: null,
                        },
                        {
                            label: 'Jester 4',
                            filename: null,
                        },

                        {
                            label: 'Prophet Grunt 1',
                            filename: null,
                        },

                        {
                            label: 'Prophet Grunt 2',
                            filename: null,
                        },

                        {
                            label: 'Prophet Grunt 3',
                            filename: null,
                        },

                        {
                            label: 'Prophet Grunt 4',
                            filename: null,
                        },

                        {
                            label: 'Ahh my eye',
                            filename: null,
                        },

                        {
                            label: 'The bell tolls for thee',
                            filename: null,
                        },
                        {
                            label: 'To Victory',
                            filename: null,
                        },
                        {
                            label: 'Where shall I go',
                            filename: null,
                        },
                        // not working:
                        // {
                        //     label: 'William 3',
                        //     filename: null,
                        // },
                        {
                            label: 'Who can I kill',
                            filename: null,
                        },
                        {
                            label: 'Yes great one',
                            filename: null,
                        },
                        {
                            label: 'Yes me lord',
                            filename: null,
                        },
                        {
                            label: 'Allah wills it',
                            filename: null,
                        },
                        {
                            label: 'For paradise',
                            filename: null,
                        },
                        {
                            label: 'For the motherland',
                            filename: null,
                        },
                        {
                            label: 'Your orders',
                            filename: null,
                        },
                        {
                            label: 'Certainly',
                            filename: null,
                        },
                        {
                            label: 'Dock',
                            filename: null,
                        },
                    ],
                },

                music: {
                    type: groupTypes.MUSIC,
                    sounds: [
                        {
                            label: 'Empire Earth Title Music',
                            filename: 'intro',
                        },
                        {
                            label: 'Siege',
                            filename: null,
                        },
                        {
                            label: 'Arthurian',
                            filename: null,
                        },
                    ],
                },

                animals: {
                    type: groupTypes.UNIT,
                    sounds: [
                        {
                            label: 'Giraffe',
                            filename: null,
                        },
                        {
                            label: 'Tiger',
                            filename: null,
                        },
                        {
                            label: 'Hippo dying',
                            filename: null,
                        },
                    ],
                },

                dialog: {
                    type: groupTypes.DIALOG,
                    sounds: [
                        {label: 'What be your business?', filename: 'british1_4',},
                        {label: 'You don\'t have enough stone for that!', filename: 'een1ve1s_british1_83',},
                        {label: 'Fortify our position', filename: 'british11_77',},
                        {label: 'Ah, a potato truck.', filename: 'future1_46',},
                    ],
                },

                ambient: {
                    type: groupTypes.UNIT,

                    sounds: [
                        {label: 'Plague', filename: null,},
                        {label: 'Nuclear bomb', filename: 'nukebomb',},
                        {label: 'Building blow', filename: null,},
                    ],
                },

                // misc: {
                //     type: groupTypes.RANDOM,
                //     sounds: [
                //         {label: 'I\'m feeling lucky', filename: null,},
                //     ],
                // },
            },
        };
    }
</script>

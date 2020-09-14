export let groupTypes: { MUSIC: string; UNIT: string; DIALOG: string; RANDOM: string } = {
    MUSIC: 'music',
    UNIT: 'unit',
    DIALOG: 'dialog',
    RANDOM: 'random',
};

export const groups = {
    units: {
        type: groupTypes.UNIT,
        sounds: [
            {
                label: 'We\'re under attack!',
                filename: 'wereunderattack',
            },
            {
                label: 'Mm',
                filename: null,
            },
            {
                label: 'Mm Mm',
                filename: null,
            },
            {
                label: 'Deus absconditus',
                filename: null,
            },
            {
                label: 'For God and country',
                filename: null,
            },
            {
                label: 'Fire Broadside',
                filename: null,
            },
            {
                label: 'By the Gods',
                filename: null,
            },

            {
                label: 'Medic Death',
                filename: null,
            },
            {
                label: 'What is your bidding',
                filename: null,
            },
            {
                label: 'Deus Vult',
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
                label: 'Grunt Scream',
                filename: null,
            },
            {
                label: 'Robot Comrad',
                filename: null,
            },
            {
                label: 'Leave Noone Alive',
                filename: null,
            },
            {
                label: 'Heads Will Roll',
                filename: null,
            },
            {
                label: 'Greatness Waits',
                filename: null,
            },
            {
                label: 'Galory',
                filename: null,
            },
            {
                label: 'Ja',
                filename: null,
            },
            {
                label: 'Hallelujah',
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
                label: 'Your Secret Is Safe',
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
            {
                label: 'Who can I kill',
                filename: null,
            },
            {
                label: 'Yes great one',
                filename: null,
            },
            {
                label: 'Your orders',
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
            },
            {
                label: 'Hippo dying',
            },
            {
                label: 'Tiger',
            },
            {
                label: 'Unused Animal',
            },
        ],
    },

    dialog: {
        type: groupTypes.DIALOG,

        sounds: [
            {label: 'Ah, a potato truck...', filename: 'future1_46',},
            {label: 'What be your business?', filename: 'british1_4',},
            {label: 'You don\'t have enough stone for that!', filename: 'een1ve1s_british1_83',},
            {label: 'Fortify our position...', filename: 'british11_77',},
            {label: 'In the name of the king...', filename: 'een1ve1s_british12_185',},
            {label: 'Down this road lies the only bridge...', filename: 'een1ve1s_british1_7',},
            {label: 'High command has delivered...', filename: 'german5_28',},
            {label: 'No fear...', filename: 'german1_57',},
            {label: 'The engine is dying...', filename: 'german1_56',},
            {label: 'Greek prophet 1', filename: 'greek1_8',},
            {label: 'Greek prophet 2', filename: 'greek1_5',},
        ],
    },

    ambient: {
        type: groupTypes.UNIT,

        sounds: [
            {label: 'Plague', filename: null,},
            {label: 'Rally', filename: null,},
            {label: 'Nuclear bomb', filename: 'nukebomb',},
            {label: 'Building blow', filename: null,},
            {label: 'Flare', filename: null,},
        ],
    },

    misc: {
        hideLabel: true,
        type: groupTypes.RANDOM,
        sounds: [
            {label: 'I\'m feeling lucky'},
        ],
    },
};
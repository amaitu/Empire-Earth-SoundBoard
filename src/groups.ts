export let groupTypes: { MUSIC: string; UNIT: string; DIALOG: string; RANDOM: string; UNSORTED: string; } = {
    MUSIC: 'music',
    UNIT: 'unit',
    DIALOG: 'dialog',
    RANDOM: 'random',
    UNSORTED: 'unsorted',
};

export const groups = {
    units: {
        type: groupTypes.UNIT,
        extension: '.wav',
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
        extension: '.mp3',
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
        extension: '.wav',
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
        extension: '.mp3',
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
        extension: '.wav',
        sounds: [
            {label: 'Plague', filename: null,},
            {label: 'Rally', filename: null,},
            {label: 'Nuclear bomb', filename: 'nukebomb',},
            {label: 'Building blow', filename: null,},
            {label: 'Flare', filename: null,},
        ],
    },

    unsorted: {
        hideLabel: false,
        type: groupTypes.UNSORTED,
        extension: '.wav',
        sounds: [
            {filename: 'antimatter-8'},
            {filename: 'archery-8'},
            {filename: 'balloon-8'},
            {filename: 'bark1'},
            {filename: 'bark2'},
            {filename: 'barracks2-8'},
            {filename: 'battlecry-8'},
            {filename: 'battlecry2-8'},
            {filename: 'bird-8'},
            {filename: 'bird2-8'},
            {filename: 'boatbell-8'},
            {filename: 'booted'},
            {filename: 'breath1'},
            {filename: 'breath2'},
            {filename: 'build-8'},
            {filename: 'buildcreate2-8'},
            {filename: 'buildingblow3-8'},
            {filename: 'buildingselect-8'},
            {filename: 'button1'},
            {filename: 'button2'},
            {filename: 'button3'},
            {filename: 'button4'},
            {filename: 'button5'},
            {filename: 'cannon2-8'},
            {filename: 'cannon3-8'},
            {filename: 'cannon4-8'},
            {filename: 'cannon5-8'},
            {filename: 'cannon6-8'},
            {filename: 'cannon7-8'},
            {filename: 'cannon8-8'},
            {filename: 'carengine3-8'},
            {filename: 'chicken-8'},
            {filename: 'child-8'},
            {filename: 'child2-8'},
            {filename: 'childdeath-8'},
            {filename: 'churricane'},
            {filename: 'citizen-8'},
            {filename: 'clock-8'},
            {filename: 'compattack'},
            {filename: 'convert2-8'},
            {filename: 'crowd-8'},
            {filename: 'crows-8'},
            {filename: 'dachilles1'},
            {filename: 'dachilles2'},
            {filename: 'dachilles3'},
            {filename: 'dachilles4'},
            {filename: 'dalexander1'},
            {filename: 'dalexander2'},
            {filename: 'dalexander3'},
            {filename: 'dalexander4'},
            {filename: 'dayambient-8'},
            {filename: 'dbaron1'},
            {filename: 'dbaron2'},
            {filename: 'dbaron3'},
            {filename: 'dbaron4'},
            {filename: 'dbaron5'},
            {filename: 'dbismarck1'},
            {filename: 'dbismarck2'},
            {filename: 'dbismarck3'},
            {filename: 'dbismarck4'},
            {filename: 'dblackprince1'},
            {filename: 'dblackprince2'},
            {filename: 'dblackprince3'},
            {filename: 'dblackprince4'},
            {filename: 'dblackrobe1'},
            {filename: 'dblackrobe2'},
            {filename: 'dblackrobe3'},
            {filename: 'dblackrobe4'},
            {filename: 'dc1asyouwish'},
            {filename: 'dc1certainly'},
            {filename: 'dc1yes'},
            {filename: 'dc1yesmelord'},
            {filename: 'dc2ok'},
            {filename: 'dc2rightaway'},
            {filename: 'dc2yeah'},
            {filename: 'dc2yes'},
            {filename: 'dc3canihelp'},
            {filename: 'dc3ok'},
            {filename: 'dc3ready'},
            {filename: 'dc3rightaway'},
            {filename: 'dcharle1'},
            {filename: 'dcharle2'},
            {filename: 'dcharle3'},
            {filename: 'delcid1'},
            {filename: 'delcid2'},
            {filename: 'delcid3'},
            {filename: 'delcid4'},
            {filename: 'dgerinf1'},
            {filename: 'dgerinf2'},
            {filename: 'dgerinf3'},
            {filename: 'dgerinf4'},
            {filename: 'dgilga1'},
            {filename: 'dgilga2'},
            {filename: 'dgilga3'},
            {filename: 'dgilga4'},
            {filename: 'dgrigor1'},
            {filename: 'dgrigor2'},
            {filename: 'dgrigor3'},
            {filename: 'dgrigor4'},
            {filename: 'dgruntscream1'},
            {filename: 'dhannibal1'},
            {filename: 'dhannibal2'},
            {filename: 'dhannibal3'},
            {filename: 'dhannibal4'},
            {filename: 'dhector1'},
            {filename: 'dhector2'},
            {filename: 'dhector3'},
            {filename: 'dhector4'},
            {filename: 'dhenry1'},
            {filename: 'dhenry2'},
            {filename: 'dhenry3'},
            {filename: 'dhenry4'},
            {filename: 'dhomer1'},
            {filename: 'dhomer2'},
            {filename: 'dhomer3'},
            {filename: 'dhomer4'},
            {filename: 'dincan1'},
            {filename: 'dincan2'},
            {filename: 'dincan3'},
            {filename: 'dincan4'},
            {filename: 'dnapoleon1'},
            {filename: 'dnapoleon2'},
            {filename: 'dnapoleon3'},
            {filename: 'dnapoleon4'},
            {filename: 'dock-8'},
            {filename: 'dogbark-8'},
            {filename: 'doliver1'},
            {filename: 'doliver2'},
            {filename: 'doliver3'},
            {filename: 'doliver4'},
            {filename: 'dp1bythegods'},
            {filename: 'dp1grunt1'},
            {filename: 'dp1grunt2'},
            {filename: 'dp1grunt3'},
            {filename: 'dp1grunt4'},
            {filename: 'dp1hallelujah'},
            {filename: 'dp1helpyou'},
            {filename: 'dp1yesmyliege'},
            {filename: 'dp2blessyou'},
            {filename: 'dp2mayihelp'},
            {filename: 'dp2mychild'},
            {filename: 'dp3amen'},
            {filename: 'dp3glory'},
            {filename: 'dp3serveyou'},
            {filename: 'dp3yes'},
            {filename: 'dpatton1'},
            {filename: 'dpatton2'},
            {filename: 'dpatton3'},
            {filename: 'dpatton4'},
            {filename: 'dpericles1'},
            {filename: 'dpericles2'},
            {filename: 'dpericles3'},
            {filename: 'dpericles4'},
            {filename: 'dpope1'},
            {filename: 'dpope2'},
            {filename: 'dpope3'},
            {filename: 'dpope4'},
            {filename: 'dpr1deuswalt2'},
            {filename: 'dpr1forsee'},
            {filename: 'dpr1grunt1'},
            {filename: 'dpr1grunt2'},
            {filename: 'dpr1grunt3'},
            {filename: 'dpr1grunt42'},
            {filename: 'dpr1theend'},
            {filename: 'dpr1yes'},
            {filename: 'dpr1yessire'},
            {filename: 'dpr2bedone'},
            {filename: 'dpr2deus2'},
            {filename: 'dpr2ofcourse'},
            {filename: 'dpr2yes'},
            {filename: 'dpr2yourbidding'},
            {filename: 'dpr3canihelp'},
            {filename: 'dpr3deus2'},
            {filename: 'dpr3require'},
            {filename: 'dpr3shallbedone'},
            {filename: 'dpr3verygood'},
            {filename: 'dpscream'},
            {filename: 'drichard1'},
            {filename: 'drichard2'},
            {filename: 'drichard3'},
            {filename: 'drichard4'},
            {filename: 'droman1'},
            {filename: 'droman3'},
            {filename: 'droman4'},
            {filename: 'ds2deute'},
            {filename: 'ds2emoige'},
            {filename: 'ds2esto'},
            {filename: 'ds2humin'},
            {filename: 'ds2kalos'},
            {filename: 'ds2nai'},
            {filename: 'ds2pos'},
            {filename: 'ds2sigenun'},
            {filename: 'ds2stoma'},
            {filename: 'ds2sunte'},
            {filename: 'ds2talas'},
            {filename: 'ds2tauta'},
            {filename: 'ds2tigar'},
            {filename: 'ds2tlemon'},
            {filename: 'dsargon1'},
            {filename: 'dsargon2'},
            {filename: 'dsargon3'},
            {filename: 'dsargon4'},
            {filename: 'dscream1'},
            {filename: 'dscream2'},
            {filename: 'dscream3'},
            {filename: 'dscream4'},
            {filename: 'dunderattack1'},
            {filename: 'dv0cpike1'},
            {filename: 'dv0cpike2'},
            {filename: 'dv0cpike3'},
            {filename: 'dv0cpike4'},
            {filename: 'dv0sam1'},
            {filename: 'dv0sam2'},
            {filename: 'dv0sam3'},
            {filename: 'dv0sam4'},
            {filename: 'dv1ahoy'},
            {filename: 'dv1allhands2'},
            {filename: 'dv1archersforward'},
            {filename: 'dv1argh'},
            {filename: 'dv1attack'},
            {filename: 'dv1atyourservice'},
            {filename: 'dv1ayeaye2'},
            {filename: 'dv1cavalryforward'},
            {filename: 'dv1deathtoheathens'},
            {filename: 'dv1forgod'},
            {filename: 'dv1forhonor'},
            {filename: 'dv1fortheking'},
            {filename: 'dv1forthethrone'},
            {filename: 'dv1grunt1'},
            {filename: 'dv1grunt3'},
            {filename: 'dv1grunt4'},
            {filename: 'dv1grunt5'},
            {filename: 'dv1gruntq1'},
            {filename: 'dv1gruntq2'},
            {filename: 'dv1hoistsail2'},
            {filename: 'dv1manoars2'},
            {filename: 'dv1melord'},
            {filename: 'dv1moveout'},
            {filename: 'dv1myliege'},
            {filename: 'dv1okmylord'},
            {filename: 'dv1outstanding'},
            {filename: 'dv1pikemenforward'},
            {filename: 'dv1setfullsail2'},
            {filename: 'dv1sink2'},
            {filename: 'dv1sire'},
            {filename: 'dv1swordforward'},
            {filename: 'dv1tovictory'},
            {filename: 'dv1whereigo'},
            {filename: 'dv1whocankill'},
            {filename: 'dv1yesgreatone'},
            {filename: 'dv1yeslord'},
            {filename: 'dv1yesmaster'},
            {filename: 'dv1yourorders'},
            {filename: 'dv2asyouwish'},
            {filename: 'dv2belltolls'},
            {filename: 'dv2captain'},
            {filename: 'dv2consider'},
            {filename: 'dv2firebroadside2'},
            {filename: 'dv2forthecity'},
            {filename: 'dv2fullbroadside2'},
            {filename: 'dv2grunt1'},
            {filename: 'dv2grunt2'},
            {filename: 'dv2grunt3'},
            {filename: 'dv2grunt4'},
            {filename: 'dv2grunt5'},
            {filename: 'dv2grunt6'},
            {filename: 'dv2grunt8'},
            {filename: 'dv2headwillroll'},
            {filename: 'dv2helmsmen2'},
            {filename: 'dv2leavenoone'},
            {filename: 'dv2lowerachor2'},
            {filename: 'dv2mayiassist'},
            {filename: 'dv2mypleasure'},
            {filename: 'dv2orderscaptain2'},
            {filename: 'dv2raiseachor2'},
            {filename: 'dv2ready'},
            {filename: 'dv2readycannons2'},
            {filename: 'dv2ruetheday'},
            {filename: 'dv2serveyou'},
            {filename: 'dv2setjib2'},
            {filename: 'dv2surely'},
            {filename: 'dv2thywill'},
            {filename: 'dv2yourcommand'},
            {filename: 'dv3affirmative'},
            {filename: 'dv3affirmative2'},
            {filename: 'dv3attentionondeck'},
            {filename: 'dv3awaiting'},
            {filename: 'dv3awaiting2'},
            {filename: 'dv3bridgehere'},
            {filename: 'dv3caniassist'},
            {filename: 'dv3command'},
            {filename: 'dv3command2'},
            {filename: 'dv3done'},
            {filename: 'dv3fallout'},
            {filename: 'dv3firstofficer'},
            {filename: 'dv3goahead2'},
            {filename: 'dv3letsgo'},
            {filename: 'dv3letsgo2'},
            {filename: 'dv3ofcoursesir'},
            {filename: 'dv3ourcourse'},
            {filename: 'dv3plottingnew'},
            {filename: 'dv3prepare'},
            {filename: 'dv3readysir'},
            {filename: 'dv3readysir2'},
            {filename: 'dv3roger'},
            {filename: 'dv3settingcourse'},
            {filename: 'dv3sir'},
            {filename: 'dv3sir2'},
            {filename: 'dv3siryessir'},
            {filename: 'dv3siryessir2'},
            {filename: 'dv3standingby'},
            {filename: 'dv3standingby2'},
            {filename: 'dv3ten4'},
            {filename: 'dv3ten42'},
            {filename: 'dv3tobattle'},
            {filename: 'dv3wheretosir'},
            {filename: 'dv3yescommander'},
            {filename: 'dv3yescommander2'},
            {filename: 'dv3yessir'},
            {filename: 'dv3yessir2'},
            {filename: 'dv3yougotit'},
            {filename: 'dwilliam1'},
            {filename: 'dwilliam2'},
            {filename: 'dwilliam3'},
            {filename: 'dwilliam4'},
            {filename: 'earthquake-8'},
            {filename: 'explosion1-8'},
            {filename: 'explosion2-8'},
            {filename: 'explosion4-8'},
            {filename: 'explosion5-8'},
            {filename: 'explosion6-8'},
            {filename: 'fanfare-8'},
            {filename: 'femscream-8'},
            {filename: 'fgrigor1'},
            {filename: 'fgrigor2'},
            {filename: 'fgrigor3'},
            {filename: 'fgrigor4'},
            {filename: 'fhauptmann1'},
            {filename: 'fhauptmann2'},
            {filename: 'fhauptmann3'},
            {filename: 'fhauptmann4'},
            {filename: 'fire-8'},
            {filename: 'flare-8'},
            {filename: 'flies-8'},
            {filename: 'fmorcav1'},
            {filename: 'fmorcav2'},
            {filename: 'fmorcav3'},
            {filename: 'fmorcav4'},
            {filename: 'forage2-8'},
            {filename: 'frameoff'},
            {filename: 'frameon'},
            {filename: 'fv1ahoy'},
            {filename: 'fv1allhands'},
            {filename: 'fv1ayeaye'},
            {filename: 'fv1setfullsail'},
            {filename: 'fv1sink'},
            {filename: 'fv2captain'},
            {filename: 'fv2fullbroadside'},
            {filename: 'fv2loweranchor'},
            {filename: 'fv2orderscaptain'},
            {filename: 'fv2readycannons'},
            {filename: 'fv2setjib'},
            {filename: 'fv3attentionondeck'},
            {filename: 'fv3bridgehere'},
            {filename: 'fv3goahead'},
            {filename: 'fv3loadguns'},
            {filename: 'fv3ourcourse'},
            {filename: 'fv3plottingnew'},
            {filename: 'fv3roger'},
            {filename: 'fv3settingcourse'},
            {filename: 'fv3ten4'},
            {filename: 'fv3wheretosir'},
            {filename: 'fv3yescommander2'},
            {filename: 'galory'},
            {filename: 'garrison'},
            {filename: 'garrison2'},
            {filename: 'gate-8'},
            {filename: 'giraffe-8'},
            {filename: 'growl-8'},
            {filename: 'growl1-8'},
            {filename: 'growl2-8'},
            {filename: 'hawk-8'},
            {filename: 'heligun1-8'},
            {filename: 'horsebreath-8'},
            {filename: 'horsebreath2-8'},
            {filename: 'horsewine2sid148'},
            {filename: 'horsewine3sid149'},
            {filename: 'hospital-8'},
            {filename: 'hotkeyalarm'},
            {filename: 'inferno-8'},
            {filename: 'jetmovesid162'},
            {filename: 'jscream1'},
            {filename: 'jscream2'},
            {filename: 'jscream3'},
            {filename: 'jungle-8'},
            {filename: 'jungle2-8'},
            {filename: 'jv2mayiassist'},
            {filename: 'jv2mypleasure'},
            {filename: 'jv2rightaway'},
            {filename: 'jv3affirmative'},
            {filename: 'jv3affirmative2'},
            {filename: 'jv3attentionondeck'},
            {filename: 'jv3awaitingorders'},
            {filename: 'jv3bridgehere'},
            {filename: 'jv3byyourcommand'},
            {filename: 'jv3byyourcommand2'},
            {filename: 'jv3caniassist'},
            {filename: 'jv3canihelp'},
            {filename: 'jv3firstofficer'},
            {filename: 'jv3letsgo'},
            {filename: 'jv3ofcourse'},
            {filename: 'jv3ofcourse2'},
            {filename: 'jv3ourcoursesir'},
            {filename: 'jv3plottingcourse'},
            {filename: 'jv3readysir'},
            {filename: 'jv3readysir2'},
            {filename: 'jv3roger'},
            {filename: 'jv3settingcourse'},
            {filename: 'jv3siryessir'},
            {filename: 'jv3standingby'},
            {filename: 'jv3ten4'},
            {filename: 'jv3underway'},
            {filename: 'jv3wheretosir'},
            {filename: 'jv3yescommander'},
            {filename: 'jv3yescommander2'},
            {filename: 'kblackrobe1'},
            {filename: 'kblackrobe2'},
            {filename: 'kblackrobe3'},
            {filename: 'kblackrobe4'},
            {filename: 'kbritinf1'},
            {filename: 'kbritinf2'},
            {filename: 'kbritinf3'},
            {filename: 'kbritinf4'},
            {filename: 'kgrunt1'},
            {filename: 'kgrunt3'},
            {filename: 'kgrunt4'},
            {filename: 'kgrunt5'},
            {filename: 'kjester1'},
            {filename: 'kjester2'},
            {filename: 'kjester3'},
            {filename: 'kjester4'},
            {filename: 'kpercav1'},
            {filename: 'kpercav2'},
            {filename: 'kpercav3'},
            {filename: 'kpercav4'},
            {filename: 'kspacav1'},
            {filename: 'kspacav3'},
            {filename: 'kspacav4'},
            {filename: 'kv1ahoy'},
            {filename: 'kv1allhands'},
            {filename: 'kv1ayeaye'},
            {filename: 'kv1deathtoheathens'},
            {filename: 'kv1forgod'},
            {filename: 'kv1forhonor'},
            {filename: 'kv1forthethrone'},
            {filename: 'kv1hoistsails'},
            {filename: 'kv1mylord'},
            {filename: 'kv1okmylord'},
            {filename: 'kv1readylord'},
            {filename: 'kv1setfullsail'},
            {filename: 'kv1tovictory'},
            {filename: 'kv1wherego'},
            {filename: 'kv1withheart'},
            {filename: 'kv1withhonor'},
            {filename: 'kv1withmylife'},
            {filename: 'kv1yesmylord'},
            {filename: 'kv1yourorders'},
            {filename: 'kv1yourservice'},
            {filename: 'kv2alive'},
            {filename: 'kv2assist'},
            {filename: 'kv2bedone'},
            {filename: 'kv2captain'},
            {filename: 'kv2consider'},
            {filename: 'kv2fireabroadside'},
            {filename: 'kv2forthecity'},
            {filename: 'kv2fullbroadside'},
            {filename: 'kv2headswillroll'},
            {filename: 'kv2orderscaptain'},
            {filename: 'kv2oursovereign'},
            {filename: 'kv2ready'},
            {filename: 'kv2serveyou'},
            {filename: 'kv2sobeit'},
            {filename: 'kv2willbedone'},
            {filename: 'kv2yourcommand'},
            {filename: 'kv3affirmative2'},
            {filename: 'kv3assist'},
            {filename: 'kv3awaitingorders'},
            {filename: 'kv3awaitingorders2'},
            {filename: 'kv3firstofficer'},
            {filename: 'kv3goahead'},
            {filename: 'kv3ofcourse'},
            {filename: 'kv3ourcourse'},
            {filename: 'kv3plottingnew'},
            {filename: 'kv3readysir'},
            {filename: 'kv3readysir2'},
            {filename: 'kv3settingcourse'},
            {filename: 'kv3sir'},
            {filename: 'kv3sir2'},
            {filename: 'kv3siryessir'},
            {filename: 'kv3siryessir2'},
            {filename: 'kv3standingby'},
            {filename: 'kv3ten4'},
            {filename: 'kv3yescommander'},
            {filename: 'kv3yescommander2'},
            {filename: 'kv3yessir'},
            {filename: 'kv3yessir2'},
            {filename: 'kv3yourcommand'},
            {filename: 'kv3yourcommand2'},
            {filename: 'laser1-8'},
            {filename: 'laser2-8'},
            {filename: 'laser3-8'},
            {filename: 'laser4-8'},
            {filename: 'lasercannon-8'},
            {filename: 'lightning2-8'},
            {filename: 'mech2-8'},
            {filename: 'mechbeep2-8'},
            {filename: 'mechbeeps-8'},
            {filename: 'mechvoice1'},
            {filename: 'mechvoice2'},
            {filename: 'mechvoice3'},
            {filename: 'mechvoice4'},
            {filename: 'mechvoice5'},
            {filename: 'mechvoice6'},
            {filename: 'mechvoice7'},
            {filename: 'mechvoice8'},
            {filename: 'mechvoice9'},
            {filename: 'mechwalk3-8'},
            {filename: 'message-8'},
            {filename: 'metalbang-8'},
            {filename: 'mgun1-8'},
            {filename: 'mgun2-8'},
            {filename: 'mgun3-8'},
            {filename: 'mining2-8'},
            {filename: 'mortar-8'},
            {filename: 'multicannon-8'},
            {filename: 'nanoheli-8'},
            {filename: 'naval-8'},
            {filename: 'nc1asyouwish'},
            {filename: 'nc1certainly'},
            {filename: 'nc1yes'},
            {filename: 'nc1yesmelord'},
            {filename: 'nc2ok'},
            {filename: 'nc2rightaway'},
            {filename: 'nc2yeah'},
            {filename: 'nc2yes'},
            {filename: 'nc3canihelp'},
            {filename: 'nc3ok'},
            {filename: 'nc3ready'},
            {filename: 'nc3rightaway'},
            {filename: 'nelizabeth1'},
            {filename: 'nelizabeth2'},
            {filename: 'nelizabeth3'},
            {filename: 'nelizabeth4'},
            {filename: 'ngrunt1'},
            {filename: 'ngrunt2'},
            {filename: 'nightambience1b_8'},
            {filename: 'nisabella1'},
            {filename: 'nisabella2'},
            {filename: 'nisabella3'},
            {filename: 'nisabella4'},
            {filename: 'nm1assist'},
            {filename: 'nm1coming'},
            {filename: 'nm1help'},
            {filename: 'nm1onmyway'},
            {filename: 'nm2hurt'},
            {filename: 'nm2need'},
            {filename: 'nm2onit'},
            {filename: 'nm2rightthere'},
            {filename: 'ns2kalos'},
            {filename: 'ns2pote'},
            {filename: 'ns2stoma'},
            {filename: 'ns2talas'},
            {filename: 'nscream1'},
            {filename: 'nv3affirmative'},
            {filename: 'nv3affirmative2'},
            {filename: 'nv3awaitingorders'},
            {filename: 'nv3goahead'},
            {filename: 'nv3readysir'},
            {filename: 'nv3readysir2'},
            {filename: 'nv3roger'},
            {filename: 'nv3sir'},
            {filename: 'nv3siryessir'},
            {filename: 'nv3siryessir2'},
            {filename: 'nv3standingby'},
            {filename: 'nv3ten4'},
            {filename: 'nv3yescommander'},
            {filename: 'nv3yescommander2'},
            {filename: 'nv3yessir'},
            {filename: 'ocean1'},
            {filename: 'outofsynch'},
            {filename: 'overtimeperftest'},
            {filename: 'owl-8'},
            {filename: 'perftest'},
            {filename: 'planecreate-8'},
            {filename: 'planegun1-8'},
            {filename: 'priestcreate-8'},
            {filename: 'pulsecannon-8'},
            {filename: 'rain-8'},
            {filename: 'rally'},
            {filename: 'ramcrashsid141'},
            {filename: 'rats-8'},
            {filename: 'register-8'},
            {filename: 'remove me'},
            {filename: 'resending'},
            {filename: 'resonator-8'},
            {filename: 'rifle1-8'},
            {filename: 'rifle2-8'},
            {filename: 'rifle3-8'},
            {filename: 'rifle4-8'},
            {filename: 'rifle5-8'},
            {filename: 'rock-8'},
            {filename: 'rockhit-8'},
            {filename: 'rooster-8'},
            {filename: 'runaway'},
            {filename: 'saamove2-8'},
            {filename: 'sarrow'},
            {filename: 'sarrow2'},
            {filename: 'sbattlemove2-8'},
            {filename: 'sbomb'},
            {filename: 'sbomber-8'},
            {filename: 'sbuild2a'},
            {filename: 'scatamove-8'},
            {filename: 'scatamove2-8'},
            {filename: 'scatapultshot-8'},
            {filename: 'schop2'},
            {filename: 'sclub-8'},
            {filename: 'seagledie-8'},
            {filename: 'searthquake'},
            {filename: 'selephantroar1-8'},
            {filename: 'selephantroar2-8'},
            {filename: 'selephantwalk-8'},
            {filename: 'sfarm'},
            {filename: 'sfish-8'},
            {filename: 'sflamethrow'},
            {filename: 'sgoat-8'},
            {filename: 'sgoatdie-8'},
            {filename: 'sgoatwalk2'},
            {filename: 'sheli1'},
            {filename: 'sheli2'},
            {filename: 'shield2-8'},
            {filename: 'shippoattack2'},
            {filename: 'shippodie-8'},
            {filename: 'shorsewine-8'},
            {filename: 'shover1-8'},
            {filename: 'shovermove2-8'},
            {filename: 'shovermove3-8'},
            {filename: 'siege-8'},
            {filename: 'siegecreate-8'},
            {filename: 'siegeselect-8'},
            {filename: 'sjetcrash'},
            {filename: 'slightning2-8'},
            {filename: 'smech4'},
            {filename: 'smechshutdown'},
            {filename: 'smechwalking1'},
            {filename: 'smechwalking2-8'},
            {filename: 'smining3'},
            {filename: 'smissile1'},
            {filename: 'snewhorse-8'},
            {filename: 'snipergun-8'},
            {filename: 'snukemove-8'},
            {filename: 'sostrichdie-8'},
            {filename: 'sostrichwalk'},
            {filename: 'spaddleboat'},
            {filename: 'spideywalk3-8'},
            {filename: 'splanecrash'},
            {filename: 'spropww1-8'},
            {filename: 'spropww2-8'},
            {filename: 'srocket1'},
            {filename: 'ssailandoarmove'},
            {filename: 'sshipsink-8'},
            {filename: 'ssiren2-8'},
            {filename: 'sspear'},
            {filename: 'ssword4b'},
            {filename: 'stable-8'},
            {filename: 'stankcreate'},
            {filename: 'stankmove1b'},
            {filename: 'stankmove2b'},
            {filename: 'stigerdie-8'},
            {filename: 'stigerroar-8'},
            {filename: 'stigerwalk2-8'},
            {filename: 'storpedo1'},
            {filename: 'submovementsid27'},
            {filename: 'svolcano-8'},
            {filename: 'swalk1'},
            {filename: 'swalk2'},
            {filename: 'swalk3'},
            {filename: 'swalk4'},
            {filename: 'swalk5'},
            {filename: 'swalk6'},
            {filename: 'sword1-8'},
            {filename: 'sword2-8'},
            {filename: 'sword3-8'},
            {filename: 'sword4-8'},
            {filename: 'sword5-8'},
            {filename: 'sword6-8'},
            {filename: 'tankcreate-8'},
            {filename: 'teleport-8'},
            {filename: 'temple-8'},
            {filename: 'thunder-8'},
            {filename: 'transport-8'},
            {filename: 'treewind-8'},
            {filename: 'unitcreate2-8'},
            {filename: 'university2-8'},
            {filename: 'village-8'},
            {filename: 'volblast'},
            {filename: 'volcano2-8'},
            {filename: 'whind1'},
            {filename: 'whind2'},
            {filename: 'whind3'},
            {filename: 'whind4'},
            {filename: 'whip-8'},
            {filename: 'whousecarl1'},
            {filename: 'whousecarl2'},
            {filename: 'whousecarl3'},
            {filename: 'whousecarl4'},
            {filename: 'wind-8'},
            {filename: 'wind2-8'},
            {filename: 'wolfdeath-8'},
            {filename: 'wolfhowl-8'},
            {filename: 'wonderclock'},
            {filename: 'woodchop-8'},
            {filename: 'wscream1'},
            {filename: 'wscream2'},
            {filename: 'wscream3'},
            {filename: 'wv1ahoy'},
            {filename: 'wv1allhands'},
            {filename: 'wv1attack'},
            {filename: 'wv1ayeaye'},
            {filename: 'wv1fortheking'},
            {filename: 'wv1readylord'},
            {filename: 'wv1sink'},
            {filename: 'wv1sire'},
            {filename: 'wv1tothedeath'},
            {filename: 'wv1withheart'},
            {filename: 'wv2asyoucommand'},
            {filename: 'wv2belltolls'},
            {filename: 'wv2captain'},
            {filename: 'wv2fireabroadside'},
            {filename: 'wv2loweranchor'},
            {filename: 'wv2orderscaptain'},
            {filename: 'wv2raiseanchor'},
            {filename: 'wv2ruetheday'},
            {filename: 'wv2serveyou'},
            {filename: 'wv2setthejib'},
            {filename: 'wv2sobeit'},
            {filename: 'wv2yourcommand'},
            {filename: 'wv3awaitingorders'},
            {filename: 'wv3bridgehere'},
            {filename: 'wv3firstofficer'},
            {filename: 'wv3plottingnew'},
            {filename: 'wv3readysir'},
            {filename: 'wv3settingcourse'},
            {filename: 'wv3ten4'},
            {filename: 'wv3wheretosir'},
            {filename: 'wv3youcommand'},
        ],
    },
};
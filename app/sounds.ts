export type Language = 'en' | 'de'

export type Sound = {
    label: string;
    path: string;
    supportedLangs: Language[];
};

export function getKey(sound: Sound) {
    return `${sound.label}-${sound.path}`;
}

export type SoundGroupData = {
    title: string;
    sounds: Sound[];
};

export const groups: Record<string, SoundGroupData> = {
    "Units": {
        title: "Units",
        sounds: [
            {
                label: "We're under attack!",
                path: "en/unit/wereunderattack.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Mm",
                path: "en/unit/mm.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Mm Mm",
                path: "en/unit/mmmm.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Deus absconditus",
                path: "en/unit/deusabsconditus.wav",
                supportedLangs: ["en"],
            },
            {
                label: "For God and country",
                path: "en/unit/forgodandcountry.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Fire Broadside",
                path: "en/unit/firebroadside.wav",
                supportedLangs: ["en"],
            },
            {
                label: "By the Gods",
                path: "en/unit/bythegods.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Medic Death",
                path: "en/unit/medicdeath.wav",
                supportedLangs: ["en"],
            },
            {
                label: "What is your bidding",
                path: "en/unit/whatisyourbidding.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Deus Vult",
                path: "en/unit/deusvult.wav",
                supportedLangs: ["en"],
            },
            {
                label: "As you wish",
                path: "en/unit/asyouwish.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Outstanding",
                path: "en/unit/outstanding.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Pikemen forward",
                path: "en/unit/pikemenforward.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Swordsmen forward",
                path: "en/unit/swordsmenforward.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Grunt Scream",
                path: "en/unit/gruntscream.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Robot Comrad",
                path: "en/unit/robotcomrad.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Leave Noone Alive",
                path: "en/unit/leavenoonealive.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Heads Will Roll",
                path: "en/unit/headswillroll.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Greatness Waits",
                path: "en/unit/greatnesswaits.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Ja",
                path: "en/unit/ja.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Hallelujah",
                path: "en/unit/hallelujah.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Set full sail",
                path: "en/unit/setfullsail.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Sink the land lubbers",
                path: "en/unit/sinkthelandlubbers.wav",
                supportedLangs: ["en"],
            },
            {
                label: "All hands on deck",
                path: "en/unit/allhandsondeck.wav",
                supportedLangs: ["en"],
            },
            {
                label: "SIRE",
                path: "en/unit/sire.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Your Secret Is Safe",
                path: "en/unit/yoursecretissafe.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Yeah",
                path: "en/unit/yeah.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Scream 1",
                path: "en/unit/scream1.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Scream 2",
                path: "en/unit/scream2.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Scream 3",
                path: "en/unit/scream3.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Grigor 1",
                path: "en/unit/grigor1.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Jester 1",
                path: "en/unit/jester1.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Jester 2",
                path: "en/unit/jester2.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Jester 3",
                path: "en/unit/jester3.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Jester 4",
                path: "en/unit/jester4.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Prophet Grunt 1",
                path: "en/unit/prophetgrunt1.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Prophet Grunt 2",
                path: "en/unit/prophetgrunt2.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Prophet Grunt 3",
                path: "en/unit/prophetgrunt3.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Prophet Grunt 4",
                path: "en/unit/prophetgrunt4.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Ahh my eye",
                path: "en/unit/ahhmyeye.wav",
                supportedLangs: ["en"],
            },
            {
                label: "The bell tolls for thee",
                path: "en/unit/thebelltollsforthee.wav",
                supportedLangs: ["en"],
            },
            {
                label: "To Victory",
                path: "en/unit/tovictory.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Where shall I go",
                path: "en/unit/whereshalligo.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Who can I kill",
                path: "en/unit/whocanikill.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Yes great one",
                path: "en/unit/yesgreatone.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Your orders",
                path: "en/unit/yourorders.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Yes me lord",
                path: "en/unit/yesmelord.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Allah wills it",
                path: "en/unit/allahwillsit.wav",
                supportedLangs: ["en"],
            },
            {
                label: "For paradise",
                path: "en/unit/forparadise.wav",
                supportedLangs: ["en"],
            },
            {
                label: "For the motherland",
                path: "en/unit/forthemotherland.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Certainly",
                path: "en/unit/certainly.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Dock",
                path: "en/unit/dock.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Emoigen",
                path: "en/unit/emoige.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Aghahha",
                path: "en/unit/dv1grunt3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Saxon Dogs (William)",
                path: "en/unit/dwilliam3.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Other / Unknown": {
        title: "Other / Unknown",
        sounds: [
            {
                label: "A man saying \"galory\"",
                path: "en/unit/galory.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Robotic sound",
                path: "en/unsorted/booted.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Scary breath sound 1",
                path: "en/unsorted/breath1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Scary breath sound 2",
                path: "en/unsorted/breath2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "A man saying \"galory\"",
                path: "en/unsorted/galory.wav",
                supportedLangs: ["en"],
            },
            {
                label: "A metal bang",
                path: "en/unsorted/metalbang-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "$$$",
                path: "en/unsorted/register-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Almost imperceptible sound",
                path: "en/unsorted/runaway.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Earthquake sound",
                path: "en/unsorted/searthquake.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Maybe a shield in nano age",
                path: "en/unsorted/shield2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hover craft",
                path: "en/unsorted/shover1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hover movement with blimps",
                path: "en/unsorted/shovermove2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hover movement",
                path: "en/unsorted/shovermove3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Thunder sound",
                path: "en/unsorted/slightning2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Kind of spider robot sound",
                path: "en/unsorted/spideywalk3-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Music": {
        title: "Music",
        sounds: [
            {
                label: "Empire Earth Title Music",
                path: "en/music/intro.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "Siege",
                path: "en/music/siege.mp3",
                supportedLangs: ["en","de"],
            },
            {
                label: "Arthurian",
                path: "en/music/arthurian.mp3",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Animals": {
        title: "Animals",
        sounds: [
            {
                label: "Giraffe",
                path: "en/unit/giraffe.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Hippo dying",
                path: "en/unit/hippodying.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Tiger",
                path: "en/unit/tiger.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Unused Animal",
                path: "en/unit/unusedanimal.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Scout dog select",
                path: "en/unsorted/bark1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Scout dog move",
                path: "en/unsorted/bark2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ambient birds",
                path: "en/unsorted/bird-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ambient birds",
                path: "en/unsorted/bird2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Chicken death",
                path: "en/unsorted/chicken-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Crows",
                path: "en/unsorted/crows-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Giraffe death",
                path: "en/unsorted/giraffe-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Wolf attack",
                path: "en/unsorted/growl-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Growl 1 8",
                path: "en/unsorted/growl1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Growl 2 8",
                path: "en/unsorted/growl2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Horse breath sound effect",
                path: "en/unsorted/horsebreath-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Horse breath sound effect",
                path: "en/unsorted/horsebreath2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "General horse death",
                path: "en/unsorted/horsewine2sid148.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "General horse select",
                path: "en/unsorted/horsewine3sid149.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ambient owl",
                path: "en/unsorted/owl-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Seagul death",
                path: "en/unsorted/seagledie-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Elephant attack (war and wild elephants)",
                path: "en/unsorted/selephantroar1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Elephant death",
                path: "en/unsorted/selephantroar2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Elephant walk",
                path: "en/unsorted/selephantwalk-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Goat sound",
                path: "en/unsorted/sgoat-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Goat death",
                path: "en/unsorted/sgoatdie-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Goat walking",
                path: "en/unsorted/sgoatwalk2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hipopotamus attack",
                path: "en/unsorted/shippoattack2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hipopotamus death",
                path: "en/unsorted/shippodie-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Horse select",
                path: "en/unsorted/shorsewine-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "General horse move",
                path: "en/unsorted/snewhorse-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ostrich death",
                path: "en/unsorted/sostrichdie-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ostrich walk",
                path: "en/unsorted/sostrichwalk.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Tiger death",
                path: "en/unsorted/stigerdie-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Tiger attack",
                path: "en/unsorted/stigerroar-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Tiger and dog walk",
                path: "en/unsorted/stigerwalk2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Wolf death",
                path: "en/unsorted/wolfdeath-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Dialog": {
        title: "Dialog",
        sounds: [
            {
                label: "Ah, a potato truck...",
                path: "en/dialog/future1_46.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "What be your business?",
                path: "en/dialog/british1_4.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "You don't have enough stone for that!",
                path: "en/dialog/een1ve1s_british1_83.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "Fortify our position...",
                path: "en/dialog/british11_77.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "In the name of the king...",
                path: "en/dialog/een1ve1s_british12_185.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "Down this road lies the only bridge...",
                path: "en/dialog/een1ve1s_british1_7.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "High command has delivered...",
                path: "en/dialog/german5_28.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "No fear...",
                path: "en/dialog/german1_57.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "The engine is dying...",
                path: "en/dialog/german1_56.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "Greek prophet 1",
                path: "en/dialog/greek1_8.mp3",
                supportedLangs: ["en"],
            },
            {
                label: "Greek prophet 2",
                path: "en/dialog/greek1_5.mp3",
                supportedLangs: ["en"],
            },
        ],
    },
    "Ambient": {
        title: "Ambient",
        sounds: [
            {
                label: "Plague",
                path: "en/unit/plague.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Nuclear bomb",
                path: "en/unit/nukebomb.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Building blow",
                path: "en/unit/buildingblow.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Flare",
                path: "en/unit/flare.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Night crickets",
                path: "en/unsorted/dayambient-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ambient dog bark",
                path: "en/unsorted/dogbark-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Corpse flies",
                path: "en/unsorted/flies-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Fire",
                path: "en/unsorted/inferno-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Jungle",
                path: "en/unsorted/jungle-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Jungle",
                path: "en/unsorted/jungle2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Thunder before rain",
                path: "en/unsorted/lightning2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Night crickets",
                path: "en/unsorted/nightambience1b_8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ocean",
                path: "en/unsorted/ocean1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Rain",
                path: "en/unsorted/rain-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Rooster cocoricooo",
                path: "en/unsorted/rooster-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Thunder rain",
                path: "en/unsorted/thunder-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Tree and wind",
                path: "en/unsorted/treewind-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Normal wind",
                path: "en/unsorted/wind-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Strong wind",
                path: "en/unsorted/wind2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Wolf howl",
                path: "en/unsorted/wolfhowl-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Effects": {
        title: "Effects",
        sounds: [
            {
                label: "Define rally point",
                path: "en/unit/rally.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Anti-matter storm",
                path: "en/unsorted/antimatter-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Female battlecry",
                path: "en/unsorted/battlecry-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Male battlecry",
                path: "en/unsorted/battlecry2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Building complete",
                path: "en/unsorted/buildcreate2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Building destroyed",
                path: "en/unsorted/buildingblow3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Car",
                path: "en/unsorted/carengine3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hurricane calamity",
                path: "en/unsorted/churricane.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Priest created",
                path: "en/unsorted/convert2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Prophet spell:\"The Lord's word!\"",
                path: "en/unsorted/dpr1deuswalt2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Earthquake calamity",
                path: "en/unsorted/earthquake-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Populate building",
                path: "en/unsorted/garrison2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Priest converting",
                path: "en/unsorted/priestcreate-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Define rally point",
                path: "en/unsorted/rally.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Plague calamity",
                path: "en/unsorted/rats-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Volcano calamity",
                path: "en/unsorted/svolcano-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Teleport",
                path: "en/unsorted/teleport-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Unit boarding transport",
                path: "en/unsorted/transport-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Military unit created",
                path: "en/unsorted/unitcreate2-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Buildings": {
        title: "Buildings",
        sounds: [
            {
                label: "Archery range",
                path: "en/unsorted/archery-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Barracks",
                path: "en/unsorted/barracks2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Dock",
                path: "en/unsorted/dock-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Church bell",
                path: "en/unsorted/garrison.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Gate open/close",
                path: "en/unsorted/gate-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hospital",
                path: "en/unsorted/hospital-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Naval shipyard",
                path: "en/unsorted/naval-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Siege workshop",
                path: "en/unsorted/siege-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Stable",
                path: "en/unsorted/stable-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Temple",
                path: "en/unsorted/temple-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Aircraft": {
        title: "Aircraft",
        sounds: [
            {
                label: "Hot air baloon",
                path: "en/unsorted/balloon-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Helicopter machine gun",
                path: "en/unsorted/heligun1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Jet plane move",
                path: "en/unsorted/jetmovesid162.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Future helicopter",
                path: "en/unsorted/nanoheli-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Aircraft created",
                path: "en/unsorted/planecreate-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Airplane machine gun",
                path: "en/unsorted/planegun1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Bomber dropping bombs",
                path: "en/unsorted/sbomb.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Bomber moving",
                path: "en/unsorted/sbomber-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Helicopter move",
                path: "en/unsorted/sheli1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Helicopter idle",
                path: "en/unsorted/sheli2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Jet plane crash",
                path: "en/unsorted/sjetcrash.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Normal plane crash",
                path: "en/unsorted/splanecrash.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "WW1 plane",
                path: "en/unsorted/spropww1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "WW2 plane",
                path: "en/unsorted/spropww2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Air attack warning",
                path: "en/unsorted/ssiren2-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Navy": {
        title: "Navy",
        sounds: [
            {
                label: "Ship created",
                path: "en/unsorted/boatbell-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Modern battleship moving",
                path: "en/unsorted/sbattlemove2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ancient fishing ship",
                path: "en/unsorted/sfish-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S paddleboat",
                path: "en/unsorted/spaddleboat.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S sail and oar move",
                path: "en/unsorted/ssailandoarmove.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ship sinking",
                path: "en/unsorted/sshipsink-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Submarine torpedo",
                path: "en/unsorted/storpedo1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Submarine moving",
                path: "en/unsorted/submovementsid27.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Citizens": {
        title: "Citizens",
        sounds: [
            {
                label: "Citizen building",
                path: "en/unsorted/build-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Child move",
                path: "en/unsorted/child-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Child select",
                path: "en/unsorted/child2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Child death",
                path: "en/unsorted/childdeath-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Citizen created",
                path: "en/unsorted/citizen-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Citizen foraging",
                path: "en/unsorted/forage2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Citizen mining",
                path: "en/unsorted/mining2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Citizen building",
                path: "en/unsorted/sbuild2a.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Citizen chopping wood",
                path: "en/unsorted/schop2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Citizen farming",
                path: "en/unsorted/sfarm.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Citizen mining",
                path: "en/unsorted/smining3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Citizen chopping wood",
                path: "en/unsorted/woodchop-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Unsorted": {
        title: "Unsorted",
        sounds: [
            {
                label: "Building select 8",
                path: "en/unsorted/buildingselect-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Crowd 8",
                path: "en/unsorted/crowd-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D achilles 1",
                path: "en/unsorted/dachilles1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D achilles 2",
                path: "en/unsorted/dachilles2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D achilles 3",
                path: "en/unsorted/dachilles3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D achilles 4",
                path: "en/unsorted/dachilles4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D alexander 1",
                path: "en/unsorted/dalexander1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D alexander 2",
                path: "en/unsorted/dalexander2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D alexander 3",
                path: "en/unsorted/dalexander3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D alexander 4",
                path: "en/unsorted/dalexander4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D baron 1",
                path: "en/unsorted/dbaron1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D baron 2",
                path: "en/unsorted/dbaron2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D baron 3",
                path: "en/unsorted/dbaron3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D baron 4",
                path: "en/unsorted/dbaron4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D baron 5",
                path: "en/unsorted/dbaron5.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D bismarck 1",
                path: "en/unsorted/dbismarck1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D bismarck 2",
                path: "en/unsorted/dbismarck2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D bismarck 3",
                path: "en/unsorted/dbismarck3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D bismarck 4",
                path: "en/unsorted/dbismarck4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D black prince 1",
                path: "en/unsorted/dblackprince1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D black prince 2",
                path: "en/unsorted/dblackprince2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D black prince 3",
                path: "en/unsorted/dblackprince3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D black prince 4",
                path: "en/unsorted/dblackprince4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D black robe 1",
                path: "en/unsorted/dblackrobe1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D black robe 2",
                path: "en/unsorted/dblackrobe2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D black robe 3",
                path: "en/unsorted/dblackrobe3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D black robe 4",
                path: "en/unsorted/dblackrobe4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c1 as you wish",
                path: "en/unsorted/dc1asyouwish.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c1 certainly",
                path: "en/unsorted/dc1certainly.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c1 yes",
                path: "en/unsorted/dc1yes.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c1 yes me lord",
                path: "en/unsorted/dc1yesmelord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c2 ok",
                path: "en/unsorted/dc2ok.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c2 right away",
                path: "en/unsorted/dc2rightaway.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c2 yeah",
                path: "en/unsorted/dc2yeah.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c2 yes",
                path: "en/unsorted/dc2yes.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c3 can i help",
                path: "en/unsorted/dc3canihelp.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c3 ok",
                path: "en/unsorted/dc3ok.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c3 ready",
                path: "en/unsorted/dc3ready.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D c3 right away",
                path: "en/unsorted/dc3rightaway.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D charle 1",
                path: "en/unsorted/dcharle1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D charle 2",
                path: "en/unsorted/dcharle2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D charle 3",
                path: "en/unsorted/dcharle3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D elcid 1",
                path: "en/unsorted/delcid1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D elcid 2",
                path: "en/unsorted/delcid2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D elcid 3",
                path: "en/unsorted/delcid3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D elcid 4",
                path: "en/unsorted/delcid4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D ger inf 1",
                path: "en/unsorted/dgerinf1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D ger inf 2",
                path: "en/unsorted/dgerinf2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D ger inf 3",
                path: "en/unsorted/dgerinf3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D ger inf 4",
                path: "en/unsorted/dgerinf4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D gilga 1",
                path: "en/unsorted/dgilga1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D gilga 2",
                path: "en/unsorted/dgilga2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D gilga 3",
                path: "en/unsorted/dgilga3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D gilga 4",
                path: "en/unsorted/dgilga4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D grigor 1",
                path: "en/unsorted/dgrigor1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D grigor 2",
                path: "en/unsorted/dgrigor2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D grigor 3",
                path: "en/unsorted/dgrigor3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D grigor 4",
                path: "en/unsorted/dgrigor4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D grunt scream 1",
                path: "en/unsorted/dgruntscream1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D hannibal 1",
                path: "en/unsorted/dhannibal1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D hannibal 2",
                path: "en/unsorted/dhannibal2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D hannibal 3",
                path: "en/unsorted/dhannibal3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D hannibal 4",
                path: "en/unsorted/dhannibal4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D hector 1",
                path: "en/unsorted/dhector1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D hector 2",
                path: "en/unsorted/dhector2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D hector 3",
                path: "en/unsorted/dhector3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D hector 4",
                path: "en/unsorted/dhector4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D henry 1",
                path: "en/unsorted/dhenry1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D henry 2",
                path: "en/unsorted/dhenry2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D henry 3",
                path: "en/unsorted/dhenry3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D henry 4",
                path: "en/unsorted/dhenry4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D homer 1",
                path: "en/unsorted/dhomer1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D homer 2",
                path: "en/unsorted/dhomer2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D homer 3",
                path: "en/unsorted/dhomer3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D homer 4",
                path: "en/unsorted/dhomer4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D incan 1",
                path: "en/unsorted/dincan1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D incan 2",
                path: "en/unsorted/dincan2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D incan 3",
                path: "en/unsorted/dincan3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D incan 4",
                path: "en/unsorted/dincan4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D napoleon 1",
                path: "en/unsorted/dnapoleon1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D napoleon 2",
                path: "en/unsorted/dnapoleon2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D napoleon 3",
                path: "en/unsorted/dnapoleon3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D napoleon 4",
                path: "en/unsorted/dnapoleon4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D oliver 1",
                path: "en/unsorted/doliver1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D oliver 2",
                path: "en/unsorted/doliver2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D oliver 3",
                path: "en/unsorted/doliver3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D oliver 4",
                path: "en/unsorted/doliver4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p1 by the gods",
                path: "en/unsorted/dp1bythegods.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p1 grunt 1",
                path: "en/unsorted/dp1grunt1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p1 grunt 2",
                path: "en/unsorted/dp1grunt2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p1 grunt 3",
                path: "en/unsorted/dp1grunt3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p1 grunt 4",
                path: "en/unsorted/dp1grunt4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p1 hallelujah",
                path: "en/unsorted/dp1hallelujah.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p1 help you",
                path: "en/unsorted/dp1helpyou.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p1 yes my liege",
                path: "en/unsorted/dp1yesmyliege.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p2 bless you",
                path: "en/unsorted/dp2blessyou.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p2 may i help",
                path: "en/unsorted/dp2mayihelp.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p2 my child",
                path: "en/unsorted/dp2mychild.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p3 amen",
                path: "en/unsorted/dp3amen.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p3 glory",
                path: "en/unsorted/dp3glory.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p3 serve you",
                path: "en/unsorted/dp3serveyou.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p3 yes",
                path: "en/unsorted/dp3yes.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D patton 1",
                path: "en/unsorted/dpatton1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D patton 2",
                path: "en/unsorted/dpatton2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D patton 3",
                path: "en/unsorted/dpatton3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D patton 4",
                path: "en/unsorted/dpatton4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pericles 1",
                path: "en/unsorted/dpericles1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pericles 2",
                path: "en/unsorted/dpericles2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pericles 3",
                path: "en/unsorted/dpericles3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pericles 4",
                path: "en/unsorted/dpericles4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pope 1",
                path: "en/unsorted/dpope1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pope 2",
                path: "en/unsorted/dpope2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pope 3",
                path: "en/unsorted/dpope3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pope 4",
                path: "en/unsorted/dpope4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr1 forsee",
                path: "en/unsorted/dpr1forsee.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr1 grunt 1",
                path: "en/unsorted/dpr1grunt1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr1 grunt 2",
                path: "en/unsorted/dpr1grunt2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr1 grunt 3",
                path: "en/unsorted/dpr1grunt3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr1 grunt 42",
                path: "en/unsorted/dpr1grunt42.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr1 the end",
                path: "en/unsorted/dpr1theend.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr1 yes",
                path: "en/unsorted/dpr1yes.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr1 yes sire",
                path: "en/unsorted/dpr1yessire.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr2 be done",
                path: "en/unsorted/dpr2bedone.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr2 deus 2",
                path: "en/unsorted/dpr2deus2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr2 of course",
                path: "en/unsorted/dpr2ofcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr2 yes",
                path: "en/unsorted/dpr2yes.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr2 your bidding",
                path: "en/unsorted/dpr2yourbidding.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr3 can i help",
                path: "en/unsorted/dpr3canihelp.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr3 deus 2",
                path: "en/unsorted/dpr3deus2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr3 require",
                path: "en/unsorted/dpr3require.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr3 shall be done",
                path: "en/unsorted/dpr3shallbedone.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D pr3 very good",
                path: "en/unsorted/dpr3verygood.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D p scream",
                path: "en/unsorted/dpscream.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D richard 1",
                path: "en/unsorted/drichard1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D richard 2",
                path: "en/unsorted/drichard2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D richard 3",
                path: "en/unsorted/drichard3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D richard 4",
                path: "en/unsorted/drichard4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D roman 1",
                path: "en/unsorted/droman1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D roman 3",
                path: "en/unsorted/droman3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D roman 4",
                path: "en/unsorted/droman4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 deute",
                path: "en/unsorted/ds2deute.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 emoige",
                path: "en/unsorted/ds2emoige.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 esto",
                path: "en/unsorted/ds2esto.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 humin",
                path: "en/unsorted/ds2humin.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 kalos",
                path: "en/unsorted/ds2kalos.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 nai",
                path: "en/unsorted/ds2nai.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 pos",
                path: "en/unsorted/ds2pos.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 sige nun",
                path: "en/unsorted/ds2sigenun.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 stoma",
                path: "en/unsorted/ds2stoma.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 sunte",
                path: "en/unsorted/ds2sunte.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 talas",
                path: "en/unsorted/ds2talas.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 tauta",
                path: "en/unsorted/ds2tauta.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 tigar",
                path: "en/unsorted/ds2tigar.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D s2 tlemon",
                path: "en/unsorted/ds2tlemon.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D sargon 1",
                path: "en/unsorted/dsargon1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D sargon 2",
                path: "en/unsorted/dsargon2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D sargon 3",
                path: "en/unsorted/dsargon3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D sargon 4",
                path: "en/unsorted/dsargon4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D scream 1",
                path: "en/unsorted/dscream1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D scream 2",
                path: "en/unsorted/dscream2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D scream 3",
                path: "en/unsorted/dscream3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D scream 4",
                path: "en/unsorted/dscream4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D under attack 1",
                path: "en/unsorted/dunderattack1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v0 c pike 1",
                path: "en/unsorted/dv0cpike1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v0 c pike 2",
                path: "en/unsorted/dv0cpike2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v0 c pike 3",
                path: "en/unsorted/dv0cpike3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v0 c pike 4",
                path: "en/unsorted/dv0cpike4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v0 sam 1",
                path: "en/unsorted/dv0sam1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v0 sam 2",
                path: "en/unsorted/dv0sam2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v0 sam 3",
                path: "en/unsorted/dv0sam3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v0 sam 4",
                path: "en/unsorted/dv0sam4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 ahoy",
                path: "en/unsorted/dv1ahoy.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 all hands 2",
                path: "en/unsorted/dv1allhands2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 archers forward",
                path: "en/unsorted/dv1archersforward.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 argh",
                path: "en/unsorted/dv1argh.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 attack",
                path: "en/unsorted/dv1attack.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 at your service",
                path: "en/unsorted/dv1atyourservice.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 aye aye 2",
                path: "en/unsorted/dv1ayeaye2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 cavalry forward",
                path: "en/unsorted/dv1cavalryforward.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 death to heathens",
                path: "en/unsorted/dv1deathtoheathens.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 for god",
                path: "en/unsorted/dv1forgod.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 for honor",
                path: "en/unsorted/dv1forhonor.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 for the king",
                path: "en/unsorted/dv1fortheking.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 for the throne",
                path: "en/unsorted/dv1forthethrone.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 grunt 1",
                path: "en/unsorted/dv1grunt1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 grunt 3",
                path: "en/unsorted/dv1grunt3.wav",
                supportedLangs: ["en"],
            },
            {
                label: "D v1 grunt 4",
                path: "en/unsorted/dv1grunt4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 grunt 5",
                path: "en/unsorted/dv1grunt5.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 grunt q 1",
                path: "en/unsorted/dv1gruntq1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 grunt q 2",
                path: "en/unsorted/dv1gruntq2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 hoist sail 2",
                path: "en/unsorted/dv1hoistsail2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 man oars 2",
                path: "en/unsorted/dv1manoars2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 me lord",
                path: "en/unsorted/dv1melord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 move out",
                path: "en/unsorted/dv1moveout.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 my liege",
                path: "en/unsorted/dv1myliege.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 ok my lord",
                path: "en/unsorted/dv1okmylord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 outstanding",
                path: "en/unsorted/dv1outstanding.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 pikemen forward",
                path: "en/unsorted/dv1pikemenforward.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 set full sail 2",
                path: "en/unsorted/dv1setfullsail2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 sink 2",
                path: "en/unsorted/dv1sink2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 sire",
                path: "en/unsorted/dv1sire.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 sword forward",
                path: "en/unsorted/dv1swordforward.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 to victory",
                path: "en/unsorted/dv1tovictory.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 where i go",
                path: "en/unsorted/dv1whereigo.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 who can kill",
                path: "en/unsorted/dv1whocankill.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 yes great one",
                path: "en/unsorted/dv1yesgreatone.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 yes lord",
                path: "en/unsorted/dv1yeslord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 yes master",
                path: "en/unsorted/dv1yesmaster.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v1 your orders",
                path: "en/unsorted/dv1yourorders.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 as you wish",
                path: "en/unsorted/dv2asyouwish.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 bell tolls",
                path: "en/unsorted/dv2belltolls.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 captain",
                path: "en/unsorted/dv2captain.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 consider",
                path: "en/unsorted/dv2consider.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 fire broadside 2",
                path: "en/unsorted/dv2firebroadside2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 for the city",
                path: "en/unsorted/dv2forthecity.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 full broadside 2",
                path: "en/unsorted/dv2fullbroadside2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 grunt 1",
                path: "en/unsorted/dv2grunt1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 grunt 2",
                path: "en/unsorted/dv2grunt2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 grunt 3",
                path: "en/unsorted/dv2grunt3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 grunt 4",
                path: "en/unsorted/dv2grunt4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 grunt 5",
                path: "en/unsorted/dv2grunt5.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 grunt 6",
                path: "en/unsorted/dv2grunt6.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 grunt 8",
                path: "en/unsorted/dv2grunt8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 head will roll",
                path: "en/unsorted/dv2headwillroll.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 helmsmen 2",
                path: "en/unsorted/dv2helmsmen2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 leave no one",
                path: "en/unsorted/dv2leavenoone.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 lower achor 2",
                path: "en/unsorted/dv2lowerachor2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 may i assist",
                path: "en/unsorted/dv2mayiassist.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 my pleasure",
                path: "en/unsorted/dv2mypleasure.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 orders captain 2",
                path: "en/unsorted/dv2orderscaptain2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 raise achor 2",
                path: "en/unsorted/dv2raiseachor2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 ready",
                path: "en/unsorted/dv2ready.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 ready cannons 2",
                path: "en/unsorted/dv2readycannons2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 rue the day",
                path: "en/unsorted/dv2ruetheday.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 serve you",
                path: "en/unsorted/dv2serveyou.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 set jib 2",
                path: "en/unsorted/dv2setjib2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 surely",
                path: "en/unsorted/dv2surely.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 thy will",
                path: "en/unsorted/dv2thywill.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v2 your command",
                path: "en/unsorted/dv2yourcommand.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 affirmative",
                path: "en/unsorted/dv3affirmative.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 affirmative 2",
                path: "en/unsorted/dv3affirmative2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 attention on deck",
                path: "en/unsorted/dv3attentionondeck.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 awaiting",
                path: "en/unsorted/dv3awaiting.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 awaiting 2",
                path: "en/unsorted/dv3awaiting2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 bridge here",
                path: "en/unsorted/dv3bridgehere.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 can i assist",
                path: "en/unsorted/dv3caniassist.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 command",
                path: "en/unsorted/dv3command.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 command 2",
                path: "en/unsorted/dv3command2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 done",
                path: "en/unsorted/dv3done.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 fall out",
                path: "en/unsorted/dv3fallout.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 first officer",
                path: "en/unsorted/dv3firstofficer.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 go ahead 2",
                path: "en/unsorted/dv3goahead2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 lets go",
                path: "en/unsorted/dv3letsgo.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 lets go 2",
                path: "en/unsorted/dv3letsgo2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 of course sir",
                path: "en/unsorted/dv3ofcoursesir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 our course",
                path: "en/unsorted/dv3ourcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 plotting new",
                path: "en/unsorted/dv3plottingnew.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 prepare",
                path: "en/unsorted/dv3prepare.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 ready sir",
                path: "en/unsorted/dv3readysir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 ready sir 2",
                path: "en/unsorted/dv3readysir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 roger",
                path: "en/unsorted/dv3roger.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 setting course",
                path: "en/unsorted/dv3settingcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 sir",
                path: "en/unsorted/dv3sir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 sir 2",
                path: "en/unsorted/dv3sir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 sir yes sir",
                path: "en/unsorted/dv3siryessir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 sir yes sir 2",
                path: "en/unsorted/dv3siryessir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 standing by",
                path: "en/unsorted/dv3standingby.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 standing by 2",
                path: "en/unsorted/dv3standingby2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 ten 4",
                path: "en/unsorted/dv3ten4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 ten 4 2",
                path: "en/unsorted/dv3ten42.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 to battle",
                path: "en/unsorted/dv3tobattle.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 where to sir",
                path: "en/unsorted/dv3wheretosir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 yes commander",
                path: "en/unsorted/dv3yescommander.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 yes commander 2",
                path: "en/unsorted/dv3yescommander2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 yes sir",
                path: "en/unsorted/dv3yessir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 yes sir 2",
                path: "en/unsorted/dv3yessir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D v3 you got it",
                path: "en/unsorted/dv3yougotit.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D william 1",
                path: "en/unsorted/dwilliam1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D william 2",
                path: "en/unsorted/dwilliam2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "D william 3",
                path: "en/unsorted/dwilliam3.wav",
                supportedLangs: ["en"],
            },
            {
                label: "D william 4",
                path: "en/unsorted/dwilliam4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Fem scream 8",
                path: "en/unsorted/femscream-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F grigor 1",
                path: "en/unsorted/fgrigor1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F grigor 2",
                path: "en/unsorted/fgrigor2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F grigor 3",
                path: "en/unsorted/fgrigor3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F grigor 4",
                path: "en/unsorted/fgrigor4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F hauptmann 1",
                path: "en/unsorted/fhauptmann1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F hauptmann 2",
                path: "en/unsorted/fhauptmann2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F hauptmann 3",
                path: "en/unsorted/fhauptmann3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F hauptmann 4",
                path: "en/unsorted/fhauptmann4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Fire 8",
                path: "en/unsorted/fire-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F mor cav 1",
                path: "en/unsorted/fmorcav1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F mor cav 2",
                path: "en/unsorted/fmorcav2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F mor cav 3",
                path: "en/unsorted/fmorcav3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F mor cav 4",
                path: "en/unsorted/fmorcav4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v1 ahoy",
                path: "en/unsorted/fv1ahoy.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v1 all hands",
                path: "en/unsorted/fv1allhands.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v1 aye aye",
                path: "en/unsorted/fv1ayeaye.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v1 set full sail",
                path: "en/unsorted/fv1setfullsail.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v1 sink",
                path: "en/unsorted/fv1sink.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v2 captain",
                path: "en/unsorted/fv2captain.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v2 full broadside",
                path: "en/unsorted/fv2fullbroadside.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v2 lower anchor",
                path: "en/unsorted/fv2loweranchor.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v2 orders captain",
                path: "en/unsorted/fv2orderscaptain.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v2 ready cannons",
                path: "en/unsorted/fv2readycannons.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v2 set jib",
                path: "en/unsorted/fv2setjib.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 attention on deck",
                path: "en/unsorted/fv3attentionondeck.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 bridge here",
                path: "en/unsorted/fv3bridgehere.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 go ahead",
                path: "en/unsorted/fv3goahead.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 load guns",
                path: "en/unsorted/fv3loadguns.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 our course",
                path: "en/unsorted/fv3ourcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 plotting new",
                path: "en/unsorted/fv3plottingnew.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 roger",
                path: "en/unsorted/fv3roger.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 setting course",
                path: "en/unsorted/fv3settingcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 ten 4",
                path: "en/unsorted/fv3ten4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 where to sir",
                path: "en/unsorted/fv3wheretosir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "F v3 yes commander 2",
                path: "en/unsorted/fv3yescommander2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hawk 8",
                path: "en/unsorted/hawk-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J scream 1",
                path: "en/unsorted/jscream1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J scream 2",
                path: "en/unsorted/jscream2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J scream 3",
                path: "en/unsorted/jscream3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v2 may i assist",
                path: "en/unsorted/jv2mayiassist.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v2 my pleasure",
                path: "en/unsorted/jv2mypleasure.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v2 right away",
                path: "en/unsorted/jv2rightaway.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 affirmative",
                path: "en/unsorted/jv3affirmative.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 affirmative 2",
                path: "en/unsorted/jv3affirmative2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 attention on deck",
                path: "en/unsorted/jv3attentionondeck.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 awaiting orders",
                path: "en/unsorted/jv3awaitingorders.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 bridge here",
                path: "en/unsorted/jv3bridgehere.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 by your command",
                path: "en/unsorted/jv3byyourcommand.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 by your command 2",
                path: "en/unsorted/jv3byyourcommand2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 can i assist",
                path: "en/unsorted/jv3caniassist.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 can i help",
                path: "en/unsorted/jv3canihelp.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 first officer",
                path: "en/unsorted/jv3firstofficer.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 lets go",
                path: "en/unsorted/jv3letsgo.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 of course",
                path: "en/unsorted/jv3ofcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 of course 2",
                path: "en/unsorted/jv3ofcourse2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 our course sir",
                path: "en/unsorted/jv3ourcoursesir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 plotting course",
                path: "en/unsorted/jv3plottingcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 ready sir",
                path: "en/unsorted/jv3readysir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 ready sir 2",
                path: "en/unsorted/jv3readysir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 roger",
                path: "en/unsorted/jv3roger.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 setting course",
                path: "en/unsorted/jv3settingcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 sir yes sir",
                path: "en/unsorted/jv3siryessir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 standing by",
                path: "en/unsorted/jv3standingby.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 ten 4",
                path: "en/unsorted/jv3ten4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 underway",
                path: "en/unsorted/jv3underway.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 where to sir",
                path: "en/unsorted/jv3wheretosir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 yes commander",
                path: "en/unsorted/jv3yescommander.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "J v3 yes commander 2",
                path: "en/unsorted/jv3yescommander2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K black robe 1",
                path: "en/unsorted/kblackrobe1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K black robe 2",
                path: "en/unsorted/kblackrobe2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K black robe 3",
                path: "en/unsorted/kblackrobe3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K black robe 4",
                path: "en/unsorted/kblackrobe4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K brit inf 1",
                path: "en/unsorted/kbritinf1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K brit inf 2",
                path: "en/unsorted/kbritinf2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K brit inf 3",
                path: "en/unsorted/kbritinf3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K brit inf 4",
                path: "en/unsorted/kbritinf4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K grunt 1",
                path: "en/unsorted/kgrunt1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K grunt 3",
                path: "en/unsorted/kgrunt3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K grunt 4",
                path: "en/unsorted/kgrunt4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K grunt 5",
                path: "en/unsorted/kgrunt5.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K jester 1",
                path: "en/unsorted/kjester1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K jester 2",
                path: "en/unsorted/kjester2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K jester 3",
                path: "en/unsorted/kjester3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K jester 4",
                path: "en/unsorted/kjester4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K per cav 1",
                path: "en/unsorted/kpercav1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K per cav 2",
                path: "en/unsorted/kpercav2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K per cav 3",
                path: "en/unsorted/kpercav3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K per cav 4",
                path: "en/unsorted/kpercav4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K spa cav 1",
                path: "en/unsorted/kspacav1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K spa cav 3",
                path: "en/unsorted/kspacav3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K spa cav 4",
                path: "en/unsorted/kspacav4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 ahoy",
                path: "en/unsorted/kv1ahoy.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 all hands",
                path: "en/unsorted/kv1allhands.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 aye aye",
                path: "en/unsorted/kv1ayeaye.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 death to heathens",
                path: "en/unsorted/kv1deathtoheathens.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 for god",
                path: "en/unsorted/kv1forgod.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 for honor",
                path: "en/unsorted/kv1forhonor.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 for the throne",
                path: "en/unsorted/kv1forthethrone.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 hoist sails",
                path: "en/unsorted/kv1hoistsails.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 my lord",
                path: "en/unsorted/kv1mylord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 ok my lord",
                path: "en/unsorted/kv1okmylord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 ready lord",
                path: "en/unsorted/kv1readylord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 set full sail",
                path: "en/unsorted/kv1setfullsail.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 to victory",
                path: "en/unsorted/kv1tovictory.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 where go",
                path: "en/unsorted/kv1wherego.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 with heart",
                path: "en/unsorted/kv1withheart.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 with honor",
                path: "en/unsorted/kv1withhonor.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 with my life",
                path: "en/unsorted/kv1withmylife.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 yes my lord",
                path: "en/unsorted/kv1yesmylord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 your orders",
                path: "en/unsorted/kv1yourorders.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v1 your service",
                path: "en/unsorted/kv1yourservice.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 alive",
                path: "en/unsorted/kv2alive.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 assist",
                path: "en/unsorted/kv2assist.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 be done",
                path: "en/unsorted/kv2bedone.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 captain",
                path: "en/unsorted/kv2captain.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 consider",
                path: "en/unsorted/kv2consider.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 fire a broadside",
                path: "en/unsorted/kv2fireabroadside.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 for the city",
                path: "en/unsorted/kv2forthecity.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 full broadside",
                path: "en/unsorted/kv2fullbroadside.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 heads will roll",
                path: "en/unsorted/kv2headswillroll.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 orders captain",
                path: "en/unsorted/kv2orderscaptain.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 our sovereign",
                path: "en/unsorted/kv2oursovereign.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 ready",
                path: "en/unsorted/kv2ready.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 serve you",
                path: "en/unsorted/kv2serveyou.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 so be it",
                path: "en/unsorted/kv2sobeit.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 will be done",
                path: "en/unsorted/kv2willbedone.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v2 your command",
                path: "en/unsorted/kv2yourcommand.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 affirmative 2",
                path: "en/unsorted/kv3affirmative2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 assist",
                path: "en/unsorted/kv3assist.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 awaiting orders",
                path: "en/unsorted/kv3awaitingorders.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 awaiting orders 2",
                path: "en/unsorted/kv3awaitingorders2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 first officer",
                path: "en/unsorted/kv3firstofficer.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 go ahead",
                path: "en/unsorted/kv3goahead.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 of course",
                path: "en/unsorted/kv3ofcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 our course",
                path: "en/unsorted/kv3ourcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 plotting new",
                path: "en/unsorted/kv3plottingnew.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 ready sir",
                path: "en/unsorted/kv3readysir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 ready sir 2",
                path: "en/unsorted/kv3readysir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 setting course",
                path: "en/unsorted/kv3settingcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 sir",
                path: "en/unsorted/kv3sir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 sir 2",
                path: "en/unsorted/kv3sir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 sir yes sir",
                path: "en/unsorted/kv3siryessir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 sir yes sir 2",
                path: "en/unsorted/kv3siryessir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 standing by",
                path: "en/unsorted/kv3standingby.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 ten 4",
                path: "en/unsorted/kv3ten4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 yes commander",
                path: "en/unsorted/kv3yescommander.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 yes commander 2",
                path: "en/unsorted/kv3yescommander2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 yes sir",
                path: "en/unsorted/kv3yessir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 yes sir 2",
                path: "en/unsorted/kv3yessir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 your command",
                path: "en/unsorted/kv3yourcommand.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "K v3 your command 2",
                path: "en/unsorted/kv3yourcommand2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech 2 8",
                path: "en/unsorted/mech2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech beep 2 8",
                path: "en/unsorted/mechbeep2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech beeps 8",
                path: "en/unsorted/mechbeeps-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 1",
                path: "en/unsorted/mechvoice1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 2",
                path: "en/unsorted/mechvoice2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 3",
                path: "en/unsorted/mechvoice3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 4",
                path: "en/unsorted/mechvoice4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 5",
                path: "en/unsorted/mechvoice5.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 6",
                path: "en/unsorted/mechvoice6.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 7",
                path: "en/unsorted/mechvoice7.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 8",
                path: "en/unsorted/mechvoice8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech voice 9",
                path: "en/unsorted/mechvoice9.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c1 as you wish",
                path: "en/unsorted/nc1asyouwish.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c1 certainly",
                path: "en/unsorted/nc1certainly.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c1 yes",
                path: "en/unsorted/nc1yes.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c1 yes me lord",
                path: "en/unsorted/nc1yesmelord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c2 ok",
                path: "en/unsorted/nc2ok.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c2 right away",
                path: "en/unsorted/nc2rightaway.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c2 yeah",
                path: "en/unsorted/nc2yeah.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c2 yes",
                path: "en/unsorted/nc2yes.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c3 can i help",
                path: "en/unsorted/nc3canihelp.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c3 ok",
                path: "en/unsorted/nc3ok.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c3 ready",
                path: "en/unsorted/nc3ready.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N c3 right away",
                path: "en/unsorted/nc3rightaway.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N elizabeth 1",
                path: "en/unsorted/nelizabeth1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N elizabeth 2",
                path: "en/unsorted/nelizabeth2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N elizabeth 3",
                path: "en/unsorted/nelizabeth3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N elizabeth 4",
                path: "en/unsorted/nelizabeth4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N grunt 1",
                path: "en/unsorted/ngrunt1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N grunt 2",
                path: "en/unsorted/ngrunt2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N isabella 1",
                path: "en/unsorted/nisabella1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N isabella 2",
                path: "en/unsorted/nisabella2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N isabella 3",
                path: "en/unsorted/nisabella3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N isabella 4",
                path: "en/unsorted/nisabella4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N m1 assist",
                path: "en/unsorted/nm1assist.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N m1 coming",
                path: "en/unsorted/nm1coming.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N m1 help",
                path: "en/unsorted/nm1help.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N m1 on my way",
                path: "en/unsorted/nm1onmyway.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N m2 hurt",
                path: "en/unsorted/nm2hurt.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N m2 need",
                path: "en/unsorted/nm2need.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N m2 on it",
                path: "en/unsorted/nm2onit.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N m2 right there",
                path: "en/unsorted/nm2rightthere.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N s2 kalos",
                path: "en/unsorted/ns2kalos.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N s2 pote",
                path: "en/unsorted/ns2pote.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N s2 stoma",
                path: "en/unsorted/ns2stoma.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N s2 talas",
                path: "en/unsorted/ns2talas.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N scream 1",
                path: "en/unsorted/nscream1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 affirmative",
                path: "en/unsorted/nv3affirmative.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 affirmative 2",
                path: "en/unsorted/nv3affirmative2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 awaiting orders",
                path: "en/unsorted/nv3awaitingorders.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 go ahead",
                path: "en/unsorted/nv3goahead.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 ready sir",
                path: "en/unsorted/nv3readysir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 ready sir 2",
                path: "en/unsorted/nv3readysir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 roger",
                path: "en/unsorted/nv3roger.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 sir",
                path: "en/unsorted/nv3sir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 sir yes sir",
                path: "en/unsorted/nv3siryessir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 sir yes sir 2",
                path: "en/unsorted/nv3siryessir2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 standing by",
                path: "en/unsorted/nv3standingby.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 ten 4",
                path: "en/unsorted/nv3ten4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 yes commander",
                path: "en/unsorted/nv3yescommander.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 yes commander 2",
                path: "en/unsorted/nv3yescommander2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "N v3 yes sir",
                path: "en/unsorted/nv3yessir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Overtime perf test",
                path: "en/unsorted/overtimeperftest.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Perf test",
                path: "en/unsorted/perftest.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S mech 4",
                path: "en/unsorted/smech4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S walk 1",
                path: "en/unsorted/swalk1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S walk 2",
                path: "en/unsorted/swalk2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S walk 3",
                path: "en/unsorted/swalk3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S walk 4",
                path: "en/unsorted/swalk4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S walk 5",
                path: "en/unsorted/swalk5.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S walk 6",
                path: "en/unsorted/swalk6.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "University 2 8",
                path: "en/unsorted/university2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Village 8",
                path: "en/unsorted/village-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Vol blast",
                path: "en/unsorted/volblast.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Volcano 2 8",
                path: "en/unsorted/volcano2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W hind 1",
                path: "en/unsorted/whind1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W hind 2",
                path: "en/unsorted/whind2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W hind 3",
                path: "en/unsorted/whind3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W hind 4",
                path: "en/unsorted/whind4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W housecarl 1",
                path: "en/unsorted/whousecarl1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W housecarl 2",
                path: "en/unsorted/whousecarl2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W housecarl 3",
                path: "en/unsorted/whousecarl3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W housecarl 4",
                path: "en/unsorted/whousecarl4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W scream 1",
                path: "en/unsorted/wscream1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W scream 2",
                path: "en/unsorted/wscream2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W scream 3",
                path: "en/unsorted/wscream3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 ahoy",
                path: "en/unsorted/wv1ahoy.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 all hands",
                path: "en/unsorted/wv1allhands.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 attack",
                path: "en/unsorted/wv1attack.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 aye aye",
                path: "en/unsorted/wv1ayeaye.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 for the king",
                path: "en/unsorted/wv1fortheking.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 ready lord",
                path: "en/unsorted/wv1readylord.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 sink",
                path: "en/unsorted/wv1sink.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 sire",
                path: "en/unsorted/wv1sire.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 to the death",
                path: "en/unsorted/wv1tothedeath.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v1 with heart",
                path: "en/unsorted/wv1withheart.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 as you command",
                path: "en/unsorted/wv2asyoucommand.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 bell tolls",
                path: "en/unsorted/wv2belltolls.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 captain",
                path: "en/unsorted/wv2captain.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 fire a broadside",
                path: "en/unsorted/wv2fireabroadside.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 lower anchor",
                path: "en/unsorted/wv2loweranchor.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 orders captain",
                path: "en/unsorted/wv2orderscaptain.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 raise anchor",
                path: "en/unsorted/wv2raiseanchor.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 rue the day",
                path: "en/unsorted/wv2ruetheday.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 serve you",
                path: "en/unsorted/wv2serveyou.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 set the jib",
                path: "en/unsorted/wv2setthejib.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 so be it",
                path: "en/unsorted/wv2sobeit.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v2 your command",
                path: "en/unsorted/wv2yourcommand.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 awaiting orders",
                path: "en/unsorted/wv3awaitingorders.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 bridge here",
                path: "en/unsorted/wv3bridgehere.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 first officer",
                path: "en/unsorted/wv3firstofficer.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 plotting new",
                path: "en/unsorted/wv3plottingnew.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 ready sir",
                path: "en/unsorted/wv3readysir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 setting course",
                path: "en/unsorted/wv3settingcourse.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 ten 4",
                path: "en/unsorted/wv3ten4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 where to sir",
                path: "en/unsorted/wv3wheretosir.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "W v3 you command",
                path: "en/unsorted/wv3youcommand.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Interface": {
        title: "Interface",
        sounds: [
            {
                label: "Menu button select",
                path: "en/unsorted/button1.wav",
                supportedLangs: ["en"],
            },
            {
                label: "Menu button canceled",
                path: "en/unsorted/button2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Dropdown",
                path: "en/unsorted/button3.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Dropdown select select",
                path: "en/unsorted/button4.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Negative",
                path: "en/unsorted/button5.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Choose civilization time expiring",
                path: "en/unsorted/clock-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Computer player ally attack",
                path: "en/unsorted/compattack.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Scenario objective changed",
                path: "en/unsorted/fanfare-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Flare",
                path: "en/unsorted/flare-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Frame off",
                path: "en/unsorted/frameoff.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Frame on",
                path: "en/unsorted/frameon.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Hotkey negative",
                path: "en/unsorted/hotkeyalarm.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Message",
                path: "en/unsorted/message-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Out of synch warning",
                path: "en/unsorted/outofsynch.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Feral growl",
                path: "en/unsorted/remove me.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Beep",
                path: "en/unsorted/resending.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Player started wonder",
                path: "en/unsorted/wonderclock.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Cannons": {
        title: "Cannons",
        sounds: [
            {
                label: "Cannon",
                path: "en/unsorted/cannon2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Cannon",
                path: "en/unsorted/cannon3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ancient cannon",
                path: "en/unsorted/cannon4-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ancient cannon",
                path: "en/unsorted/cannon5-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Tower cannon",
                path: "en/unsorted/cannon6-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Howitzer cannon",
                path: "en/unsorted/cannon7-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Artillery",
                path: "en/unsorted/cannon8-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Laser tank cannon",
                path: "en/unsorted/lasercannon-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Flack halftrack firing",
                path: "en/unsorted/multicannon-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Laser shot with shock effect",
                path: "en/unsorted/pulsecannon-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Explosions": {
        title: "Explosions",
        sounds: [
            {
                label: "Tank and cannon exploding",
                path: "en/unsorted/explosion1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Cannon hit building",
                path: "en/unsorted/explosion2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mortar and artillery hit ground",
                path: "en/unsorted/explosion4-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Tower missile hit ground",
                path: "en/unsorted/explosion5-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Explosion 6 8",
                path: "en/unsorted/explosion6-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S nuke move 8",
                path: "en/unsorted/snukemove-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Guns / Laser guns": {
        title: "Guns / Laser guns",
        sounds: [
            {
                label: "Laser gun",
                path: "en/unsorted/laser1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Laser gun",
                path: "en/unsorted/laser2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Laser gun",
                path: "en/unsorted/laser3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Laser gun",
                path: "en/unsorted/laser4-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Modern gun",
                path: "en/unsorted/mgun1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Modern gun",
                path: "en/unsorted/mgun2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Modern gun",
                path: "en/unsorted/mgun3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Trench mortar",
                path: "en/unsorted/mortar-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Resonator",
                path: "en/unsorted/resonator-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ancient gun",
                path: "en/unsorted/rifle1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ancient gun",
                path: "en/unsorted/rifle2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ancient gun",
                path: "en/unsorted/rifle3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ancient gun",
                path: "en/unsorted/rifle4-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Ancient gun",
                path: "en/unsorted/rifle5-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Sniper shot",
                path: "en/unsorted/snipergun-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Mechs": {
        title: "Mechs",
        sounds: [
            {
                label: "Mech walking",
                path: "en/unsorted/mechwalk3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech shut down",
                path: "en/unsorted/smechshutdown.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech walking",
                path: "en/unsorted/smechwalking1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Mech walking",
                path: "en/unsorted/smechwalking2-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Siege": {
        title: "Siege",
        sounds: [
            {
                label: "Ram attack",
                path: "en/unsorted/ramcrashsid141.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Modern age cannon move",
                path: "en/unsorted/saamove2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Catapult move",
                path: "en/unsorted/scatamove-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Trebuchet move",
                path: "en/unsorted/scatamove2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Catapult shot",
                path: "en/unsorted/scatapultshot-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Siege weapon created",
                path: "en/unsorted/siegecreate-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Siege weapon select",
                path: "en/unsorted/siegeselect-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Modern siege created",
                path: "en/unsorted/tankcreate-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Other weapons": {
        title: "Other weapons",
        sounds: [
            {
                label: "Rock thrower shoot",
                path: "en/unsorted/rock-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Siege weapon hit building",
                path: "en/unsorted/rockhit-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Arrow shoot",
                path: "en/unsorted/sarrow.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Arrow shoot",
                path: "en/unsorted/sarrow2.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Club and mace hit",
                path: "en/unsorted/sclub-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Flame thrower attack",
                path: "en/unsorted/sflamethrow.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Grenade launcher, bazooka, fighter bomber missile and helicopter anti-tank",
                path: "en/unsorted/smissile1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "S rocket 1",
                path: "en/unsorted/srocket1.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Sargon attack",
                path: "en/unsorted/whip-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Swords & Spears": {
        title: "Swords & Spears",
        sounds: [
            {
                label: "Spearman attack",
                path: "en/unsorted/sspear.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Short sword",
                path: "en/unsorted/ssword4b.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Sword",
                path: "en/unsorted/sword1-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Sword",
                path: "en/unsorted/sword2-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Sword",
                path: "en/unsorted/sword3-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Sword",
                path: "en/unsorted/sword4-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Sword",
                path: "en/unsorted/sword5-8.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Sword",
                path: "en/unsorted/sword6-8.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
    "Tanks": {
        title: "Tanks",
        sounds: [
            {
                label: "Tank created",
                path: "en/unsorted/stankcreate.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Another tank movement",
                path: "en/unsorted/stankmove1b.wav",
                supportedLangs: ["en","de"],
            },
            {
                label: "Main tank move",
                path: "en/unsorted/stankmove2b.wav",
                supportedLangs: ["en","de"],
            },
        ],
    },
};

export default groups;

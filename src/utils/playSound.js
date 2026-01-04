import {convertLabelToFileName} from "@/utils/utils.js";

// Add optional `language` parameter (default 'en'). When language is 'de', use the _german folder.
export function playSound(sound, extension, type, language = 'en') {
    const fileName = sound.filename ? sound.filename : convertLabelToFileName(sound.label)

    return new Promise(function (resolve, reject) {
        let audio = new Audio();
        audio.preload = 'auto';
        audio.autoplay = true;
        audio.onerror = reject;
        audio.onended = resolve;
        const prefix = language === 'de' ? '_german' : type;    // The german files are not categorized
        audio.src = `sounds/${prefix}/${fileName}${extension}`;
    });
}

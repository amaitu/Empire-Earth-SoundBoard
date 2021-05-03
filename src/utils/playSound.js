import {convertLabelToFileName} from "@/utils/utils.js";

export function playSound(sound, extension, type) {
    const fileName = sound.filename ? sound.filename : convertLabelToFileName(sound.label)

    return new Promise(function (resolve, reject) {
        let audio = new Audio();
        audio.preload = 'auto';
        audio.autoplay = true;
        audio.onerror = reject;
        audio.onended = resolve;
        audio.src = `sounds/${type}/${fileName}${extension}`;
    });
}

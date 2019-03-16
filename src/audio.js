export class AudioPlayer {
    constructor() {
        this.audioList = [];
        this.playingAudio = null;
    }

    play(info) {
        if(this.playingAudio)
            this.playingAudio.el.pause();

        const existing = this.audioList.find(a => a.info.ogg == info.ogg);
        if(existing)
        {
            existing.el.play();
            this.playingAudio = existing;
            return existing;
        }

        console.log("create", info);
        const audioEl = new Audio();

        let source = document.createElement("source");
        source.src = info.ogg;
        audioEl.appendChild(source);

        source = document.createElement("source");
        source.src = info.mp3;
        audioEl.appendChild(source);

        const audioData = {
            el: audioEl,
            info
        };

        audioEl.play();

        this.audioList.push(audioData);
        this.playingAudio = audioData;
        return audioData;
    }

    pause(audio) {
        if(audio == this.playingAudio) {
            this.playingAudio = null;
        }

        audio.el.pause();
    }
};
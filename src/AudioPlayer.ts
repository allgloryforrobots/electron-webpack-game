export class AudioPlayer {

    // список аудиодорожек с музыкой и эффектами
    tracks: {
        [trackName: string]: HTMLAudioElement
    }
    // уровень громкости
    volume: number 

    constructor() {

        try {
            this.tracks.mainMenu = new Audio('music/sad-dramatic-cinematic-vocal-trailer.mp3');
        }
        catch (e) {
            console.log(e)
        }
        
        this.volume = 0.5
    }

    // отключаем воспроизведение всех треков на странице
    muteAll(): void {

        for(let i in this.tracks) {
            this.tracks[i].pause()
            this.tracks[i].currentTime = 0
            this.tracks[i].loop = false
        }

    }


    // остановить трек
    muteTrack(trackName: string): void {

        this.tracks[trackName].pause()
        this.tracks[trackName].currentTime = 0
        this.tracks[trackName].loop = false

    }


    play(trackName: string): void {

        try {
            if(this.tracks[trackName].networkState === 1) {
                this.tracks[trackName].volume = this.volume;
                this.tracks[trackName].play()
            }
        } catch (e) {
            console.log(e)
        }

    }


    // для треков в битвах, которые должны воспроизводиться циклично
    playLoop(trackName: string): void {
        this.tracks[trackName].play()
        this.tracks[trackName].loop = true
    }


    // установить громкость
    setVolume(volume: number): void {
        this.volume = volume;
    }


}


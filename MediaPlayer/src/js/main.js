import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const button = document.querySelector('button');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]});

button.onclick = () => {
    if(player.media.paused){
        player.play();
        // console.log("play")
    } else {
        player.pause();
        // console.log("pause")
    }

};``
function videoPlay(id){
    const urlSecreta = "https://clasesecretadelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url " + urlSecreta );
}

function videoStop(id){
    const urlSecreta = "https://clasesecretadelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta );
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID)
    }

    pausar(){
        videoStop(this.videoID)
    }
}
function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    console.log(this)
    this.plugins.array.forEach(plugin => {
        plugin.run(this)
    });
}

MediaPlayer.prototype.play = function(){
    this.media.play()
}

MediaPlayer.prototype.pause = function(){
    this.media.pause()
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

export default MediaPlayer;
AFRAME.registerComponent('video-handler', {
    init: function () {
        console.log("Status: AR System Ready"); // Debugger will show this first
        
        const video = document.querySelector("#ar-video");

        this.el.addEventListener('targetFound', event => {
            console.log("Target Found: Playing Video"); // Dash will update to this
            video.play();
        });

        this.el.addEventListener('targetLost', event => {
            console.log("Target Lost: Video Paused"); // Dash will update to this
            video.pause();
        });
    }
});
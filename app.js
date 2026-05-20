AFRAME.registerComponent('image-tracker', {
    init: function () {
        console.log("Status: AR Ready. Scan your card!");

        // Triggered when the camera recognizes the card
        this.el.addEventListener('targetFound', event => {
            console.log("Target Found! Showing overlay...");
        });

        // Triggered when the card is moved away
        this.el.addEventListener('targetLost', event => {
            console.log("Target Lost. Scanning...");
        });
    }
});
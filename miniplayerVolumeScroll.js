(function miniplayerVolumeScroll() {
    if (!Spicetify.Player) {
        setTimeout(miniplayerVolumeScroll, 200);
        return;
    }

    const VOLUME_STEP = 0.05; // 5% volume adjustment per scroll tick

    function handleWheel(e) {
        e.preventDefault();
        const currentVol = Spicetify.Player.getVolume();
        const delta = e.deltaY < 0 ? VOLUME_STEP : -VOLUME_STEP;
        const newVol = Math.max(0, Math.min(1, currentVol + delta));
        Spicetify.Player.setVolume(newVol);
    }

    function attachToPip(pipWindow) {
        if (!pipWindow || pipWindow._hasVolumeScroll) return;
        pipWindow._hasVolumeScroll = true;
        // Listen for scroll wheel events inside the PiP window
        pipWindow.addEventListener('wheel', handleWheel, { passive: false });
    }

    // Hook into Chromium's Document Picture-in-Picture API
    if ('documentPictureInPicture' in window) {
        // Catch when the miniplayer opens
        window.documentPictureInPicture.addEventListener('enter', (event) => {
            attachToPip(event.window);
        });

        // Catch it if the miniplayer is already open when Spicetify loads
        if (window.documentPictureInPicture.window) {
            attachToPip(window.documentPictureInPicture.window);
        }
    }
})();
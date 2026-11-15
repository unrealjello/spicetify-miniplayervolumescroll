# Spicetify Miniplayer Volume Scroll

A lightweight [Spicetify](https://spicetify.app/) extension that adds hover-to-scroll volume control to Spotify's official Picture-in-Picture (PiP) Miniplayer window.

Even when the Miniplayer is collapsed to its smallest size where the volume slider disappears, hovering anywhere over the Miniplayer window and rolling your mouse scroll wheel will seamlessly adjust playback volume.

---

## Features

- **Hover-to-Scroll Volume:** Adjust playback volume by scrolling anywhere over the floating Miniplayer.
- **Document PiP Support:** Hooks directly into Chromium's `documentPictureInPicture` API context used by Spotify.
- **Smooth Increments:** Steps volume up or down in 5% increments per scroll tick.

---

## Installation

### Step 1: Download the Extension
1. Press `Win + R`, paste the following path, and press **Enter**:
   ```text
   %appdata%\spicetify\Extensions
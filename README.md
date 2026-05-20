# 🎁 AR Video Gift

A fun, interactive **Augmented Reality (AR) gifting project** that uses image recognition to display videos or images in AR. Perfect for special occasions, birthdays, anniversaries, or any memorable moment you want to surprise someone with!

## ✨ Features

- **Image-based AR tracking** - Point your camera at a specific image to trigger AR content
- **Video playback** - Display an embedded video that plays when the target image is detected
- **Image overlay** - Alternative mode to display static images in AR
- **Mobile-friendly** - Works seamlessly on iOS and Android devices
- **No installation required** - Just open in a web browser!

## 🎯 How It Works

1. The application uses **Mind AR** for image recognition to detect a target image from your device camera
2. When the target image is recognized, A-Frame renders AR content (video or image) overlaid on the target
3. The video plays automatically when the target is visible and pauses when it's not

## 📁 Project Structure

```
ar-project/
├── index.html              # Main AR video experience
├── index-photo.html        # Alternative AR image overlay experience
├── style.css               # Styling for fullscreen AR view
├── package.json            # Project metadata
├── assets/
│   ├── targets.mind        # Mind AR target database (generated from card.jpg)
│   ├── card.jpg            # The image to scan with your camera
│   ├── overlay.jpg         # Static image for the photo version
│   └── video.mp4           # Video to display in AR
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser with WebGL support (Chrome, Firefox, Safari, Edge)
- A device with a camera (smartphone, tablet, or laptop)
- The target image (card.jpg) printed or displayed on a screen

### Setup

1. **Clone or download this project**
   ```bash
   git clone <repository-url>
   cd ar-project
   ```

2. **Prepare your target image**
   - Use `assets/card.jpg` as your target image
   - Print it or display it on another device
   - The more distinct features in the image, the better the tracking

3. **Add your custom media**
   - Replace `assets/video.mp4` with your own video
   - Or edit `index-photo.html` to change the overlay image

4. **Open in browser**
   - For video experience: Open `index.html` in your browser
   - For image experience: Open `index-photo.html` in your browser
   - Allow camera permissions when prompted

5. **Point and play**
   - Point your camera at the target image
   - The AR content will appear when detected!

## 💡 Usage

### Video Mode (index.html)
- Shows a video overlaid on the target image
- Video auto-plays when target is detected
- Video pauses when target leaves view

### Photo Mode (index-photo.html)
- Shows a static image overlaid on the target image
- Great for displaying photos, messages, or graphics

## 🛠️ Customization

### Change the video/image
1. Replace `assets/video.mp4` or `assets/overlay.jpg` with your own files
2. Update the file path in the HTML if using a different filename

### Use a different target image
1. Replace `assets/card.jpg` with your target image
2. Regenerate `targets.mind` using [Mind AR's target compiler](https://hiukim.github.io/mind-ar-js-doc/)
3. Update the path in the HTML `mindar-image="imageTargetSrc: ./assets/targets.mind"`

### Adjust AR content size/position
Edit the `a-video` or `a-plane` element in the HTML:
```html
<!-- Adjust width/height to scale the content -->
<a-video src="#video" position="0 0 0" width="1" height="0.6"></a-video>
```

## 📚 Technologies Used

- **[A-Frame](https://aframe.io/)** - WebXR framework for building AR/VR experiences
- **[Mind AR](https://www.npmjs.com/package/mind-ar)** - Image-based AR library
- **HTML5** - Structure and video/image handling

## 🎮 Browser Compatibility

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome  | ✅      | ✅     |
| Firefox | ✅      | ✅     |
| Safari  | ✅      | ✅     |
| Edge    | ✅      | ✅     |

**Note:** Requires HTTPS in production (localhost works fine for development)

## 💡 Tips for Best Results

- Use high-contrast, feature-rich images as targets (not plain colors)
- Ensure good lighting when scanning the target
- Keep the target in view while watching the AR content
- Test on the device before gifting
- For physical cards, high print quality ensures better tracking

## 🤝 Contributing

Feel free to fork and customize this project for your own gifting needs!

## 📝 License

ISC

## 🎉 Have Fun!

Surprise your loved ones with personalized AR video messages! Perfect for:
- 🎂 Birthday messages
- 💍 Proposal videos
- 🎓 Graduation wishes
- 💕 Anniversary surprises
- 🎉 Any special occasion!

---

**Made with ❤️ for special moments**

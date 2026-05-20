# 🎁 AR Video Gift

A fun, interactive **Augmented Reality (AR) gifting platform** that allows you to create personalized AR video messages triggered by image recognition. Using A-Frame and Mind AR, this web-based application detects a target image via camera and plays personalized videos to specific recipients. Perfect for birthdays, anniversaries, proposals, or any special occasion!

## ✨ Features

- **Personalized AR experiences** - Enter recipient name to access their custom AR video message
- **Image-based AR tracking** - Uses Mind AR to detect target images via camera
- **Dynamic video loading** - Videos are loaded dynamically based on the recipient's name
- **Auto-play on detection** - Videos automatically play when the target image is recognized
- **Auto-pause on lost tracking** - Videos pause when the target is no longer visible
- **Visual indicators** - Real-time feedback showing when target is detected
- **Mobile-friendly** - Fully responsive design for iOS and Android devices
- **No installation required** - Just open in a web browser with camera access
- **Alternative photo mode** - Static image overlay experience available

## 🎯 How It Works

1. **Entry screen** - User enters their name to access their personalized gift
2. **Validation** - Application checks against a list of valid recipients
3. **Dynamic loading** - Target image and video specific to that recipient are loaded
4. **AR detection** - Mind AR detects the target image from the device camera
5. **Content rendering** - A-Frame renders the video overlaid on the detected target
6. **Playback control** - Video auto-plays when target is visible, auto-pauses when lost
7. **Visual feedback** - A green "Target Found" indicator appears when detection succeeds

## 📁 Project Structure

```
ar-project/
├── index.html              # Main AR video experience with name entry
├── index-photo.html        # Alternative static image overlay experience
├── style.css               # Styling for fullscreen AR view and UI elements
├── package.json            # Project metadata and dependencies
├── assets/
│   ├── targets/
│   │   ├── rahul.mind      # Mind AR target database for Rahul
│   │   └── anudeep.mind    # Mind AR target database for Anudeep
│   ├── videos/
│   │   ├── rahul.mp4       # Personalized video for Rahul
│   │   └── anudeep.mp4     # Personalized video for Anudeep
│   ├── overlay.jpg         # Static image for photo version
│   └── card.jpg            # Example target image (for reference)
└── README.md               # This file
```

### Key Implementation Details

- **Personalization system**: The `index.html` includes a name entry screen with validation against a `validGifts` array in the script
- **Dynamic asset loading**: Videos and target images are loaded based on the recipient's name parameter: `?gift=rahul`
- **URL parameters**: Recipients access their AR gift via direct links like `index.html?gift=anudeep`
- **Error handling**: Includes error overlays, loading states, and video playback error recovery

## 🚀 Getting Started

### Prerequisites
- A modern web browser with WebGL support (Chrome, Firefox, Safari, Edge)
- A device with a camera (smartphone, tablet, or laptop)
- Target images that match the `.mind` files in the `assets/targets/` folder

### Setup

1. **Clone or download this project**
   ```bash
   git clone <repository-url>
   cd ar-project
   ```

2. **Prepare target images and videos**
   - Create a `.mind` file for each recipient using [Mind AR's target compiler](https://hiukim.github.io/mind-ar-js-doc/)
   - Save target files as `assets/targets/{name}.mind`
   - Save personalized videos as `assets/videos/{name}.mp4`
   - Print or display target images to scan with your camera

3. **Add recipients**
   - Edit the `validGifts` array in `index.html` (around line 121):
   ```javascript
   const validGifts = [
       "rahul",
       "anudeep",
       "your-name-here"  // Add more names
   ];
   ```

4. **Test the application**
   - Open `index.html` in your browser
   - Enter a valid name from the `validGifts` list
   - Allow camera permissions when prompted
   - Point your camera at the target image to trigger AR playback

5. **Deploy**
   - Serve this project over HTTPS (required for production camera access)
   - For local testing, localhost HTTP works fine
   - Share direct links with recipients: `https://yoursite.com/index.html?gift=anudeep`

## 💡 Usage

### Video Mode (index.html)
- Recipients enter their name to access their personalized AR gift
- Videos are loaded dynamically based on the recipient's name
- Videos auto-play when the target image is detected
- Videos pause when the target leaves view
- Green "Target Found" indicator confirms detection
- Error handling for missing videos or failed playback

### Photo Mode (index-photo.html)
- Static image overlay experience (simple demo mode)
- No name entry required
- Uses a fixed target image (`assets/targets/targets.mind`)
- Great for testing or gallery-style AR displays

## 🛠️ Customization

### Add a New Recipient

1. **Create a target `.mind` file**
   - Use [Mind AR's target compiler](https://hiukim.github.io/mind-ar-js-doc/) to generate a `.mind` file from an image
   - Save as `assets/targets/{recipient-name}.mind`

2. **Add their personalized video**
   - Save video as `assets/videos/{recipient-name}.mp4`

3. **Update the validGifts array**
   - Edit `index.html` and add the name to the `validGifts` array:
   ```javascript
   const validGifts = ["rahul", "anudeep", "new-name"];
   ```

4. **Create a shareable link**
   - Share: `https://yoursite.com/index.html?gift=new-name`

### Adjust AR Content Size/Position
Edit the `a-video` element in `index.html`:
```html
<!-- width/height scale the content relative to the target image -->
<a-video id="video-plane" position="0 0 0" width="1" height="0.6"></a-video>
```

### Customize the Photo Mode
Edit `index-photo.html` to change the overlay image or target:
```html
<!-- Change the image source -->
<img id="overlay" src="./assets/your-image.jpg" />
<!-- Change the target image database -->
<a-scene mindir-image="imageTargetSrc: ./assets/targets/your-target.mind;">
```

## 📚 Technologies Used

- **[A-Frame 1.4.2](https://aframe.io/)** - WebXR framework for building AR/VR experiences
- **[Mind AR 1.2.2](https://www.npmjs.com/package/mind-ar)** - Image-based AR library with A-Frame integration
- **[A-Frame Video Component](https://aframe.io/docs/1.4.0/components/video/)** - Native video rendering in AR scenes
- **HTML5** - Structure, video/image handling, and camera access
- **CSS3** - Styling with animations and responsive design

## 🎮 Browser Compatibility

| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Chrome  | ✅      | ✅     | Fully supported |
| Firefox | ✅      | ✅     | Fully supported |
| Safari  | ✅      | ✅     | iOS 13+ recommended |
| Edge    | ✅      | ✅     | Fully supported |

**Important notes:**
- Requires HTTPS in production (localhost HTTP works for development)
- Camera access requires user permission
- WebGL support mandatory
- Best performance on devices with 2GB+ RAM

## 💡 Tips for Best Results

- **Target image selection** - Use high-contrast, feature-rich images with distinct corners and patterns
- **Avoid**: Plain colors, repetitive patterns, or small text
- **Lighting** - Ensure good, consistent lighting when scanning targets
- **Print quality** - For physical cards, use high-quality prints for better tracking
- **Viewing angle** - Keep the target roughly perpendicular to the camera for best detection
- **Device capabilities** - Test on the target device before gifting (different devices have varying camera quality)
- **Video format** - Use H.264 codec MP4 files for best browser compatibility
- **Performance** - Keep video files under 50MB for faster loading

## 🤝 Contributing

This project is designed to be forked and customized for personalized gifting experiences. Feel free to:
- Add more recipients with personalized videos
- Customize styling and animations
- Implement additional features like filters or effects
- Create variations for different use cases

## 📄 License

ISC

## 🎉 Use Cases

This AR gifting platform is perfect for:
- 🎂 **Birthday messages** - Personalized video messages that play when the card is scanned
- 💍 **Proposal videos** - Surprise someone with an AR-triggered proposal
- 🎓 **Graduation wishes** - Celebrate achievements with AR congratulations
- 💕 **Anniversary surprises** - Create memorable AR experiences for special dates
- 🎊 **Wedding invitations** - Interactive AR invites with video messages
- 👶 **Birth announcements** - Personalized baby announcement videos
- 🎁 **Gift cards** - AR-enhanced gift cards with video messages
- 📸 **Interactive galleries** - Display multiple AR experiences with different target images
- 🎪 **Events & marketing** - Create engaging AR experiences for events or brand activation

## 🙌 Acknowledgments

- Built with [A-Frame](https://aframe.io/) - Making AR/VR development accessible
- AR tracking powered by [Mind AR](https://hiukim.github.io/mind-ar-js-doc/) - Efficient image recognition
- Inspired by the desire to create memorable, personalized gifting experiences

---

**Made with ❤️ to create unforgettable AR moments**

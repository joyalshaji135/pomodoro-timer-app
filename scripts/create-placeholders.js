const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '../assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Create icon.png (1024x1024)
const iconCanvas = createCanvas(1024, 1024);
const iconCtx = iconCanvas.getContext('2d');
iconCtx.fillStyle = '#FF6B6B';
iconCtx.fillRect(0, 0, 1024, 1024);
iconCtx.fillStyle = '#FFFFFF';
iconCtx.font = 'bold 200px Arial';
iconCtx.textAlign = 'center';
iconCtx.textBaseline = 'middle';
iconCtx.fillText('PT', 512, 512);
const iconBuffer = iconCanvas.toBuffer('image/png');
fs.writeFileSync(path.join(assetsDir, 'icon.png'), iconBuffer);

// Create splash.png (1242x2436)
const splashCanvas = createCanvas(1242, 2436);
const splashCtx = splashCanvas.getContext('2d');
splashCtx.fillStyle = '#FF6B6B';
splashCtx.fillRect(0, 0, 1242, 2436);
splashCtx.fillStyle = '#FFFFFF';
splashCtx.font = 'bold 100px Arial';
splashCtx.textAlign = 'center';
splashCtx.textBaseline = 'middle';
splashCtx.fillText('Pomodoro Timer', 621, 1218);
const splashBuffer = splashCanvas.toBuffer('image/png');
fs.writeFileSync(path.join(assetsDir, 'splash.png'), splashBuffer);

// Create adaptive-icon.png (1024x1024 - same as icon for now)
fs.copyFileSync(
  path.join(assetsDir, 'icon.png'),
  path.join(assetsDir, 'adaptive-icon.png')
);

console.log('Created placeholder assets in', assetsDir);
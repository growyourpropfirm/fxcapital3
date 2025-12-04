const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateHeroBackground() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport size for high-quality image
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2 // For retina quality
    });
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, 'generate-hero-background.html');
    const htmlUrl = `file://${htmlPath}`;
    
    await page.goto(htmlUrl, {
      waitUntil: 'networkidle0'
    });
    
    // Wait a bit for any animations or rendering to complete
    await page.waitForTimeout(500);
    
    // Take screenshot
    const outputPath = path.join(__dirname, 'hero-background.png');
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 1920,
        height: 1080
      }
    });
    
    console.log(`✅ Hero background image generated successfully at: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error generating image:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

generateHeroBackground().catch(console.error);

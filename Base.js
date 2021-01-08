const puppeteer = require('puppeteer');

// Main Function
async function generateImage(text) {
    let inputText = text;

    // Browser Launch
    const browser = await puppeteer.launch({"headless": true}); //Disable it if using in WA BOT
    // Open New Page in browser
    const page = await browser.newPage();
    // Below you can add any text effect generator url from the ephoto360 website
    await page.goto('https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html');
    console.log("Website Loaded!");
    // Find the button
    const genBtn = await page.$("#submit");
    console.log("Button Loaded");
    // Find the textField
    const textField = await page.$("#text-0");
    console.log("Text");
    // Enter the value of 'text' variable in the textField
    await page.type("#text-0", inputText);
    console.log("Inputed Text")
    // Click on the generate button
    await genBtn.evaluate(genBtn => genBtn.click());
    console.log("Generating Image");
    // Wait for the selector to appear
    await page.waitForSelector('.bg-image', {
        visible: true,
    });
    // Grab the image source url
    let generated_Image = await page.$$eval('.bg-image', imgs => imgs.map(img => img.getAttribute('src')));
    let image_Url = generated_Image.toString()
    console.log("Grabbed image!");
    console.log("URL:" + image_Url);
    //return image_Url;
    await browser.close() //Comment out this line to keep it running 

    // Follow me on instagram cuz i have to feed my doge your human meat 
    // @samurai3247

}

generated_Image("Neko kamisama"); // Enjoy

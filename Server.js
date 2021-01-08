const puppeteer = require('puppeteer');
const http = require('http');
const url = require('url');

// Starting puppeteer
(async() => {

browser = await puppeteer.launch({"headless": true,  args: ['--no-sandbox'] })

})();

// Main Server
http.createServer(async function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  if (!queryObject.q) {

	res.writeHead(200, {'Content-Type': 'application/json'});
  	return res.end(JSON.stringify({ msg : 'Wrong format'}));
  }	
try {
  console.log(queryObject)
  const z = await get(queryObject.q)
  console.log(z)

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ url : z}));

} catch {

	res.writeHead(200, {'Content-Type': 'application/json'});
  	return res.end(JSON.stringify({ error : 'Error'}));
}
}).listen(8080);

// Main Function
async function get(text) {
    let inputText = text;

    //Disable it if using in WA BOT
    const page = await browser.newPage();
    // Below you can add any text effect generator url from the ephoto360 website
    await page.goto('https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html');
    const genBtn = await page.$("#submit");
    const textField = await page.$("#text-0");
    await page.type("#text-0", inputText);
    await genBtn.evaluate(genBtn => genBtn.click());
    await page.waitForSelector('.bg-image', {
        visible: true,
    });
    let generated_Image = await page.$$eval('.bg-image', imgs => imgs.map(img => img.getAttribute('src')));
    let image_Url = generated_Image.toString()
	return image_Url

    //await browser.close() //Comment out this line to keep it running 

    // Follow me on instagram cuz i have to feed my doge your human meat 
    // @samurai3247

}



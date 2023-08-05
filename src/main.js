const app = require('express')();
const { avatarGenerator } = require('./avatarGenerator');
const { config } = require('dotenv');
const port = process.env.PORT ?? '3000';

config();

let chrome = {};
let puppeteer;

const isProduction = process.env.AWS_LAMBDA_FUNCTION_VERSION;
if (isProduction) {
    chrome = require("chrome-aws-lambda");
    puppeteer = require("puppeteer-core");
} else {
    puppeteer = require("puppeteer");
}



app.get('/', (_, res) => res.redirect(302, 'https://www.avatartion.com/'))
app.get("/api", async (request, response) => {

    const options = isProduction ? {
        args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewpot: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    } : {
        headless: true,
        args: ['--no-sandbox']
    };

    const browser = await puppeteer.launch(options);
    try {
        const page = await browser.newPage();
        const searchParams = request.query;

        const vdom = `
            ${await avatarGenerator({
            body: searchParams?.body ?? null,
            bg: searchParams?.bg ?? null,
            hair: searchParams?.hair ?? null,
            eye: searchParams?.eyes ?? null,
            mouth: searchParams?.mouth ?? null,
            head: searchParams?.face ?? null,
            outfit: searchParams?.outfit ?? null,
            accessory: searchParams?.accessory ?? null
        })}
        `

        await page.setContent(vdom)
        const elementHandle = await page.$('#main-content');

        const imageBuffer = await elementHandle.screenshot({ type: "png" });

        response.set('Content-Type', 'image/png');
        response.send(imageBuffer);
    } catch (error) {
        console.error(error);
        response.status(500).send("Error during screenshot");
    } finally {
        // Close the browser
        await browser.close();
    }

})

app.listen(port, () => console.log(`app listening on port localhost:${port}`));

module.exports = app;
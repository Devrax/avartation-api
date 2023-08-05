import express, { Express, Request, Response } from 'express';
import { avatarGenerator } from './avatarGenerator.js';
import { config } from 'dotenv';
import Puppeteer, { PuppeteerNode } from 'puppeteer';
import Pupcore from 'puppeteer-core';
import Chromium from 'chrome-aws-lambda';
config();

const app: Express = express(),
    port = process.env.PORT ?? '3000';

const isProduction = process.env.AWS_LAMBDA_FUNCTION_VERSION;
let puppeteer: unknown = isProduction ? Pupcore : Puppeteer;


app.get('/', (_, res) => res.redirect(302, 'https://www.avatartion.com/'))
app.get("/api", async (request: Request, response: Response): Promise<void> => {

    let options = isProduction ? {
            args: [...Chromium.args, '--no-sandbox'],
            defaultViewpot: Chromium.defaultViewport,
            executablePath: await Chromium.executablePath,
            headless: true
        } : {
            headless: true,
            args: ['--no-sandbox' ]
        };

    const browser = await (puppeteer as PuppeteerNode).launch(options);
    try {
        const page = await browser.newPage();
        const searchParams = request.query;

        const vdom = `
            ${await avatarGenerator({
            body: searchParams?.body as string ?? null,
            bg: searchParams?.bg as string ?? null,
            hair: searchParams?.hair as string ?? null,
            eye: searchParams?.eyes as string ?? null,
            mouth: searchParams?.mouth as string ?? null,
            head: searchParams?.face as string ?? null,
            outfit: searchParams?.outfit as string ?? null,
            accessory: searchParams?.accessory as string ?? null
        })}
        `

        await page.setContent(vdom)
        const elementHandle: any = await page.$('#main-content');

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

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/login');

    await page.type('#login', 'user1');
    await page.type('#pass', 'coucou');

    await page.screenshot({ path: './testSuccess/loginTrue.png' });

    await Promise.all([
        page.waitForNavigation(),
        page.click('#submitLogin')
    ]);

    await page.screenshot({ path: './testSuccess/resLoginTrue.png' });


    await browser.close();
})();
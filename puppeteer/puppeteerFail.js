const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/login');

    await page.type('#login', 'user');
    await page.type('#pass', 'pasbon');

    await page.screenshot({ path: './testFail/loginFalse.png' });

    await Promise.all([
        page.waitForNavigation(),
        page.click('#submitLogin')
    ]);

    await page.screenshot({ path: './testFail/resLoginFalse.png' });


    await browser.close();
})();
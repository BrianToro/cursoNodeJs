const puppeteer = require('puppeteer');

(async () =>{
    console.log('Lanzar el navegador ------');
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: ['--disable-extensions']
      });
    const page = await browser.newPage()
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    var title1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1')
        return h1.innerHTML
    })

    console.log(title1)

    console.log('Cerrando naveador ---------');
    browser.close();
    console.log('navegador cerrado');
})();
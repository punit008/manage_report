const puppeteer = require('puppeteer')

async function getReport() {
    try {
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()

        /**
         *  Login into ManageWp Orion
         * 
         */
        await page.goto('https://orion.managewp.com/login', { waitUntil: 'networkidle0' })
        await page.type('input[name=email]', 'chetan@vardaam.com')
        await page.type('input[name=password]', 'WG#A1^dtwk#zdaP~')

        await page.click('#sign-in-button')
        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.screenshot({ path: 'logged.png', fullPage: true })
        // console.log("Logged in")

        /**
         * Open list of website page
         * 
         */

        await page.goto('https://orion.managewp.com/dashboard/websites?type=list', { waitUntil: 'networkidle0' })
        await page.screenshot({ path: 'website-list.png', fullPage: true })

        /**
         * 
         *  Click every website links
         * 
         * 
         */

         await page.evaluate(() => {
            let elements = document.getElementsByClassName('website-name');
            for (let element of elements) {
                element.click();
               
            }
        });
        await page.screenshot({ path: 'clicks_foreach.png' })
        // const website_name = await page.$$('.website-name')
        // console.log(await page.waitForSelector('.website-name'))
        await browser.close();
        // async browser => {
        //     const promises = []
        //     for (let i = 0; i < website_name.length; i++) {
        //         console.log('page spawned', i)
        //         promises.push(browser.newPage().then(async pages => {
        //             await page.click(website_name[i])
        //             await page.screenshot({ path: 'website_name_' + i + '.png' })
        //         }))
        //     }
        // }
        // await Promise.all(promises)
        // await browser.close()

        // await page.click('.website-name');
        // await page.screenshot({ path: 'website-name.png', fullPage: true });
        // await browser.close();


    } catch (error) {
        console.log(error)
        await browser.close()
    }
}

// Create object 
getReport();
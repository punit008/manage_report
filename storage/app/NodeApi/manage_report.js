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

         const websiteNames = await page.$$('.website-name');

         websiteNames.forEach(async (websiteName) => {
             await page.waitForSelector('.website-name');
             await job.click();
             console.log('Yes it worked');
             // Get the data you want here and push it into the data array
             await page.goBack();
           });
       
         console.log(websiteNames)
       
       
         await browser.close();

        


    } catch (error) {
        console.log(error)
        await browser.close()
    }
}

// Create object 
getReport();
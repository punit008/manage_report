const puppeteer = require('puppeteer')

async function getReport() {
    try {
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
        await page.setViewport({ width: 1920, height: 1080, });
        console.log("Start")
        /**
         *  Login into ManageWp Orion
         * 
         */
        await page.goto('https://orion.managewp.com/login', { waitUntil: 'networkidle0' , timeout: 0})
        await page.type('input[name=email]', 'chetan@vardaam.com')
        await page.type('input[name=password]', 'WG#A1^dtwk#zdaP~')

        await page.click('#sign-in-button')
        await page.waitForNavigation({timeout: 0})
        console.log("Test")
        await page.screenshot({ path: 'logged.png', fullPage: true })
        console.log("Logged in")

        /**
         * Open list of website page
         * 
         */

        await page.goto('https://orion.managewp.com/dashboard/websites?type=list', { waitUntil: 'networkidle0', timeout: 0 })
        await page.screenshot({ path: 'website-list.png', fullPage: true })
        console.log("Website list page")

        /**
         * 
         *  Click every website links
         * 
         * 
         */

        const websiteNames = await page.$$('.website-name')
        //  for (var i = 0; i <= websiteNames.length; i++ )
        //  {
        //      await page.click(websiteNames[i]);
        //      await page.screenshot({ path: 'website-name-'+i+'.png', fullPage: true })
        //  }
        //  var i = 1;
        //  websiteNames.forEach(async (websiteName) => {
        //     //  await page.waitForSelector('.website-name');
        //      await websiteNames.click();
        //      await page.screenshot({ path: 'website-name-'+i+'.png', fullPage: true })
        //      console.log('Yes it worked');
        //      i++
        //      // Get the data you want here and push it into the data array
        //      await page.goBack();
        //    });

        console.log(websiteNames[1])
        await browser.close();

    } catch (error) {
        console.log(error)
        await browser.close()
    }
}

// Create object 
getReport();
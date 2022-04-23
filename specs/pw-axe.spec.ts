import { test, chromium, Browser, Page } from "@playwright/test";
import { injectAxe, checkA11y } from 'axe-playwright'

let browser: Browser
let page: Page

test.describe( 'Pw-demo test', () =>{
    test.beforeAll(async ()=> {
        browser = await chromium.launch()
        page = await browser.newPage()
        // await page.goto('http://stage.malabar-test.ylopo/search?s[locations][0][city]=Lost%20Creek&s[locations][0][state]=KY&s[page]=1&s[orderBy]=sourceCreationDate%2Cdesc', {waitUntil: 'networkidle'})
        await page.goto('http://stage.malabar-test.ylopo/search/detail/141557003', {waitUntil: 'networkidle'})
        await injectAxe(page)
    })

    test('print out a detailed report on violations', async () => {
        await checkA11y(page);
    });

    test.afterAll(async () => {
        await browser.close()
    })
});



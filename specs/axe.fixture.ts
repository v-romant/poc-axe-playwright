import { Page, test as base} from "@playwright/test";
import { injectAxe} from 'axe-playwright'
import { SearchResultPage } from "../page/search.result.page";

type axeFixture = {
    searchResulPage:  Page
}

export const axeTest = base.extend<axeFixture>({
    searchResulPage: async ({page}, use) => {
        await page.goto(SearchResultPage.url, {waitUntil: 'networkidle'})
        await injectAxe(page);
        await use(page);
    }
});

import { axeTest } from "./axe.fixture";
import { checkA11y } from "axe-playwright";

axeTest('Test', async ({ searchResulPage }) => {
    await checkA11y(searchResulPage, undefined, {
        axeOptions: {

        },
        detailedReport: true,
        detailedReportOptions: {
            html: true
        }
    });
});

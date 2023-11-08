import {ICustomWorld, takeScreenShotOnFailure} from "./custom-world";
import {
    ChromiumBrowser,
    chromium
} from '@playwright/test'
import {After, AfterAll, Before, BeforeAll, ITestCaseHookParameter, Status} from '@cucumber/cucumber'


let browser: ChromiumBrowser


BeforeAll(async function() {
    browser = await chromium.launch({ headless: false });
});

Before(async function(this: ICustomWorld) {
    this.context = await browser.newContext()
    this.page = await this.context.newPage()
});

After(async function(this: ICustomWorld, scenario: ITestCaseHookParameter) {
    if (scenario.result?.status !== Status.PASSED) {
        await takeScreenShotOnFailure(this, scenario);
    }
    await this.page?.close()
    await this.context?.close()
});

AfterAll(async function() {
    await browser.close()
});
import {expect, Page} from "@playwright/test";

export const chooseAccountType = async function (page : Page) {
    await page.locator("[href='/parabank/openaccount.htm']").click();
}

export const enterAccountDetails = async function (page: Page) {
    await page.locator("[id='type']").selectOption('SAVINGS');
    await page.locator("[value='Open New Account']").click();
}

export const checkAccountCreation = async function (page: Page) {
    await expect(page.getByText('Account Opened!')).toBeVisible();
}
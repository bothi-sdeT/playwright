import {expect, Page} from '@playwright/test';
import {User} from "../utils/createUser";

export const login = async function (page : Page, user: User) {
    await page.locator("[name='username']").fill(user.username)

    await page.locator("[name='password']").fill(user.password);

    await page.locator("[value='Log In']").click();
}

export const registerUser = async  function (page : Page, newUser: User) {
    await page.locator("[name = 'customer.firstName']").fill(newUser.firstName);
    await page.locator("[name = 'customer.lastName']").fill(newUser.lastName);
    await page.locator("[name='customer.address.street']").fill(newUser.address);
    await page.locator("[name='customer.address.city']").fill(newUser.city);
    await page.locator("[name='customer.address.state']").fill(newUser.state);
    await page.locator("[name='customer.address.zipCode']").fill(newUser.zipcode);
    await page.locator("[name='customer.phoneNumber']").fill(newUser.phone);
    await page.locator("[name='customer.ssn']").fill(String(newUser.ssn));
    await page.locator("[name='customer.username']").fill(String(newUser.username));
    await page.locator("[name='customer.password']").fill(String(newUser.password));
    await page.locator("[name='repeatedPassword']").fill(String(newUser.password));
}

export const isUserLoggedInSuccessfully = async function (page: Page, user: User) {
    await expect(page.getByText(`Welcome ${user.firstName} ${user.lastName}`)).toBeVisible();
}

export const logout = async function (page: Page) {
    await page.locator("[href='/parabank/logout.htm']").click();
}

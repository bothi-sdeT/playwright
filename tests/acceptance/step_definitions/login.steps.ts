import {Given, Then} from "@cucumber/cucumber";

import {ICustomWorld} from './custom-world'
import {isUserLoggedInSuccessfully, login, logout, registerUser} from "../modules/login";

import {user} from '../utils/createUser'

Given('customer login to the app', async function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('http://localhost:8080/parabank/index.htm?ConnType=JDBC');
    console.log(user);
    await login(page, user)
});

Then('customer should be logged in successfully', async function (this: ICustomWorld) {
    const page = this.page!
    await isUserLoggedInSuccessfully(page, user);
    await logout(page);
});

Given('A customer register as new user', async function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('http://localhost:8080/parabank/register.htm');
    await registerUser(page, user);
    await page.locator("[value='Register']").click();
    await isUserLoggedInSuccessfully(page, user);
    await logout(page);
});

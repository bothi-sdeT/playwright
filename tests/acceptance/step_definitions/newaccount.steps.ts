import {Given, Then, When} from "@cucumber/cucumber";
import {ICustomWorld} from "./custom-world";
import {checkAccountCreation, chooseAccountType, enterAccountDetails} from "../modules/new-account";

Given(/^customer open a new savings account$/, async function (this: ICustomWorld) {
    const page = this.page!
    await chooseAccountType(page);
});

When(/^customer enter all the required details$/, async function (this: ICustomWorld) {
    const page = this.page!
    await enterAccountDetails(page);
});

Then(/^customer should see the new account details$/, async function (this: ICustomWorld) {
    const page = this.page!
    await checkAccountCreation(page);
});
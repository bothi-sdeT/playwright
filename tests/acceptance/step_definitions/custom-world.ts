import {IWorldOptions, World, setWorldConstructor, ITestCaseHookParameter} from '@cucumber/cucumber'
import { BrowserContext, Page } from '@playwright/test'

export interface ICustomWorld extends World {
    context?: BrowserContext
    page?: Page
}

export class CustomWorld extends World implements ICustomWorld {
    constructor(options: IWorldOptions) {
        super(options)
    }
}

export const takeScreenShotOnFailure = async (world: ICustomWorld, scenario: ITestCaseHookParameter) => {
    const screenshotPath: string = './reports/screenshots/';
    const screenShotExtn: string = '.png';
    const screenShot = await world.page?.screenshot({
        path: screenshotPath + scenario.pickle.name + screenShotExtn,
        fullPage: true,
    });
// attach the screenshot using World's attach()
    if (screenShot) world.attach(screenShot, 'image/png');
};

setWorldConstructor(CustomWorld)
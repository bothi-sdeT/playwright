import { mock } from 'intermock'
import fs from 'fs'
import { UserDataImpl } from './user.data'
import { UserData} from '../acceptance/modules/userType'
import {test as baseTest} from '@playwright/test'

const userDataFile = fs.readFileSync('./tests/acceptance/modules/userType.ts', 'utf-8').toString();
let generateUserData = () => {

    return mock({
        files: [['userType.ts', userDataFile]],
        interfaces: ['User'],
        output: "object"
    })
}

type signUpFixtures = {
    userData: UserDataImpl;
}

export const test = baseTest.extend<signUpFixtures>({

    userData: async ({ }, use) => {
        const data = <UserData><unknown>generateUserData();
        const userData = new UserDataImpl(data);
        await use(userData);
    }
});
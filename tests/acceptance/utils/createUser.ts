import {faker, fakerEN} from '@faker-js/faker';
import {mock} from "intermock";
import fs from "fs";
const uniqueID = faker.number.int({ min: 0, max: 99999999 });


// const userDataFile = fs.readFileSync('./tests/acceptance/modules/userType.ts', 'utf-8').toString();
//
// export const generateUserData = () => {
//
//     return mock({
//         files: [['userType.ts', userDataFile]],
//         interfaces: ['User'],
//         output: "object"
//     })
// }

export interface UserData {
    User: User;
}

export interface User {
    firstName : string,
    lastName : string,
    address : string,
    city : string,
    state : string,
    zipcode : string,
    phone : string,
    ssn : number,
    username : string,
    password : string
}

function createUser (): User {
    return {
        firstName : faker.person.firstName(),
        lastName : faker.person.firstName(),
        address : faker.location.streetAddress(),
        city : faker.location.city(),
        state : faker.location.state(),
        zipcode : faker.location.zipCode(),
        phone : faker.phone.number(),
        ssn : uniqueID,
        username : faker.internet.userName(),
        password : faker.internet.password()
    }
}

export const user = createUser();

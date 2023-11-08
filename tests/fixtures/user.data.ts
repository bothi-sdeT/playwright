import { faker } from '@faker-js/faker';
import {User, UserData} from "../acceptance/modules/userType";

const uniqueID = faker.number.int({ min: 0, max: 99999999 });

export class UserImpl implements User {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    phone: string;
    ssn: number;
    username: string;
    password: string;

    constructor(data: UserData) {
        this.firstName = data.User.firstName
        this.lastName = data.User.lastName;
        this.address = data.User.address;
        this.city = data.User.city;
        this.state = data.User.state;
        this.zipcode = data.User.zipcode;
        this.phone =data.User.phone;
        this.ssn = uniqueID;
        this.username =  `test-${uniqueID}`;
        this.password = faker.internet.password();

    }
}

export class UserDataImpl implements UserData{
    User: UserImpl;

    constructor(data: UserData) {
        this.User = new UserImpl(data);
    }

}
import { faker } from "https://raw.githubusercontent.com/jackfiszr/deno-faker/master/mod.ts";
import {User} from '../Models/User.ts';

faker.setLocale("fr")
faker.seed(123);
let users: Array<User> = [];

for (let i = 0, l = 3; i < l; i++) {
	users.push({
		id: i,
		name: `${faker.name.firstName()} ${faker.name.lastName()}`,
		age: faker.random.number(),
		validation: faker.random.boolean()
	})
}

export default users;

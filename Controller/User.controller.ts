import users from '../Data/data.ts';
import {User} from '../Models/User.ts';

export const getUsers = ({ response }: { response: any }) => {
	if (users.length >= 1) {
		response.body = users;
		response.status = 200;
	} else {
		response.body = 'Users not found';
		response.status = 404;
	}

}

export const getUser = async ({response, params}: {
	response: any;
	params: any;
}) => {
	const user = await users.find((user: User) => user.id === +params.id);
	console.log(user);
	if (user !== undefined) {
		response.body = user;
		response.status = 200;
	} else {
		response.body = "User don't exist";
		response.status = 404;
	}
};

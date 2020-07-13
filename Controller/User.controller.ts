import users from '../Data/data.ts';
import {User} from '../Models/User.ts';

export const getUsers = ({ response }: { response: any }) => {
	response.body = users;
}

export const getUser = async ({response, params}: {
	response: any;
	params: any;
}) => {
	const user = await users.find((user: User) => user.id === +params.id);
	response.body = user;
	response.status = 200;
};

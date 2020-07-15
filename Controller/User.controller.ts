import users from '../Data/data.ts';
import {User} from '../Models/User.ts';
import {Validators} from '../Tool/Validators.ts';

/**
 * Find all users
 * @param response
 */
export const getUsers = async ({response}: { response: any }) => {
	if (users.length >= 1) {
		response.body = users;
		response.status = 200;
	} else {
		response.body = {
			msg: 'failed',
			reason: 'Users don\'t exist'
		};
		response.status = 404;
	}
};

/**
 * Find just one user
 * @param response
 * @param params
 */
export const getUser = async ({params, response}: {
	params: any;
	response: any;
}) => {
	const user = await users.find((user: User) => user.id === +params.id);
	if (user !== undefined) {
		response.body = user;
		response.status = 200;
	} else {
		response.body = {
			msg: 'failed',
			reason: 'Document don\'t exist'
		};
		response.status = 404;
	}
};

/**
 * Create a user
 * @param request
 * @param response
 */
export const addUser = async ({request, response}: { request: any; response: any; }) => {
	const body = await request.body();
	const query = await request.headers;
	console.log(query);
	const user: User = body.value;

	if (!Validators.headersValidator(query)) {
		response.status = 415;
		response.body = {
			msg: 'failed',
			reason: 'bad headers: Unsupported Media type'
		};
	}
	/**
	 * If valid
	 */
	if (Validators.userValidator(user)) {
		console.log(('Validation test'));
		response.status = 400;
		response.body = {
			'msg': 'failed',
			'reason': 'Invalid value'
		};
		return response;
	}

	user.id = Math.floor(Math.random() * 600);

	users.push(user);
	response.status = 200;
	response.body = {
		msg: 'success',
		data: {
			id: user.id,
			name: user.name,
			age: user.age,
			validation: user.validation,
		} as User
	};
};

export const updateUser = async ({request, params, response}: { request: any, params: any, response: any }) => {
	const body = await request.body();
	const user = await users.filter((user) => user.id === +params.id)[0];
	const {name, age, validation} = body.value;

	user.age = age;
	user.name = name;
	user.validation = validation;

	response.status = 200;
	response.body = {
		msg: 'success',
		data: user
	};
};

export const deleteUser = async ({params, response }: { params: any, response: any}) => {
	users.filter( (user: User) => user.id !== +params.id);
	response.body = {
		msg: 'success',
		reason: 'User Deleted'
	}
}



import {Router} from 'https://deno.land/x/oak/mod.ts';
import {getUsers, getUser, addUser, updateUser, deleteUser} from '../Controller/User.controller.ts';

export class UsersRoutes {
	private readonly router: Router;

	public constructor(router: Router) {
		this.router = router;

		this.findAll();
		this.find();
		this.create();
		this.delete();
		this.update();
	}

	private findAll(): void {
		this.router.get('/users/', getUsers);
	}

	private find(): void {
		this.router.get('/users/:id', getUser);
	}

	private create(): void {
		this.router.post('/users/add/', addUser)
	}

	private delete(): void {
		this.router.put('/users/:id/', updateUser)
	}

	private update(): void {
		this.router.delete('/users/:id', deleteUser)
	}
}

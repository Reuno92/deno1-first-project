import {Application, Router} from 'https://deno.land/x/oak/mod.ts';
import {UsersRoutes} from './Routes/user.routes.ts';

export class OakServer {

	private readonly hostname: string;
	private readonly port: number;
	private readonly app: Application;

	constructor(hostname: string, port: number) {
		this.hostname = hostname;
		this.port = port;

		const router = new Router();
		this.app = new Application();

		new UsersRoutes(router);

		// Logger
		this.app.use(async (ctx, next) => {
			await next();
			const rt = ctx.response.headers.get('X-Response-Time');
			console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
		});

		// Timing
		this.app.use(async (ctx, next) => {
			const start = Date.now();
			await next();
			const ms = Date.now() - start;
			ctx.response.headers.set('X-Response-Time', `${ms}ms`);
		});

		this.app.use(router.routes());
		this.app.use(router.allowedMethods());
	}

	async start(): Promise<void> {
		console.log(`Server was started…`);
		return await this.app.listen({hostname: this.hostname, port: this.port});
	}
}

new OakServer('localhost', 5000).start();

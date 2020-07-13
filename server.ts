import { Application} from "https://deno.land/x/oak/mod.ts";
import routes from "./Routes/routes.ts";

const app = new Application();

app.use(routes.USER_ROUTER.routes());
app.use(routes.USER_ROUTER.allowedMethods());

await app.listen({ hostname: "localhost", port: 5000 });

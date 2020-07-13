import { Router } from "https://deno.land/x/oak/mod.ts";
import {getUsers, getUser} from "../Controller/User.controller.ts";

 export const USER_ROUTER = new Router();

USER_ROUTER.get("/users", getUsers);
USER_ROUTER.get("/users/:id", getUser);

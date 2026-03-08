import { FastifyInstance } from "fastify";
import { helloWorldRoutes } from "./hello-world.routes";

export async function routes(app: FastifyInstance) {
    await app.register(helloWorldRoutes, { prefix: "/hello-world" });
}
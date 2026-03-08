import { FastifyInstance } from "fastify";
import { HelloWorldController } from "../controllers/hello-world.controller";

export async function helloWorldRoutes(app: FastifyInstance) {
    app.get("/", HelloWorldController.getHelloWorld);
}
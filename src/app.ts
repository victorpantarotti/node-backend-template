import cors from "@fastify/cors";
import type { FastifyInstance } from "fastify";
import { routes } from "./routes";

export async function buildApp(app: FastifyInstance) {
    await app.register(cors, {
        origin: ["http://localhost:5173", "http://proxy.victorpantarotti.com.br:5173"],
        methods: ["GET"]
    });

    await app.register(routes);
}
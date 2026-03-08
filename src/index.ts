import "dotenv/config";
import Fastify from "fastify";
import { buildApp } from "./app";

const fastify = Fastify();

(async () => {
    await buildApp(fastify);

    fastify.listen({ host: "0.0.0.0", port: process.env.PORT }, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})();
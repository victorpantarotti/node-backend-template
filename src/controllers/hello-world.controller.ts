import { FastifyReply, FastifyRequest } from "fastify";

export namespace HelloWorldController {
    export async function getHelloWorld(req: FastifyRequest, reply: FastifyReply) {
        return reply.status(200).send({ message: "Hello!" });
    }
}
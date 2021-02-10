import "dotenv/config";
import "reflect-metadata";
//import { createConnection } from "typeorm";
import express from "express";
//import { User } from "./entity/User";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./userResolver";
import { createConnection } from "typeorm";

//http://localhost:4000/
//http://localhost:4000/graphql
(async () => {
    const app = express();
    app.get('/', (_req, res) => res.send('hello'))

    app.post("/refresh_token", (req) => {
        console.log(req.headers);
    });

    await createConnection();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("express serve started")
    })
})()

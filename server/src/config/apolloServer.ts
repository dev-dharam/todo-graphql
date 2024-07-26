import { ApolloServer } from "@apollo/server";
import { todoSchema } from "../module/todo/todoSchema.js";
import todoResolvers from "../module/todo/todoResolvers.js";

const apolloServer = new ApolloServer({
    typeDefs: todoSchema,
    resolvers: todoResolvers
})

export default apolloServer;
import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import db from './cargos/db'


//typeDef- Query, Mutations
//Resolvers

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation
    },
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up!')
})
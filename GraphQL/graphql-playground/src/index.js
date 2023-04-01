import {GraphQLServer} from 'graphql-yoga'
import { typeDefs } from './examples/arrays/array-addition'
import { resolvers } from './examples/arrays/array-addition'

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})

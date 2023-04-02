import {GraphQLServer} from 'graphql-yoga'
/**
 * Addition
 */
// import { typeDefs, resolvers } from './examples/arrays/array-addition'

/**
 * Objects Relation
 */
import {typeDefs,resolvers} from './examples/relations/objects-relation'

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})

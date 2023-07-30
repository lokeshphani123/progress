import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
type Query {
    test (param:String!):String
}
`
const resolvers = {
    Query: {
        test(parent, args, ctx, info){
        return args.param
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})

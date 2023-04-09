import { GraphQLServer } from 'graphql-yoga'
import { users } from './cargos/users'
import { v4 as uuidv4 } from 'uuid';
import { posts } from './cargos/posts';
import { comments } from './cargos/comments';

// Type definitions (schema)
const typeDefs = `
    type Query {
        getUsers: Country
    }
    
    type City {
        city: String
    }
    type Country {
        country: String
        city: String
    }

`

// Resolvers
const resolvers = {
    Query: {
        getUsers() {
            const s = {
                "city": "Indianapolis"
            }
            const t = {
                "country": "USA",
                ...s
            }
            return t
        }
    },

}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})
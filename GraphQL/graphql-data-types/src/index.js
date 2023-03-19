import { Addition } from "./myModule";
import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
    type Query {
        employeeId: ID!
        employeeName: String!
        employeeAge: Int
        employeeCompany: Company!
        employeeNote(note: String!, date: String!): String!
    }
    type Company {
        companyId: ID!
        companyName: String!
        city: String!
        state: String!
        country: String!
    }
`

const resolvers = {
    Query : {
        employeeId() {
            return 567;
        },
        employeeName() {
            return "Nikhila";
        },
        employeeAge() {
            return 23;
        },
        employeeCompany() {
            return {
                companyId: 1,
                companyName: "Amazon",
                city: "Seattle",
                state: "Washington",
                country: "USA"
         
            };
        },
        employeeNote(parent, args, ctx, info) {
            return "Note: "+args.note+". "+args.date
        }
    }
}


const server = new GraphQLServer({
    typeDefs, resolvers
})

server.start(() => {
    console.log("Server is up")
}
)
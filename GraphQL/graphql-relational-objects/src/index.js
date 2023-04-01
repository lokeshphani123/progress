import {GraphQLServer} from 'graphql-yoga'
import {clients} from './jsons/clients'
import {employees} from './jsons/employees'
import {projects} from './jsons/projects'


const typeDefs = `
    type Query {
        getClients: [Client]
        getEmployees: [Employee]
        getProjects: [Project]
    }
    type Client {
        clientId: ID!,
        clientName: String,
        city: String,
        state: String,
        country: String
    }
    type Employee {

        employeeId: ID!,
        employeeName: String,
        employeeAge: Int,
        employeeClient: [Client],
        employeeNote(note: String!, date:String!): String,
        employeeProjects(tenure:Float, alphabet:String): [Project]
    }
    type Project {
        projectId: ID!
        projectName: String
        projectTenure: Float
        client: Client!
    }

`

export const resolvers = {
    Query: {
        getClients() {
            return clients
        },
        getEmployees(parent, args, ctx, info) {
            return employees.map((emp) => {
                //  emp.employeeNote = args.note+""+args.date
                 return emp
            })
        },
        getProjects(){
            return projects
        }
    },
    Project: {
        client(parent, args, ctx, info){
            return clients.find(clt => {
                return clt.clientId === parent.client
            })
        }
    },
    Employee: {
        employeeClient(parent, args, ctx, info){
            const empCltIds = new Set(parent.employeeClient);
            return clients.filter(clt => {
                return empCltIds.has(clt.clientId)
            })
        },
        employeeProjects(parent, args, ctx, info){
            const empPrjIds = new Set(parent.employeeProjects);
            return projects.filter(prj => {
                return empPrjIds.has(prj.projectId)
            })
        }
    }
}

// const typeDefs = `
//     type Query {
//         getClients: [Client]
//     }

//     type Client {
//         clientId: ID!
//         clientName: String!
//         city: String!
//         state: String!
//         country: String!
//     }
//     type Employee {
//         employeeId: ID!
//         employeeName: String!
//         employeeAge: Int
//         employeeClient: [Client!]!
//         employeeNote(note: String!, date: String!): String!
//         employeeProjects(tenure: Float!, alphabet: String): [Project!]!
//     }
//     type Project {
//         projectId: ID!
//         projectName: String!
//         projectTenure: Float!
//         client: Int!
//     }
// `

// const resolvers = {
//     Query : {
//         getClients () {
//             return clients
//         },
//         // getClients(parent, args, ctx, info) {
//         //     return clients.filter((client) => client.clientId === args.id)
//         // } 

//     }
// }

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})

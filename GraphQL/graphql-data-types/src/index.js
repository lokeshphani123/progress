import { Addition } from "./myModule";
import { GraphQLServer } from 'graphql-yoga'
//ID, String, Int, Company, Custom type, Array
//The employeeProjects also takes in a Float to filter companies with more than or equal to suplied tenure

const projects = [{
    projectId: 1,
    projectName: "Amazon Fresh",
    projectTenure: 3.5        
},
{
    projectId: 2,
    projectName: "Amazon Retail",
    projectTenure: 5        
},
{
    projectId: 3,
    projectName: "Amazon Shipping",
    projectTenure: 2.5        
}]

const typeDefs = `
    type Query {
        employeeId: ID!
        employeeName: String!
        employeeAge: Int
        employeeCompany: Company!
        employeeNote(note: String!, date: String!): String!
        employeeProjects(tenure: Float!, alphabet: String): [Project!]!
    }
    type Company {
        companyId: ID!
        companyName: String!
        city: String!
        state: String!
        country: String!
    }
    type Project {
        projectId: ID!
        projectName: String!
        projectTenure: Float!
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
        },
        employeeProjects(parent, args, ctx, info){
            const tenureFilter = projects.filter((project) => {
                return project.projectTenure >= args.tenure
            })
            if(args.alphabet){
                return tenureFilter.filter((project) => {
                    return project.projectName.toLowerCase().includes(args.alphabet.toLowerCase())
                })    
            }
            return tenureFilter
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
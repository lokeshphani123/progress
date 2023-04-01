const posts = [{
    id: 1,
    title: "Job Seeking",
    body: "Nikhila will be looking for job after 5 years",
    published: false
},
{
    id: 1,
    title: "New Joining",
    body: "Nikhila joined as a SDE-III",
    published: true
},
{
    id: 1,
    title: "New Job",
    body: "New opening for SDE-III position",
    published: false
}]
export const typeDefs = `
    type Query {
        add(a:Float!, b:Float!): Float!,
        addArray(numbers: [Float!]): Float!,
        getPosts(query: String): [Post]
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

export const resolvers = {
    Query: {
        add(parent, args, ctx, info) {
            return args.a+args.b
        },
        addArray(parent, args, ctx, info){
            if(args.numbers.length===0){
                return 0
            }
            return args.numbers.reduce((a,c)=> {
                return a+c
            })
        },
        getPosts(parent, args, ctx, info) {
            if(!args.query){
                return []
            }
            return posts.filter((post) => {
                const titleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
                const bodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
                return titleMatch || bodyMatch
            })
        }
    }
}

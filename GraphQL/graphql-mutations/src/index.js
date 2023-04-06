import { GraphQLServer } from 'graphql-yoga'
import { users } from './cargos/users'
import { v4 as uuidv4 } from 'uuid';
import { posts } from './cargos/posts';
import { comments } from './cargos/comments';

// Type definitions (schema)
const typeDefs = `
    type Query {
        getUsers: [User]
        getComments: [Comment]
    }

    type Mutation {
        createUser(name: String!, email: String!, age:Int): User!
        createPost(title: String, body: String!, published: Boolean!, author:Int): Post!
        createComment(text: String!, author: Int!, post: Int!): Comment
    }

    type User {
        userId: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        postId: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
    }

    type Comment {
        commentId: String!
        text: String!
        author: User
        post: Post
    }
`

// Resolvers
const resolvers = {
    Query: {
        getUsers() {
            return users
        },
        getComments(){
            return comments
        }
    },
    Mutation: {
        createUser(parent, args, ctx, info) {
            const emailTaken = users.some((user) => user.email === args.email);

            if(emailTaken){
                throw new Error('Email taken');
            }

            const user = {
                "userId" : uuidv4(),
                "name" : args.name,
                "email" : args.email,
                "age" : args.age
            }

            users.push(user);
            return user;
        },
        createPost(parent, args, ctx, info) {
            const post = {
                "postId": uuidv4(),
                "title": args.title,
                "body": args.body,
                "published": args.published,
                "author": users.find((user) => {
                    return user.userId === args.author
                })
            }
            posts.push(post);
            return post;
        },
        createComment(parent, args, ctx, info){
            const userExist = users.find((user) => {
                return user.userId === args.author
            })
            const postExist = posts.find((post) => {
                return post.postId === args.post && post.published
            })
            console.log(postExist)

            if(!userExist){
                throw new Error('User do not exist!')
            }

            if(!postExist){
                throw new Error('Post do not exist!')
            }

            const comment = {
                "commentId": uuidv4(),
                "text": args.text,
                "author": users.find((user) => {
                    return user.userId === args.author
                }),
                "post": posts.find((post) => {
                    return post.postId === args.post
                }) 
            }
            comments.push(comment);
            return comment;
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
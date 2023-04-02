import { comments } from './cargos/comments'
import { posts } from './cargos/posts'
import { users } from './cargos/users'


export const typeDefs = `
    type Query {
        getComments : [Comment]
        getUsers : [User]
        getPosts : [Post]
    }
    
    type Comment {
        commentId: ID!
        comment: String!
        date: String!
        author: User
    }

    type User {
        userId: ID!
        name: String!
        age: Int!
        posts: [Post]
    }

    type Post {
        postId: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User
    }
`

export const resolvers = {
    Query : {
        getComments() {
            return comments
        },
        getUsers() {
            return users
        },
        getPosts() {
            return posts
        }
    },
    Comment: {
        author(parent, args, ctx, info){
            return users.find((user) => {
                return user.userId === parent.author
            })
        }
    },
    Post: {
        author(parent, args, ctx, info){
            return users.find((user) => {
                return user.userId === parent.author
            })
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            const postIds = new Set(parent.posts);
            return posts.filter((post) => {
                return postIds.has(post.postId)
            })
        }
    }
}


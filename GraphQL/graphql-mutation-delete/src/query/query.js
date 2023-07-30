// mutation {
//     createUser (
//       data: {
//         name:"Batman", email:"batman1@dc.com", age:28
//       }){
//       id
//       name
//       email
//     }
//     createPost(
//       data: {
//         title:"GraphQL 101", body:"GraphQL Mutation", published:true, author:2
//       }){
//       title
//       body
//       published
//     }
//     createComment(
//       data: {
//         text:"GraphQL Mutations are cool", author:2, post:12
//       }){
//       text
//     }
//     deleteUser(id:1){
//       name
//       email
//       age
//     }
//   }
  
//    query {
//      getUsers (query: "Batman"){
//        id
//        name
//      }
//      getPosts (query: "GraphQL 101"){
//        id
//        title
//        body
//        author {
//          id
//          name
//        }
//      }
//      getComments {
//        id
//        text
//        author {
//          id
//          name
//        }
//      }
//      me {
//        id
//        name
//        email
//      }
//      post {
//        id
//        title
//        body
//        published
//      }
//    }
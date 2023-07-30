export const comments = [{
    "commentId": 1,
    "text":"No he is not",
    "author":2,
    "post":1
},{
    "commentId": 2,
    "text":"No he is not",
    "author":2,
    "post":1
},{
    "commentId": 3,
    "text":"No he is not",
    "author":1,
    "post":2
}]

export const posts = [{
    "postId": 1,
    "title": "Avengers",
    "body": "Is Hulk dead?",
    "published": true,
    "author": 1
},{
    "postId": 2,
    "title": "Marvel",
    "body": "Captian America returning?",
    "published": true,
    "author": 1
}
]

export const users = [{
    "userId" : 1,
    "name" : "Thor",
    "email" : "thor@marvel.com",
    "age" : 50
},
{
    "userId" : 2,
    "name" : "Captain America",
    "email" : "ca@marvel.com",
    "age" : 35
}]

const db = {
    users,
    posts,
    comments
}

export { db as default }
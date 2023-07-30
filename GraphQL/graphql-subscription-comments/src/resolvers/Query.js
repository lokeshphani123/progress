const Query = {
    getUsers(parent, args, { db }, info){
        return db.users;
    },
    getPosts(parent, args, { db }, info){
        return db.posts;
    },
    getComments(parent, args, { db }, info){
        return db.comments;
    }
}

export {Query as default}
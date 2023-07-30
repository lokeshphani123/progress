const Mutation = {
    deletePost(parent, args, { db }, info){
        //Check if the post exist
        //Remove and Return the Post
        // Remove all related comments
        const postIndex = db.posts.findIndex((post) => post.postId.toString() === args.id );
        console.log('PostIndex ', postIndex);
        if (postIndex === -1) {
            throw new Error('Post not found')
        }
        const deletedPost = db.posts.splice(postIndex, 1);

        return deletedPost[0];
    },
    deleteComment(parent, args, { db }, info) {
        const commentIndex = db.comments.findIndex((comment) => comment.commentId.toString() === args.id);
        if(commentIndex ===-1){
            throw new Error('Comment not found')
        }
        const deletedComment = db.comments.splice(commentIndex,1);
        return deletedComment[0];
    },
    updateUser(parent, args, { db }, info) {

        const { id, data } = args
        const user = db.users.find((user) => user.userId.toString() === id);
        if(user === -1) {
            throw new Error('User not found')
        }
        if(typeof data.name === 'string') {
            user.name = data.name
        }
        if(typeof data.email === 'string') {
            user.email = data.email
        }
        if(typeof data.age === 'number') {
            user.age = data.age
        }

        return user

    }

}

export { Mutation as default }
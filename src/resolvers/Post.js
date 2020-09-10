// Resolver for the relative dependency author and comments on post type
const Post = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.author;
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments.filter((comment) => {
      return comment.post === parent.id;
    });
  },
};

export { Post as default };

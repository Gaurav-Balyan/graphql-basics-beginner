const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  me() {
    return {
      id: '123',
      name: 'Mike',
      email: 'mike@gmail.com',
    };
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(args.query) ||
        post.body.toLowerCase().includes(args.query)
      );
    });
  },
  post() {
    return {
      id: '123',
      title: 'Post 1',
      body: 'Body 1',
      published: true,
    };
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },
};

export { Query as default };

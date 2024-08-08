const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
})

Post.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
// });

//how do i get the eztra post_id to go away :( 


module.exports = { User, Post, Comment };

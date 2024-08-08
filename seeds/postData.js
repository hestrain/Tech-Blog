const { Post } = require('../models');

const postdata = [
  {
    title: 'Printemps',
    text: 'June 21, 2021 17:00:00',
    user_id: 1,
  },
  {
    title: 'Wow',
    text: 'This is another post for the blog',
    user_id: 2,
  },
  {
    title: 'yet Another Post',
    text: 'sorry these will all have the exact same post date lol oops',
    user_id: 2,
  },
  {
    title: 'PostyWosty',
    text: 'what if i copied the script of the bee movie in here',
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;

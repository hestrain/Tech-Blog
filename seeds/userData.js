const { User } = require('../models');

const userdata = [
  {
    username: 'apricot',
    email: 'apricot@fruit.com',
    password: 'password',
},
{
  username: 'pear',
  email: 'pear@fruit.com',
  password: 'pearword',
},
{
  username: 'apple',
  email: 'apple@fruit.com',
  password: 'papplesword1',
},

];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;

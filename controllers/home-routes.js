const router = require('express').Router();
const { Post, Comment } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const posts = dbPostData.map((Post) =>
      Post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Post
router.get('/Post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'title',
            'text',
            'user_id',
            'created_at',
          ],
        },
      ],
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'text',
            'user_id',
            'created_at',
          ],
        },
      ],
    });

    const Post = dbPostData.get({ plain: true });                                     
    res.render('Post', { Post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


// Login route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;

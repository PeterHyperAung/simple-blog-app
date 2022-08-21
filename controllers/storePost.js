const path = require('path');
const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
  let title = req.body.title.trim(),
    content = req.body.content.trim();

  req.flash('data', req.body);

  if (title === '' || content === '') {
    title === '' && req.flash('error', 'Please provide the title of the blog');
    content === '' &&
      req.flash('error', 'Please provide the body content of the blog');
    res.redirect('/post/new');
    return;
  }
  let image = req.files?.image;
  if (image) {
    image.mv(
      path.resolve(__dirname, '..', 'public', 'images', image.name),
      async (error) => {
        await BlogPost.create({
          ...req.body,
          userId: req.session.userId,
          image: '/images/' + image.name,
        });
        res.redirect('/');
      }
    );
  } else {
    await BlogPost.create({
      ...req.body,
      userId: req.session.userId,
      image: '',
    });
    res.redirect('/');
  }
};

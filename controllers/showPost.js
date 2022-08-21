const { convert } = require('html-to-text');
const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
  let filter;
  if (req.query) {
    filter = new RegExp(req.query.title, 'i');
  } else {
    filter = '';
  }

  let blogposts = await BlogPost.find({ title: filter }).populate('userId');
  blogposts.map((el) => {
    if (el.content[0] === '<') {
      el.text = convert(el.content, { wordwrap: 130 });
    }
  });
  res.render('index', {
    blogposts,
  });
};

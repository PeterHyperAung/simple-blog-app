const { convert } = require('html-to-text');
const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
  try {
    const blogpost = await BlogPost.findById(req.params.id).populate('userId');
    if (blogpost) {
      let text = convert(blogpost.content, { wordwrap: 130 });
      res.render('post', {
        blogpost,
        text,
      });
    } else {
      res.render('notfound');
    }
  } catch (err) {
    res.render('notfound');
  }
};

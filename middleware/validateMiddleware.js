module.exports = (req, res, next) => {
  if (req.files == null || req.body.title == null || req.body.content == null) {
    return res.redirect('/post/new');
  }
  next();
};

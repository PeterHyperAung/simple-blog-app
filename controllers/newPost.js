module.exports = (req, res) => {
  if (req.session.userId) {
    let error = req.flash('error'),
      data = req.flash('data')[0],
      title,
      content;

    if (data) {
      data.title && (title = data.title.trim() === '' ? '' : data.title);
      data.content &&
        (content = data.content.trim() === '' ? '' : data.content);
    }
    return res.render('create', {
      error,
      title,
      content,
      createPost: true,
    });
  }
  res.redirect('/auth/login');
};

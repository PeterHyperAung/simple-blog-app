module.exports = (req, res) => {
  const error = req.flash('validationError')[0];
  res.render('login', {
    error,
  });
};

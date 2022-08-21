module.exports = (req, res) => {
  const error = req.flash('validationError')[0];
  console.log(error);
  res.render('login', {
    error,
  });
};

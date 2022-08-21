const User = require('../models/User');
const path = require('path');

module.exports = (req, res) => {
  let validationErrors = [];
  if (req.body.username === '' || req.body.password === '') {
    if (req.body.username.trim() === '')
      validationErrors.push('Please provide a username');

    if (req.body.password.trim() === '')
      validationErrors.push('Please provide a password');

    req.flash('validationErrors', validationErrors);
    req.flash('data', req.body);
    res.redirect('/auth/register');

    return;
  }

  User.create(req.body, (error, data) => {
    if (error) {
      validationErrors = Object.keys(error.errors).map(
        (i) => error.errors[i].message
      );
      req.flash('validationErrors', validationErrors);
      return res.redirect('/auth/register');
    }
    req.session.userId = data._id;
    res.redirect('/');
  });
};

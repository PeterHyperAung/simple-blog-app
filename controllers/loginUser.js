const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
  const { username, password } = req.body;
  const validationError = [];

  User.findOne({ username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          req.session.userId = user._id;
          res.redirect('/');
        } else {
          req.flash('validationError', 'Wrong Password.');
          res.redirect('/auth/login');
        }
      });
    } else {
      req.flash('validationError', "User name can't be found.");
      res.redirect('/auth/login');
    }
  });
};

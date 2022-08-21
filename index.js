const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const flash = require('connect-flash');
const app = express();

mongoose.connect(
  'mongodb+srv://PeterAung:mysimpletestingblogapp@cluster0.pldi4pc.mongodb.net/blogapp',
  {
    useNewUrlParser: true,
  }
);

const newPostController = require('./controllers/newPost');
const showPostController = require('./controllers/showPost');
const show1PostController = require('./controllers/show1Post');
const storePostController = require('./controllers/storePost');
const storeUserController = require('./controllers/storeUser');
const newUserController = require('./controllers/newUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');
const logoutPageController = require('./controllers/logoutPageRender');

const validateMiddleware = require('./middleware/validateMiddleware');
const authMiddleware = require('./middleware/authMiddleware');
const authenticateMiddlware = require('./middleware/redirectIfAuthenticateMiddlware');

global.loggedIn = null;

app.use(express.static('public'));
app.use(express.json());

app.use(fileUpload());
app.use(flash());
app.use(
  expressSession({
    secret: 'peterbutbeta',
  })
);

app.use('posts/store', validateMiddleware);

app.set('view engine', 'ejs');

app.use('*', (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

app.get('/', showPostController);

app.get('/post/new', authMiddleware, newPostController);
app.get('/post/:id', show1PostController);
app.post('/posts/store', authMiddleware, storePostController);

app.get('/auth/register', authenticateMiddlware, newUserController);
app.post('/users/register', authenticateMiddlware, storeUserController);

app.get('/auth/login', authenticateMiddlware, loginController);
app.post('/users/login', authenticateMiddlware, loginUserController);

app.get('/account/logout', logoutPageController);
app.get('/auth/logout', logoutController);

app.use((req, res) => res.render('notfound'));

app.listen(process.env.PORT || 4000, () => {
  console.log('App running on port');
});

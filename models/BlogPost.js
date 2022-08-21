const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: String,
  content: String,
  username: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
  datePosted: {
    type: Date,
    default: new Date(),
  },
  image: String,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;

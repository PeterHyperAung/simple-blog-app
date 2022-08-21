const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost:27017/myblogapp', {
  useNewUrlParser: true,
});

const id = '62fe17fd1d2f1a3c3945b2df';

// BlogPost.create(
//   {
//     title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
//     body: `If you have been here a long time, you might remember when I went on ITV Tonight to
// dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money
// topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery
// opens up. You know those bullet-point lists. You start spotting them everything at this time of year.
// They go like this:`,
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// BlogPost.find({ title: /the/i }, (error, BlogPost) => {
//   console.log(error, BlogPost);
// });

// BlogPost.findById(id, (error, BlogPost) => {
//   console.log(error, BlogPost);
// });

// BlogPost.findByIdAndUpdate(id, { title: 'UpdateTitle' }, (err, blog) => {
//   console.log(err, blog);
// });

// BlogPost.findByIdAndDelete(id, (err, blog) => {
//   console.log(err, blog);
// });

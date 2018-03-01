const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    required: true,
    trime: true,
    type: String,
    minlength: 1
  }
});

var newUser = new User({
  email: 'larissa@larissa.com'
});

newUser.save().then(
  doc => {
    console.log(JSON.stringify(doc, undefined, 2));
  },
  err => {
    console.log('Unable to save the todo', err);
  }
);

// var edit = new Todo({
//   text: '    Edit this video     '
// });

// edit.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   err => {
//     console.log('Unable to save the todo', err);
//   }
// );

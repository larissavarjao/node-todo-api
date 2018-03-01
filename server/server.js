const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Study like Hermione'
});

newTodo.save().then(
  doc => {
    console.log('Saved todo: ', doc);
  },
  e => {
    console.log('Unable to save todo', err);
  }
);

var toBeHermione = new Todo({
  text: 'Study like Hermione IT things',
  completed: true,
  completedAt: 1032018
});

toBeHermione.save().then(
  doc => {
    console.log('Saved todo: ', doc);
  },
  e => {
    console.log('Unable to save todo', err);
  }
);

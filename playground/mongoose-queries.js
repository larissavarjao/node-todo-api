const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5a9c106e580952ff42e72c2011';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// //Bom para encontrar qualquer método, sem ser o ID o principal
// Todo.findOne({ _id: id }).then(todo => {
//   console.log('Todo', todo);
// });

//Melhor quando voce quer procurar um metodo pelo ID
// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('ID not found');
//     }
//     console.log('Todo By ID', todo);
//   })
//   .catch(err => console.log('Error message', err));

var userID = '5a97f1c43c8ce9ec34e23eaa';

User.findById(userID)
  .then(user => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User', user);
  })
  .catch(e => console.log(e));

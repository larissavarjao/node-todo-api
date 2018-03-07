const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove() - se vc passar vazio remove tudo.
// Todo.remove({}).then(result => {
//   console.log(result);
// });

//Todo.findOneAndRemove(); // encontra o documento e remove (ele retorna o valor que foi deletado)
//Todo.findVyIdAndRemove // acha pelo id e remove

Todo.findByIdAndRemove('5a9fd901a3758891cff2c309').then(doc => {
  console.log(doc);
});

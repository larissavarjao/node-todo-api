// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany - deletar mais de um

  // db
  //   .collection('Todos')
  //   .deleteMany({ text: 'Hermione is awesome' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //DeleteOne - deletar somente um

  // db
  //   .collection('Todos')
  //   .deleteOne({ text: 'Hermione is awesome' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //findOneAndDelete - achar um e deletar

  // db
  //   .collection('Todos')
  //   .findOneAndDelete({ completed: false })
  //   .then(result => {
  //     console.log(result);
  //   });

  // db
  //   .collection('Users')
  //   .deleteMany({ name: 'Andrew' })
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection('Users')
    .findOneAndDelete({
      _id: new ObjectID('5a9562d15f5962b3da236ed4')
    })
    .then(result => {
      console.log(result);
    });

  // db.close();
});

// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var user = { name: 'larissa', age: 25 };
// var { name } = user;
// console.log(name); //Vai imprimir larissa, pois ele pega o valor dentro do objeto. Object Destruct

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //   db.collection('Todos').insertOne(
  //     {
  //       text: 'Something to do',
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log('Unable to insert todo', err);
  //       }

  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  db.collection('Users').insertOne(
    {
      name: 'Larissa Varjão',
      age: 25,
      location: 'Brasil'
    },
    (err, result) => {
      if (err) {
        return console.log('Unable to insert user', err);
      }
      //   console.log(JSON.stringify(result.ops, undefined, 2));
      console.log(result.ops[0]._id.getTimestamp()); // traz quando foi criado
    }
  );

  db.close();
});

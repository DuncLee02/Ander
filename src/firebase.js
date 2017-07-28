
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

// var elasticsearch = require('elasticsearch');
// var client = new elasticsearch.Client({
//   host: 'localhost:9200',
//   log: 'trace'
// });

// client.ping({
//   // ping usually has a 3000ms timeout
//   requestTimeout: 1000
// }, function (error) {
//   if (error) {
//     console.trace('elasticsearch cluster is down!');
//   } else {
//     console.log('All is well');
//   }
// });

const config = {
  apiKey: "AIzaSyClINI_vVYWtT-0eI2iHyGl7VQsk-fEBRM",
  authDomain: "ander-25aca.firebaseapp.com",
  databaseURL: "https://ander-25aca.firebaseio.com",
  projectId: "ander-25aca",
  storageBucket: "ander-25aca.appspot.com",
  messagingSenderId: "457726967594"
};


firebase.initializeApp(config)

export default firebase;

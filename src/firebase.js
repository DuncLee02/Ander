
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

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

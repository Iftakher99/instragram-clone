import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpq2hDpEokrd7pAyDf44vAsJGZAYfmg5E",
  authDomain: "instagram-clone-640b3.firebaseapp.com",
  databaseURL: "https://instagram-clone-640b3-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-640b3",
  storageBucket: "instagram-clone-640b3.appspot.com",
  messagingSenderId: "534867212209",
  appId: "1:534867212209:web:c54c016345b85083b8ef90",
  measurementId: "G-T0MQ9JY2TM",
};
export default firebaseConfig;
// Set the configuration for your app
// TODO: Replace with your project's config object

var config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://instagram-clone-640b3-default-rtdb.firebaseio.com/",
  storageBucket: "bucket.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

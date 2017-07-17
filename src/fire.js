// This file sets up my firebase database
import * as firebase from "firebase";
import {apiCall} from './actions';
import store from './store';

var config = {
    apiKey: "AIzaSyDhYueN3n2PAGlk_ws11vk5yU1b61r-onQ",
    authDomain: "my-project-manager-96fe6.firebaseapp.com",
    databaseURL: "https://my-project-manager-96fe6.firebaseio.com",
    projectId: "my-project-manager-96fe6",
    storageBucket: "my-project-manager-96fe6.appspot.com",
    messagingSenderId: "450404297799"
};
firebase.initializeApp(config);
var database = firebase.database();

database.ref('DigitalCrafts')
  .on('value', function(tasks) {
    store.dispatch(apiCall(tasks.val()))
  })
// database.ref('DigitalCrafts').push({
//   column: 'In Progress',
//   task: 'read docs'
// });

export default database;

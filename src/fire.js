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

// sign-in authentication with google, check which providers are used via authentication > sign in method on firebase
export var User = {};
export function auth () {
    return new Promise(function (resolve, reject) {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                User.user = result.user;
                resolve(User);

                // dispatches all data from the data base on any change to redux
                // which directs it to every conponent that needs it and re renders state
                database.ref(`users/${User.user.uid}`)
                  .on('value', function(data) {
                    store.dispatch(apiCall(data.val()));
                  })
              })
            .catch(function(err) {
              reject(err);
            })
      })
    }

    // allows user to stay signed in even when leaving the page and auto resigns them in
    firebase.auth()
        .onAuthStateChanged(function(user) {
            if (user) {
                User.user = user;
                database.ref(`users/${User.user.uid}`)
                  .on('value', function(data) {
                    store.dispatch(apiCall(data.val()))
                  })
            }
        });

export default database;

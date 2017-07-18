// This file sets up my firebase database
import * as firebase from "firebase";
import {apiCall} from './actions';
import store from './store';

const state = store.getState();

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

//sign-in authentication with google, check which providers are used via authentication > sign in method on firebase
export var User = {};
export function auth () {
    return new Promise(function (resolve, reject) {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                User.user = result.user;
                resolve(User);

                database.ref(`users/${User.user.uid}/${state.currentProject}`)
                  .on('value', function(data) {
                    store.dispatch(apiCall(data.val()));
                  })
              })
            .catch(function(err) {
              reject(err);
            })
      })
    }

    firebase.auth()
        .onAuthStateChanged(function(user) {
            if (user) {
                User.user = user;
                database.ref(`users/${User.user.uid}/${state.currentProject}`)
                  .on('value', function(data) {
                    store.dispatch(apiCall(data.val()))
                  })
            }
        });

export default database;

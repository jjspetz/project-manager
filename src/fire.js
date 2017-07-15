// This file sets up my firebase database
import * as firebase from "firebase";
import {set_top500} from './actions';
import store from './store';

var config = {
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

export default database;

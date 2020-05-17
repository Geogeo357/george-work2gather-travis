import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAa--MRkgakfsfNDPsJARvKdVCR-TEKTl0",
  authDomain: "travis-tutorial.firebaseapp.com",
  databaseURL: "https://travis-tutorial.firebaseio.com",
  projectId: "travis-tutorial",
  storageBucket: "travis-tutorial.appspot.com",
  messagingSenderId: "587494013644",
  appId: "1:587494013644:web:bff1f6d5c294c71b59a069"
};
  
  firebase.initializeApp(firebaseConfig);

export default firebase;
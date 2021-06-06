import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAF6Kyqx15YKVh1WBviVLotXLd-iI8dfVM",
    authDomain: "to-do-6d61c.firebaseapp.com",
    projectId: "to-do-6d61c",
    storageBucket: "to-do-6d61c.appspot.com",
    messagingSenderId: "351955778246",
    appId: "1:351955778246:web:7d1271ec33ae4467c2f5c7"
};
  //if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig);
  //}  

const db = firebase.firestore();
export { db };
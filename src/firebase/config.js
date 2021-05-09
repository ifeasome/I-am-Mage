import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_9EOc_yLQOjH5fXh-Yq5Ytbklm5Nnjig",
    authDomain: "i-am-mage-899e0.firebaseapp.com",
    projectId: "i-am-mage-899e0",
    storageBucket: "i-am-mage-899e0.appspot.com",
    messagingSenderId: "708937860598",
    appId: "1:708937860598:web:83781779a0cfe0efe533d7"
  };
 
  // firebase function calls
  const initApp = firebase.initializeApp(firebaseConfig)
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  // firebase exports
  export { projectStorage, projectFirestore, timestamp, initApp, firebaseConfig };
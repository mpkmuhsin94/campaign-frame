const firebaseConfig = {
  apiKey: "AIzaSyCsjSUxKG8siZvo3R0f-ONphT5rNCRbuhI",
  authDomain: "cmpgnframe.firebaseapp.com",
  projectId: "cmpgnframe",
  storageBucket: "cmpgnframe.firebasestorage.app",
  messagingSenderId: "992926216912",
  appId: "1:992926216912:web:7746fb05d938d9736ce4d5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

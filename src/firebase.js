

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXCs9O0P5MfUsjKN2NM_u8yXaQ3IDWIh4",
    authDomain: "instagram-clone-7e58c.firebaseapp.com",
    databaseURL: "https://instagram-clone-7e58c.firebaseio.com",
    projectId: "instagram-clone-7e58c",
    storageBucket: "instagram-clone-7e58c.appspot.com",
    messagingSenderId: "560334509000",
    appId: "1:560334509000:web:9dc75b8a32371ad87ae6fd",
    measurementId: "G-25D1918EQD"
  });
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

   //export default db;
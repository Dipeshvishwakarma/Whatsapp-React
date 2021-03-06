import firebase from 'firebase';

 

const firebaseConfig = {
  apiKey: "AIzaSyB5564Rq4bQNIZXb6-TSFh2xGb74guvMw4",
  authDomain: "whatsapp-clone-react-3c96e.firebaseapp.com",
  projectId: "whatsapp-clone-react-3c96e",
  storageBucket: "whatsapp-clone-react-3c96e.appspot.com",
  messagingSenderId: "474185146138",
  appId: "1:474185146138:web:234bb81da4145697f996a3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
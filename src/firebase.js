import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyB5564Rq4bQNIZXb6-TSFh2xGb74guvMw4",
    authDomain: "whatsapp-clone-react-3c96e.firebaseapp.com",
    projectId: "whatsapp-clone-react-3c96e",
    storageBucket: "whatsapp-clone-react-3c96e.appspot.com",
    messagingSenderId: "474185146138",
    appId: "1:474185146138:web:234bb81da4145697f996a3"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = firebaseApp.getFirestore();

  export default db;
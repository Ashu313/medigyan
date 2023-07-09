import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXNew7WbvWLfubRzXKeHZKXr4Db3SJdhA",
  authDomain: "medigyan-a1a3a.firebaseapp.com",
  projectId: "medigyan-a1a3a",
  storageBucket: "medigyan-a1a3a.appspot.com",
  messagingSenderId: "690427282734",
  appId: "1:690427282734:web:ede65e4232b533f1f7a6bf",
  measurementId: "G-QL63FT03E3"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider} from 'firebase/firebase-auth'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB7-fG1mTDgLApVSH0P-NemCSZi4no8s1s",
  authDomain: "proof1-1648d.firebaseapp.com",
  databaseURL: "https://proof1-1648d-default-rtdb.firebaseio.com",
  projectId: "proof1-1648d",
  storageBucket: "proof1-1648d.appspot.com",
  messagingSenderId: "738394705743",
  appId: "1:738394705743:web:4293573c1653d73ae07f3a",
  measurementId: "G-8Z8R5VWV60"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Gprovider = new GoogleAuthProvider();
const Auth = getAuth();
Auth.languageCode = 'es';

export {
    app,
    analytics,
    Gprovider,
    Auth
}
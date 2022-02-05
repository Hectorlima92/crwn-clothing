import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBulomOsFBtES1iZl4eovVCLubm4VPCZR4",
    authDomain: "crwn-db-ada2a.firebaseapp.com",
    projectId: "crwn-db-ada2a",
    storageBucket: "crwn-db-ada2a.appspot.com",
    messagingSenderId: "482410878841",
    appId: "1:482410878841:web:485eb3c4d1c1fb6f4501a8",
    measurementId: "G-S20BTBLQG7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
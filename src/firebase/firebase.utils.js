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
 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
 
  const userRef = firestore.doc(`users/${userAuth.uid}`);
 
  const snapShot = await userRef.get();
 
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
 
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap =(collections) => {
  const transformedCollection = collections.docs.map(
    doc => { 
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }});

      return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();
 
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
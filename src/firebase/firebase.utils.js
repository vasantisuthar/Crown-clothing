import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, collection,getDoc, setDoc, writeBatch } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import 'firebase/compat/auth';
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDKPKOLhKbTDUm8R-z_TRNxDqpw-g4iMdA",
    authDomain: "crowndb-f142c.firebaseapp.com",
    projectId: "crowndb-f142c",
    storageBucket: "crowndb-f142c.appspot.com",
    messagingSenderId: "322798782111",
    appId: "1:322798782111:web:750b2e0b40fcdc99e144aa",
    measurementId: "G-ETZBR734Z6"
};

const firebaseApp = initializeApp(config);

export const db = getFirestore(firebaseApp);
export const auth = getAuth();
export const firestore = getFirestore();
getFirestore()

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot =  await getDoc(userRef);
  
  if(snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date()

    try{
      await setDoc(userRef,{
        displayName,
        email,
        createdAt,
        ...additionalData

      })
    }catch(error){
      console.log(error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const batch = writeBatch(db);

  objectsToAdd.forEach((element) => {
    const docRef = doc(collection(db, collectionKey))
    batch.set(docRef, element)
});

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items}  = doc.data();
    return {
      routeName : encodeURI(title.toLowerCase?.()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase?.()] = collection;
    return accumulator;
  }, {});
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider).then().catch((error) => {
    // Handle Errors here.
    console.log(error)
  });;


export default firebase;
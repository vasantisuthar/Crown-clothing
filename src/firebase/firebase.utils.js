import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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
 


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider).then().catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });;


export default firebase;
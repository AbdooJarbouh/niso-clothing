import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const config = {
    apiKey: "AIzaSyDrxelbRyiHddEFhKxMFf864Ric6cWlyDg",
    authDomain: "niso-fca29.firebaseapp.com",
    projectId: "niso-fca29",
    storageBucket: "niso-fca29.appspot.com",
    messagingSenderId: "492667673514",
    appId: "1:492667673514:web:ad8968ef62e05bb06229d3",
    measurementId: "G-JQ4T6ZG930"    
};


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
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message)
        }
        
    }
    return userRef;
};

firebase.initializeApp(config);


export const auth = firebase.auth();


export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({ prompt: 'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;



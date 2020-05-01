import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-mSq7sxCmKMVEFkk_p_TlXsijXEJ1wCc",
    authDomain: "fir-react-60572.firebaseapp.com",
    databaseURL: "https://fir-react-60572.firebaseio.com",
    projectId: "fir-react-60572",
    storageBucket: "fir-react-60572.appspot.com",
    messagingSenderId: "83523127139",
    appId: "1:83523127139:web:1e4f9603a2f55fdb2cf556"
  };

  firebase.initializeApp(config);


  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName , email} = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email, 
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
        return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
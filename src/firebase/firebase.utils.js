import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAaFmoz1VjCtOFTKE_BPJQ2DmGkf5e06IM',
  authDomain: 'crwn-db-5621d.firebaseapp.com',
  projectId: 'crwn-db-5621d',
  storageBucket: 'crwn-db-5621d.appspot.com',
  messagingSenderId: '531821516488',
  appId: '1:531821516488:web:e7d3570aaca4a4de00f7fd',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

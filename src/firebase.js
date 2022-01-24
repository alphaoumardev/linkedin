import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, } from 'firebase/auth';

const firebaseConfig =
{
  apiKey: "AIzaSyCX0LogpoNg3I1qIkpaqM6Jqq35oYwqo8w",
  authDomain: "linkedin-e4972.firebaseapp.com",
  projectId: "linkedin-e4972",
  storageBucket: "linkedin-e4972.appspot.com",
  messagingSenderId: "40474822673",
  appId: "1:40474822673:web:ca5c651b5e8041186b89b0",
  measurementId: "G-GZJ9BR6FK1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();


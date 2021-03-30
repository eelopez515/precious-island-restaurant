import firebase from 'firebase/app';
import 'firebase/firestore';

const { REACT_APP_FIREBASE_KEY } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_KEY,
  authDomain: 'precious-island-d546b.firebaseapp.com',
  databaseURL: 'https://precious-island-d546b-default-rtdb.firebaseio.com',
  projectId: 'precious-island-d546b',
  storageBucket: 'precious-island-d546b.appspot.com',
  messagingSenderId: '635292141523',
  appId: '1:635292141523:web:60b2e80d4c7c84319b1126',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import dotenv from 'dotenv';


dotenv.config();

export const firebaseConfig = {
    apiKey: "AIzaSyAX2gsgDrFLEHVJVOfKAsS8WbsvBhnDang",
    authDomain: "frubookmark.firebaseapp.com",
    databaseURL: "https://frubookmark.firebaseio.com",
    projectId: "frubookmark",
    storageBucket: "frubookmark.appspot.com",
    messagingSenderId: "442950820871",
    appId: "1:442950820871:web:04175ae14947f6902ab6a2"
  };


export default firebase;
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// require('dotenv').config()

const app = firebase.initializeApp({
    apiKey: "AIzaSyD_xmVbEwYsDJNDHQLsP_H5nUqb3HB9FpA",
    authDomain: "react-firebase-auth-769eb.firebaseapp.com",
    projectId: "react-firebase-auth-769eb",
    storageBucket: "react-firebase-auth-769eb.appspot.com",
    messagingSenderId: "547237710411",
    appId: "1:547237710411:web:301e66ea7fa300d39b9bce"
})

export const auth = app.auth()
export default app
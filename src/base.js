import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJxO_alo2QksyGn933hFBX8zKGMzuXl9U",
    authDomain: "catchoftheday-15575.firebaseapp.com",
    databaseURL: "https://catchoftheday-15575.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
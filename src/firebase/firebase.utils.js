import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
	apiKey: "AIzaSyDYO3euDY7ywirEqA1lbz1mzNRBPuB8KLI",
	authDomain: "crown-clothing-24ab8.firebaseapp.com",
	databaseURL: "https://crown-clothing-24ab8.firebaseio.com",
	projectId: "crown-clothing-24ab8",
	storageBucket: "crown-clothing-24ab8.appspot.com",
	messagingSenderId: "727541159089",
	appId: "1:727541159089:web:bf8b78a69875672db7fe90",
	measurementId: "G-19G547JRW8"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
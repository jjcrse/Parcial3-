// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbvdSk0x8xAZiAwco_gQKkFjegZZ_xkQI",
  authDomain: "parcial3-37ede.firebaseapp.com",
  projectId: "parcial3-37ede",
  storageBucket: "parcial3-37ede.firebasestorage.app",
  messagingSenderId: "667310787708",
  appId: "1:667310787708:web:2bfdf4ebb1cf3e048d0df9",
  measurementId: "G-6ZQJXMRVP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const registerUser = async (email: string, password: string) => {
	try {
    console.log("Registering user with email:", email);
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		console.log(userCredential.user);
		return { isRegistered: true, user: userCredential };
	} catch (error) {
		console.error(error);
		return { isRegistered: false, error: error };
	}
};

const loginUser = async (email: string, password: string) => {
    try {
    console.log("Logging in user with email:", email);
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
        return { isLoggedIn: true, user: userCredential };
    } catch (error) {
        console.error(error);
        return { isLoggedIn: false, error: error };
    }
};



export const auth = getAuth(app);
export const db = getFirestore(app);
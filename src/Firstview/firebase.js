 
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {  getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd7EiMJHepSO7QCWaxisc-znsTtCjrckg",
  authDomain: "pizza-delivery-webapp.firebaseapp.com",
  projectId: "pizza-delivery-webapp",
  storageBucket: "pizza-delivery-webapp.appspot.com",
  messagingSenderId: "384614617547",
  appId: "1:384614617547:web:82c1c1dd21ff170786664e",
  measurementId: "G-L98GZSWK98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
    
  return currentUser;
}






// Storage

// export async function upload(file, currentUser, setLoading) {
//   const fileRef = ref(storage, currentUser.uid + ".png");

//   setLoading(true);

//   const snapshot = await uploadBytes(fileRef, file);

//   const photoURL = await getDownloadURL(fileRef);

//   updateProfile(currentUser, { photoURL });

//   setLoading(false);
//   alert("Uploaded file!");
// }



export { storage, app };

 

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import {auth} from "../firebase";
const userAuthContext = createContext();


export function UserAuthContextProvider({children}){

    const [user,setUser] = useState("");

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logIn=(email,password)=>{
        return  signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
           setUser(currentUser);
       });
       return ()=>{
           unsubscribe();
       }
    },[]);

    const logOut=()=>{
      return signOut(auth);
    }

    return(
        <userAuthContext.Provider value={{user,signUp,logIn,logOut}}>
        {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
  return useContext(userAuthContext);
}

 
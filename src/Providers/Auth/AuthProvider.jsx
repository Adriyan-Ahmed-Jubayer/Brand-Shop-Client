import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [userAccount, setUserAccount] = useState(null);


    const [isLoading, setIsLoading] = useState(true)


    const RegisterAccount = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const LoginWithGGL = () => {
        const GGLProvider = new GoogleAuthProvider
        return signInWithPopup(auth, GGLProvider)
    }
    const LogOutAccount = () => {
        setIsLoading(true)
       return signOut(auth);
    }

    const updatingProfile = (res, name, pic) => {
        return updateProfile(res.user, {
            displayName: name,
            photoURL: pic
        })
    }

    const LoginAccount = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }



    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, user =>{
              setUserAccount(user)
              setIsLoading(false)
          });
          return () => {
              unSubscribe()
          }
      }, [])

    const AuthMethods = {
        userAccount,
        isLoading,
        RegisterAccount,
        LoginWithGGL,
        LoginAccount,
        LogOutAccount,
        updatingProfile
    }
    return (
        <AuthContext.Provider value={AuthMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
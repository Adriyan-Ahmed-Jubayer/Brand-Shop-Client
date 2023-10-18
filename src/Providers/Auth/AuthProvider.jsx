import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const AuthMethods = {
    }
    return (
        <AuthContext.Provider value={AuthMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
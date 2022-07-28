import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../firebase";

const AuthContext = React.createContext(null);

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            setload
            setCurrentUser(user);
        })

        return unsubscribe
    }, []);

    const value = {
        currentUser,
        signUp
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
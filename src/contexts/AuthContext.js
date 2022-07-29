import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../firebase";
import {paste} from "@testing-library/user-event/dist/paste";

const AuthContext = React.createContext(null);

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })

        return unsubscribe
    }, []);

    const value = {
        currentUser,
        logout,
        login,
        signUp
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
// import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
// import app from '../../firebase/firebase.config'

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {

//     const auth = getAuth(app);

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log(currentUser);
//             setUser(currentUser);
//         });
//         return()=>{
//             return unSubscribe()
//         }
//     },[])
//     const authInfo = {
//         user,
//         loading,
//         createUser
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
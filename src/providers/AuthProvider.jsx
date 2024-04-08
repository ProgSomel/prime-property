import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //! create User 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //! Sign in 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updatingProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);

        });
        return ()=> {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        updatingProfile
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.object
};


export default AuthProvider;

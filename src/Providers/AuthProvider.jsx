import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const name = 'potato alu mia'

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth ,email, password);
    }

    const authInfo = {
        name, 
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../fiarebase/firebase.config";

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

   const [user, setuser] = useState(null)


   const creatUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const singinUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logout = () => {
      return signOut(auth)
   }


   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log("current user ",currentUser)
         setuser(currentUser);
      })
      return () => { unSubscribe(); }

   }, [])



   const authInfo = {
      user,
      creatUser,
      singinUser,
      logout
   }

   return (
      <authContext.Provider value={authInfo}>
         {children}
      </authContext.Provider>
   );
};

export default AuthProvider;


AuthProvider.propTypes = {
   children: PropTypes.node
}

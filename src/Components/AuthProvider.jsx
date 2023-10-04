import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../fiarebase/firebase.config";

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

   const [user, setuser] = useState(null)
   const[loding,setloding]=useState(true)


   const creatUser = (email, password) => {
      setloding(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const singinUser = (email, password) => {
      setloding(true)
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logout = () => {
      setloding(true)
      return signOut(auth)
   }


   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log("current user ",currentUser)
         setuser(currentUser);
         setloding(false)
      })
      return () => { unSubscribe(); }

   }, [])



   const authInfo = {
      user,
      loding,
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

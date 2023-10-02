

import PropTypes from 'prop-types';
import { createContext } from 'react';
  
 export const authContext =createContext(null)
 
 const AuthProvider = ({children}) => {
   const contextInfo={name:'nodi shagoooooor'}
   return (
      <authContext.Provider value={contextInfo}>
         {children}
      </authContext.Provider>
   );
 };
 
 export default AuthProvider;


 AuthProvider.propTypes={
    children:PropTypes.node
 }

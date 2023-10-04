import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { authContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loding}=useContext(authContext)
    if(loding){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }

    return<Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
 }
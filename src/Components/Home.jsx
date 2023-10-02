import React, { useContext } from 'react';
import { authContext } from './AuthProvider';

const Home = () => {
    const authInfo=useContext(authContext)
    console.log(authInfo)
    return (
        <div>
           <h1>this is home page...............+{authInfo.name}</h1>

        </div>
    );
};

export default Home;
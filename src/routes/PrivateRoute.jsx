import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route',user);

    if (loading){
        return <Spinner animation="border" variant="success" />;
    }
      if (user) {
        return children;
      }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;

/**
 * -----------------
 *       STEPS
 * -----------------
 * 1. check if user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to login page
 * 4. setup the private router
 * 5. handle loading
 */
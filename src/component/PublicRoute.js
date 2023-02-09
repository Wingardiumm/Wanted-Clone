import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../util/isLogin'; 

const PublicRoute = ({component: Component, restricted}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
            isLogin() && restricted ? <Navigate to='/' />:Component 
    );
};

export default PublicRoute;
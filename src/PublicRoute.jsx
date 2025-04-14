import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element: Component, restricted, ...rest }) => {
  const token = localStorage.getItem('token');
  return token && restricted ? <Navigate to="/" /> : <Component {...rest} />;
};

export default PublicRoute;

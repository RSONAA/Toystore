import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, userRole } = useAuth();
  return isAuthenticated && userRole === 'admin' ? children : <Navigate to="/login" />;
};

export default AdminRoute;

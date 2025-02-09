

// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [userRole, setUserRole] = useState(null);

//     const login = (role) => {
//         setIsAuthenticated(true);
//         setUserRole(role);
//     };

//     const logout = () => {
//         setIsAuthenticated(false);
//         setUserRole(null);
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

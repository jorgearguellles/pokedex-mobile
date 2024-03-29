import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const initialValueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={initialValueContext}>
      {children}
    </AuthContext.Provider>
  );
}

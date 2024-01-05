import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null as any);

function AuthProvider ({ children } : {children: React.ReactNode}){
  console.log(children);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
    setLoading(false);
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
  
};

export default AuthProvider;
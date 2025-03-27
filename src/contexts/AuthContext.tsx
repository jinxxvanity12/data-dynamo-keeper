
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { autoAuth } from '../utils/storage';

// Define the user type
interface User {
  id: string;
  name: string;
  isAuthenticated: boolean;
  timestamp: string;
}

// Define the auth context type
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
}

// Create the auth context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false
});

// Hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Auto-initialize on component mount
  useEffect(() => {
    // Initialize or get the existing user
    const currentUser = autoAuth.initialize();
    setUser(currentUser);
    setIsAuthenticated(true);
    
    console.log('Auto-authentication complete');
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

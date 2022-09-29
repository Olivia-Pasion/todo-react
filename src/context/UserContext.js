import { createContext, useState, useContext } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>;
};

const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within UserProvider');
  }
  return context;
};

export { UserProvider, UserContext, useAuth };
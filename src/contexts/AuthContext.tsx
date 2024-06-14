import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Alert } from 'react-native';

type User = {
  email: string;
  username: string;
  password: string;
  cpf: string;
  phone: string;
  birthDate: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  login: (identifier: string, password: string) => void;
  logout: () => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  register: (newUser: User) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const registeredUsers: User[] = [];

//Encapsular lógica de autent e gerenciar estado de login e user
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (identifier: string, password: string) => {
    const foundUser = registeredUsers.find(
      u => (u.email === identifier || u.username === identifier) && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      setIsLoggedIn(true);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const register = (newUser: User) => {
    const { email, username, password, cpf, phone, birthDate } = newUser;

    if (!email || !username || !password || !cpf || !phone || !birthDate) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    registeredUsers.push(newUser);
    setUser(newUser);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user, setUser, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

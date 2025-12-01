import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ContentContextType, ContentState } from '../types';

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const ADMIN_EMAIL = "marketing@cantina-lafresca.cz";
const ADMIN_PASS = "123Qwert";
const STORAGE_KEY = "lafresca_content_v1";
const AUTH_KEY = "lafresca_is_logged_in";

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentState>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Load initial state
  useEffect(() => {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }

    const savedAuth = localStorage.getItem(AUTH_KEY);
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      setIsEditing(true);
    }
  }, []);

  const login = (email: string, pass: string) => {
    if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
      setIsAuthenticated(true);
      setIsEditing(true);
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsEditing(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const toggleEditing = () => {
    if (isAuthenticated) setIsEditing(!isEditing);
  };

  const updateContent = (id: string, value: string) => {
    const newContent = { ...content, [id]: value };
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  };

  return (
    <ContentContext.Provider value={{ content, isAuthenticated, login, logout, updateContent, isEditing, toggleEditing }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

import React, { useEffect, useState, createContext, useContext } from 'react';
interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
  isInitialLoad: boolean;
}
const LoadingContext = createContext<LoadingContextType | undefined>(undefined);
export const LoadingProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    // Initial load - show loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const startLoading = () => {
    // Don't interrupt initial load
    if (!isInitialLoad) {
      setIsLoading(true);
    }
  };
  const stopLoading = () => {
    // Don't interrupt initial load
    if (!isInitialLoad) {
      setIsLoading(false);
    }
  };
  return <LoadingContext.Provider value={{
    isLoading,
    setIsLoading,
    startLoading,
    stopLoading,
    isInitialLoad
  }}>
      {children}
    </LoadingContext.Provider>;
};
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};
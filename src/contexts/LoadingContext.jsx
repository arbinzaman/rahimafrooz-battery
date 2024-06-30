import{ createContext, useState, useContext } from 'react';

// Create context
const LoadingContext = createContext();

// Create a provider component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Create a custom hook to use the LoadingContext
// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = () => {
  return useContext(LoadingContext);
};

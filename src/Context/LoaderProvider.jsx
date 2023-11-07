import { createContext, useState } from "react";

export const LoaderContext = createContext(null);

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;

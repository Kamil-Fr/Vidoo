import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn] = useState(false);
  cosnt[(UserActivation, setUser)] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, []);
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

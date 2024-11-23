import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn] = useState(false);
  cosnt[(UserActivation, setUser)] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCurrentUser
      .then((res) => {
        if (res) {
          setIsLoadingIn(true);
          setUser(res);
        } else {
          setIsLoadingIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoadingIn(false);
      });
  }, []);
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

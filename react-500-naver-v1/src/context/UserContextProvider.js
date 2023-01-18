import { createContext, useContext, useState, useEffect } from "react";
import { User } from "../models/User";
import AuthorService from "../service/author.service";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(new User());
  const [sessionUser, setSessionUser] = useState(new User());

  useEffect(() => {
    const userFetch = async () => {
      const user = AuthorService.getLoginUser();
      if (user) {
        console.log("Provider", user);
        setSessionUser(user);
      } else {
        setSessionUser({});
      }
    };
    userFetch();
  }, []);

  const userLogin = async () => {
    const result = await AuthorService.setLogin(loginUser);
    if (result) {
      setSessionUser(result);
    }
  };

  const props = {
    loginUser,
    setLoginUser,
    userLogin,
    sessionUser,
    setSessionUser,
  };

  return <UserContext.Provider value={props}>{children}</UserContext.Provider>;
};

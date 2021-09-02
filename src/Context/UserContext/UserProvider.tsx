import { FC, useState } from "react";
import { createContext } from "react";
import { UserContextState } from "./types";

const contextDefaultValues: UserContextState = {
  isAuthenticated: false,
  username: "",
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext(contextDefaultValues);

const UserProvider: FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <UserContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import { createContext, useState, useMemo } from "react";

const userContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export default userContext;

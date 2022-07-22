import { createContext, useState, useMemo } from "react";

const pathContext = createContext();

export function PathContextProvider({ children }) {
  const [paths, setPaths] = useState([]);
  const value = useMemo(
    () => ({
      paths,
      setPaths,
    }),
    [paths]
  );
  return <pathContext.Provider value={value}>{children}</pathContext.Provider>;
}

export default pathContext;

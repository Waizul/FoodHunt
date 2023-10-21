import { ReactNode, createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const authContext = createContext("");

const AuthProvider = ({ children }: {children: ReactNode}) => {
  const auth = useFirebase();//@ts-ignore
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthProvider;

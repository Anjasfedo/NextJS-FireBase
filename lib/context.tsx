"use client";

import useLoginGoogle from "@/custom-hooks/useLoginGoogle";
import { createContext, useContext } from "react";

type AuthProviderProps = {
    children: JSX.Element
}

interface UserContextT {
    user: UserT | null;
    error: ErrorT;
    handleLogin: () => void;
    handleLogout: () => void;
  }

export const UserContext = createContext<UserContextT>({
    user: null,
    error: null,
    handleLogin: () => {},
    handleLogout: () => {}
});

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, error, handleLogin, handleLogout] = useLoginGoogle();
    return <UserContext.Provider value={{ user, error, handleLogin, handleLogout }}>{children}</UserContext.Provider>
}

export const useAuth = () => {
    return useContext(UserContext);
};

"use client";

import useLoginGoogle from "@/custom-hooks/useLoginGoogle";
import { createContext, useContext } from "react";

export const UserContext = createContext({
    user: null,
    error: null,
    handleLogin: () => {},
    handleLogout: () => {}
});

export function AuthProvider({ children }) {
    const [user, error, handleLogin, handleLogout] = useLoginGoogle();
    return <UserContext.Provider value={{ user, error, handleLogin, handleLogout }}>{children}</UserContext.Provider>
}

export const useAuth = () => {
    return useContext(UserContext);
};

"use client";

import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "@/lib/config";

type UseLoginGoogleT = [UserT | null, ErrorT, () => void, () => void];

const useLoginGoogle = (): UseLoginGoogleT => {
    const [user, setUser] = useState<UserT | null>(null);
    const [error, setError] = useState<ErrorT>(null);

    const auth = getAuth(app);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            const signedInUser = result.user;
            setUser(signedInUser);
        } catch (error) {
            setError(error instanceof Error ? error.message : String(error));
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            setError(error instanceof Error ? error.message : String(error));
        }
    };

    return [user, error, handleLogin, handleLogout];
};

export default useLoginGoogle;

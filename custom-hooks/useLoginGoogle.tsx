"use client";

import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "@/lib/config";

type UseLoginGoogle = [string | null, string | null, () => void, () => void];

type User = {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
};

const useLoginGoogle = (): UseLoginGoogle => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

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
            setError(error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            setError(error);
        }
    };

    return [user, error, handleLogin, handleLogout];
};

export default useLoginGoogle;

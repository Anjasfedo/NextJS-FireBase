// GoogleSignIn.js

import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "@/lib/config";

const app = initializeApp(firebaseConfig);

const GoogleSignIn = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const auth = getAuth();

    const handleSignIn = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const signedInUser = result.user;
            setUser(signedInUser);
        } catch (error) {
            setError(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null); // Clear user state on successful sign-out
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        console.log(user)
    }, [isError]);

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.displayName}!</p>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="User" />
                    <button onClick={handleSignOut}>Logout</button>
                </div>
            ) : (
                <button onClick={handleSignIn}>Sign in with Google</button>
            )}

            {error && (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            )}
        </div>
    );
};

export default GoogleSignIn;

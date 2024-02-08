
import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/lib/config";
import { Button } from "../ui/button";
import { TypographyH1 } from "../ui/typograpy";
import Image from "next/image";

const GoogleSignIn = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const auth = getAuth();

    const handleSignIn = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            const signedInUser = result.user;
            setUser(signedInUser);
            console.log(signedInUser);
        } catch (error) {
            setError(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            setError(error);
        }
    };

    // useEffect(() => {
    //     console.log(user)
    // }, [isError]);

    return (
        <div>
            {user ? (
                <div className="flex justify-center items-center flex-col gap-4">
                    <TypographyH1>Welcome, {user.displayName}</TypographyH1>
                    {/* <TypographyH1>Email: {user.email}</TypographyH1> */}
                    <Image src={user.photoURL} alt="User" width={100} height={100} />
                    <Button onClick={handleSignOut}>Logout</Button>
                </div>
            ) : (
                <Button onClick={handleSignIn}>Sign in with Google</Button>
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

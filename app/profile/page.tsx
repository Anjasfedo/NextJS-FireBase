"use client";

import UserInfo from "@/components/fragments/UserInfo";
import { Button } from "@/components/ui/button";
import { AuthProvider, useAuth } from "@/lib/context";
import React from "react";

const ProfilePage = () => {
    return (
        <AuthProvider>
            <header className="flex justify-evenly px-2 py-4"></header>
            <main>
                <App />
            </main>
            <footer></footer>
        </AuthProvider>
    );
};

const App = () => {
    const {user, handleLogin } = useAuth();

    return <>{user ? <UserInfo /> : <Button onClick={handleLogin}>Login</Button>}</>;
};

export default ProfilePage;

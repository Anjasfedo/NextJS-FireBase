"use client";

import { UserContext } from "@/lib/context";
import { Button } from "@/components/ui/button";
import UserInfo from "@/components/fragments/UserInfo";
import useLoginGoogle from "@/custom-hooks/useLoginGoogle";

export default function Home() {
    const [user, error, handleLogin, handleLogout] = useLoginGoogle();

    return (
        <>
            <header className="flex justify-evenly px-2 py-4"></header>
            <UserContext.Provider value={[user, handleLogout]}>
                <main className="flex flex-col items-center justify-between">
                    {user ? <UserInfo /> : <Button onClick={handleLogin}>Sign in with Google</Button>}
                </main>
            </UserContext.Provider>
            <footer></footer>
        </>
    );
}

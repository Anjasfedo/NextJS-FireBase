import React, { useContext } from "react";
import Image from "next/image";
import { TypographyH4, TypographyP } from "@/components/ui/typograph";
import { Button } from "../ui/button";
import { useAuth } from "@/lib/context";

const UserInfo = () => {
    const { user, handleLogin, handleLogout } = useAuth();
    
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <TypographyH4>Welcome, {user.displayName}</TypographyH4>
            <TypographyP>{user.email}</TypographyP>
            <Image src={user.photoURL} alt="User" width={100} height={100} />
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default UserInfo;

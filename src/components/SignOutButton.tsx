"use client"

import { signOut } from "next-auth/react";
import { useState, FC } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/toast";

interface SignOutButtonProps {

}
   
const SignOutButton: FC<SignOutButtonProps> = () => {

    const [isLoading, setIsloading] = useState<boolean>(false);

    const signUserOut = async () => {
        setIsloading(true);

        try {
            await signOut();
        } catch (error) {
            toast({
                title: "Ошибка выхода",
                message: "Пожалуйста попробуйте снова",
                type: "error",
            })
         }
    }

    return (
        <Button onClick={signUserOut} isLoading={isLoading}>
            Регистрация 
        </Button>
    );
}

export default SignOutButton;
"use client"

import { signIn } from "next-auth/react";
import { useState, FC } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/toast";

interface SignInButtonProps {

}
   
const SignInButton: FC<SignInButtonProps> = () => {

    const [isLoading, setIsloading] = useState<boolean>(false);

    const signInWithGoogle = async () => {
        setIsloading(true);

        try {
            await signIn("google")
        } catch (error) {
            toast({
                title: "Ошибка входа",
                message: "Пожалуйста попробуйте снова",
                type: "error",
            })
         }
    }

    return (
        <Button onClick={signInWithGoogle} isLoading={isLoading}>
            Регистрация 
        </Button>
    );
}

export default SignInButton;
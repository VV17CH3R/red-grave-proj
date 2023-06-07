"use client"

import { useTheme } from "next-themes";
import { FC } from "react";
import Icons from "./Icons";
import Button from "./ui/Button";
import { DropdownMenuContent, DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "./ui/DropdownMenu";

interface ThemeToggleProps { }

const ThemeToggle: FC<ThemeToggleProps> = ({ }) => {

    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                    <Icons.Sun onClick={() => setTheme("dark")} className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
                    <Icons.Moon onClick={() => setTheme("light")} className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
                    <span className="sr-only">Сменить тему</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' forceMount>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Icons.Sun className='mr-2 h-4 w-4' />
                    <span>Светлая</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Icons.Moon className='mr-2 h-4 w-4' />
                    <span>Темная</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <Icons.Laptop className='mr-2 h-4 w-4' />
                    <span>Системная</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ThemeToggle;
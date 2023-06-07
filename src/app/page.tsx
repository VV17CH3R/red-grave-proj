import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Электронный органайзер - Главная",
  description: "Бесплатное приложение для заметок",
}

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading size="lg" className="z-20 three-d text-black  dark:text-light-gold">
            Удобное приложение<br/>для размещения Ваших заметок.
          </LargeHeading>
          
          <Paragraph className="max-w-xl lg:text-left ">
            Благодаря органайзеру созданному VV17CH3R,<br/>
            Вы можете легко размещать свои заметки в этом приложении<br/>
            комментируя их между строк.<br/>{" "} 
            <Link href="/login" className="underline underline-offset-2 text-black dark:text-light-gold">
              КЛЮЧ К СЕРВЕРУ
            </Link>
            .
          </Paragraph>
          <div className="z-10 relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image 
              alt="Главное изображение сайта"
              priority
              className="img-shadow"
              src="/titleImage.png"
              quality={100}
              style={{objectFit: "contain"}}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import DocumentationTabs from "@/components/DocumentationTabs";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Metadata } from "next";
import { FC } from "react";
import { Laugh } from "lucide-react";

export const metadata: Metadata = {
    title: "Электронный органайзер - О приложении",
    description: "Бесплатное приложение для записей"
}

const page: FC = () => {
    return ( 
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-6">
                <LargeHeading> 
                    Это приложение сделанно при помощи пройденного 
                    курса Рыжей Гривой, который тупо списывал. <span className="flex items-center"> А я нормально шарю &nbsp; <Laugh /><Laugh /><Laugh /> </span>
                </LargeHeading>
                <Paragraph>
                    api/v1/organizer
                </Paragraph>
                <DocumentationTabs />
            </div>
        </div>
     );
}
 
export default page;
import MyImage01 from "@/components/image/image 1.png";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import MyImage02 from "@/components/image/image 2.png";
import MyImage03 from "@/components/image/image 3.png";
import MyImage04 from "@/components/image/image 4.png";
import MyImage05 from "@/components/image/image 5.png";
import MyImage06 from "@/components/image/image 6.png";
import MyImage07 from "@/components/image/image 7.png";
import MyImage08 from "@/components/image/image 8.png";
import MyImage09 from "@/components/image/image 9.png";
import MyImage10 from "@/components/image/image 10.png";
import MyImage11 from "@/components/image/image 11.png";
import MyImage12 from "@/components/image/image 12.png";
import MyImage13 from "@/components/image/image 13.png";
import MyImage14 from "@/components/image/image 14.png";
import MyImage15 from "@/components/image/image 15.png";
import MyImage16 from "@/components/image/image 16.png";
import MyImage17 from "@/components/image/image 17.png";
import MyImage18 from "@/components/image/image 18.png";
import { FlameKindling } from "lucide-react";

const Skill = () => {
  return (
    <div>
      <div className="container">
        <div className="my-0 w-[82px] mt-3 lg:ml-[15%]">
          <Link href="/skill">
            <Badge>
              <FlameKindling width="18px" />
              Skill
            </Badge>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-6 max-w-[800px] mx-auto my-7 mb-5">
          <h1 className="text-[20px] font-bold border-b-4 border-blue-500">
            My Technical Experience/Skills
          </h1>
          <p>
            Currently i am a fresher and i have a solid understand of HTML5,
            CSS3, JS, TS and React, including responsive design principles. I
            specialize in building web applications and sites using Javascript,
            Typescript, React, Nextjs & Node.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 max-w-[800px] mx-auto my-0">
          <div className="flex flex-col justify-center  items-start gap-6">
            <h1 className="text-[20px] font-bold border-b-4 border-blue-500">
              Programming Languages
            </h1>
            <div className="image flex justify-center flex-wrap items-center gap-6 ">
              <Image
                src={MyImage01.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage02.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage03.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage04.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage06.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage07.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage05.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage08.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage09.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-6 mb-5">
            <h1 className="text-[20px] font-bold border-b-4 border-blue-500">
              Framework/Libraries and Version Control
            </h1>
            <div className="image flex justify-center flex-wrap items-center gap-6 ">
              <Image
                src={MyImage10.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage11.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage12.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage13.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage14.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage15.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage16.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage17.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
              <Image
                src={MyImage18.src}
                alt="programming languages images"
                width={25}
                height={25}
                className=" w-[30px] md:w-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

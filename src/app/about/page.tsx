import { Badge } from "@/components/ui/badge";
import {
  UsersRound,
  Dna,
  Earth,
  Languages,
  PlayIcon,
  BookHeadphones,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const value = [
    "Coding",
    "Playing games",
    "Watching anime",
    "Blog writing",
    "Creating cool projects",
  ];
  const Value = [
    "UX Research",
    "Interaction Design",
    "Adobe Creative Suite",
    "Marketing Strategy",
    "Figma & Skecth",
  ];

  return (
    <div className="container mx-auto my-0">
      <div className="text">
        <div className="my-0 w-[120px] mt-3 lg:ml-[15%]">
          <Link href="/about">
            <Badge>
              <UsersRound width="20px" />
              About Us
            </Badge>
          </Link>
        </div>
        <div className="flex flex-col w-full max-w-[1200px] justify-center items-start gap-4 mx-auto my-0 mt-5">
          <h1 className="font-bold text-[20px]">
            Software Engineer And Web Developer, Based In India.
          </h1>
          <p>
            I possess a wide range of skills in React.Js, HTML, CSS, and
            JavaScript, as well as Nextjs. My specialization lies in UI/UX
            design, where I demonstrate exceptional attention to detail and a
            talent for crafting visually captivating and intuitive interfaces.
            Eager to embark on my tech adventure, I bring not just skills, but a
            creative mindset. Ready to roll up my sleeves, I&apos;m here to
            collaborate and breathe life into your ideas.
            <br />
            <br />
            Let's turn the ordinary into extraordinary! 🚀🎨
          </p>
        </div>
        <div className="flex justify-center items-center mt-5 pt-5">
          <div className="flex justify-center items-start flex-col">
            <div className="flex justify-center items-start gap-3">
              <div className="border-b-[2px] pb-4 px-4 border-blue-600">
                <PlayIcon />
              </div>
              <h1 className="font-bold text-[20px]">Hobbies</h1>
            </div>
            <ul className="flex flex-col justify-center items-center gap-7 mt-6 md:flex-row">
              {value.map((one, index) => {
                return (
                  <li key={index} className="flex justify-center items-center">
                    {one}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 w-full mx-auto my-0 mt-10 md:flex-row">
          <div className="flex justify-center items-start gap-3">
            <div className="border-b-[2px] pb-4 px-4 border-blue-600">
              <Languages />
            </div>
            <div>
              <h1 className="font-bold text-[20px]">Language</h1>
              <p>English, In</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3">
            <div className="border-b-[2px] pb-4 px-4 border-blue-600">
              <Earth />
            </div>
            <div>
              <h1 className="font-bold text-[20px]">Nationality</h1>
              <p>India</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3">
            <div className="border-b-[2px] pb-4 px-4 border-blue-600">
              <Dna />
            </div>
            <div>
              <h1 className="font-bold text-[20px]">Gender</h1>
              <p>Male</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-5 pt-5">
          <div className="flex justify-center items-start flex-col">
            <div className="flex justify-center items-start gap-3">
              <div className="border-b-[2px] pb-4 px-4 border-blue-600">
                <BookHeadphones />
              </div>
              <h1 className="font-bold text-[20px]">Interest</h1>
            </div>
            <ul className="flex flex-col justify-center items-center gap-7 mt-6 md:flex-row">
              {Value.map((one, index) => {
                return (
                  <li key={index} className="flex justify-center items-center">
                    {one}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

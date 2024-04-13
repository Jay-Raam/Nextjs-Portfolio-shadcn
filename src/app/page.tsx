"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { HomeIcon, Twitter, Instagram, Rss, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import MyImage01 from "@/components/image/m2.webp";
import Link from "next/link";
import Image from "next/image";

const occupations = [
  "Freelancer",
  "Blogger",
  "Gamer",
  "Writer",
  "Student",
  "Self learner",
];

export default function Home() {
  const [currentOccupationIndex, setCurrentOccupationIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentOccupationIndex(
        (prevIndex) => (prevIndex + 1) % occupations.length
      );
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="container mx-auto px-4 pb-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="my-0 w-[92px] mt-3 lg:ml-[15%]">
        <Link href="/">
          <Badge>
            <HomeIcon width="18px" />
            Home
          </Badge>
        </Link>
      </div>
      <div className="flex flex-col justify-center mx-auto my-0 items-center gap-8 max-w-[800px] mt-6 lg:flex-row lg:gap-4">
        <div className="flex w-full flex-col justify-center items-center gap-5 lg:w-[50%]">
          <p className="text-2xl sm:text-3xl">I&apos;m</p>
          <h1 className="font-bold sm:text-5xl lg:text-[30px]">Jayasriraam</h1>
          <p className="fade-occupations lg:text-xl sm:text-3xl text-center">
            Front-End Developer & <br />
            <span className="text-blue-600 font-extrabold sm:text-4xl lg:text-[25px]">
              {occupations[currentOccupationIndex]}
            </span>
          </p>
          <div className="flex justify-center items-center gap-5">
            <Link href="https://twitter.com/ivan_jayram">
              <Button
                variant="ghost"
                className="w-[52px] hover:text-white hover:bg-blue-500"
              >
                <Twitter />
              </Button>
            </Link>
            <Link href="https://www.instagram.com/_ivanjay_/">
              <Button
                variant="ghost"
                className="w-[52px] hover:text-white hover:bg-rose-400"
              >
                <Instagram />
              </Button>
            </Link>
            <Link href="https://jayasriraam.blogspot.com/">
              <Button
                variant="ghost"
                className="w-[52px] hover:text-white hover:bg-orange-300"
              >
                <Rss />
              </Button>
            </Link>
            <Link href="https://github.com/Jay-Raam">
              <Button
                variant="ghost"
                className="w-[52px] hover:text-white hover:bg-black"
              >
                <Github />
              </Button>
            </Link>
          </div>

          <Link href="https://www.linkedin.com/in/jayasriraam">
            <Button>Read More...</Button>
          </Link>
        </div>
        <div className="image w-full flex justify-center items-center lg:w-[50%]">
          <Image
            src={MyImage01.src}
            alt="modal"
            width={300}
            height={200}
            className="flex justify-center items-center w-full h-auto lg:w-[300px]"
          />
        </div>
      </div>
      <style jsx>{`
        .fade-occupations span {
          transition: opacity 0.3s ease-in-out;
        }

        .fade-occupations span.hide {
          opacity: 0;
        }
      `}</style>
    </main>
  );
}

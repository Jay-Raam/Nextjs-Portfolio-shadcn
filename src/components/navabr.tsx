import { Home, UsersRound, LampDesk, Brain, Ship } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import "./styles.css";

export default function Navbar() {
  return (
    <>
      <section className="navbar01">
        <div className="nav w-[300px] sm:w-[320px] mx-auto my-0 mt-7 p-3 border rounded-full">
          <nav className="flex justify-center items-center">
            <ul className="flex justify-center items-center gap-5">
              <li>
                <Link href="/">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Home />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Home</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/about">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <UsersRound />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>About Us</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/skill">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Brain />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Skill</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/project">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <LampDesk />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/contact">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Ship />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Contact Us</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

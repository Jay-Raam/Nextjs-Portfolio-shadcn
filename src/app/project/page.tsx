import { Badge } from "@/components/ui/badge";
import { Gitlab, ChevronRight } from "lucide-react";
import MyImage01 from "@/components/image/m7.png";
import MyImage02 from "@/components/image/m8.png";
import MyImage03 from "@/components/image/m9.png";
import MyImage04 from "@/components/image/m10.png";
import MyImage05 from "@/components/image/m11.png";
import MyImage06 from "@/components/image/m12.png";
import Image from "next/image";
import {
  Card,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./style.css";

const Project = () => {
  return (
    <div className="container">
      <div className="my-0 w-[92px] mt-3 lg:ml-[15%]">
        <Link href="/project">
          <Badge>
            <Gitlab width="18px" />
            Project
          </Badge>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 max-w-[900px] mx-auto my-0 mt-7 mb-3">
        <div className="image flex flex-col justify-center items-center gap-6">
          <Card>
            <Image
              src={MyImage03.src}
              alt="project sample image"
              width={1080}
              height={1080}
              className="main-001"
            />
            <CardTitle>Park Adventure...</CardTitle>
            <CardDescription>It's a simple site for adventure</CardDescription>
            <CardFooter>
              <Link href="/project">
                <Button>
                  Read More
                  <ChevronRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <Image
              src={MyImage02.src}
              alt="project sample image"
              width={400}
              height={300}
              className="main-001"
            />
            <CardTitle>Famous World...</CardTitle>
            <CardDescription>
              It's a simple site for dress store
            </CardDescription>
            <CardFooter>
              <Link href="/project">
                <Button>
                  Read More
                  <ChevronRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <Image
              src={MyImage05.src}
              alt="project sample image"
              width={1080}
              height={1920}
              className="main-001"
            />
            <CardTitle>Aligners...</CardTitle>
            <CardDescription>
              It's a simple site for dental hospital
            </CardDescription>
            <CardFooter>
              <Link href="/project">
                <Button>
                  Read More
                  <ChevronRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="image flex flex-col justify-center items-center gap-6">
          <Card>
            <Image
              src={MyImage06.src}
              alt="project sample image"
              width={1080}
              height={1920}
              className="main-001"
            />
            <CardTitle>Portfolio...</CardTitle>
            <CardDescription>It's a simple site for Portfolio</CardDescription>
            <CardFooter>
              <Link href="/project">
                <Button>
                  Read More
                  <ChevronRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <Image
              src={MyImage01.src}
              alt="project sample image"
              width={400}
              height={300}
              className="main-001"
            />
            <CardTitle>D-Mart...</CardTitle>
            <CardDescription>It's a simple site for Store</CardDescription>
            <CardFooter>
              <Link href="/project">
                <Button>
                  Read More
                  <ChevronRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <Image
              src={MyImage04.src}
              alt="project sample image"
              width={1080}
              height={1080}
              className="main-001"
            />
            <CardTitle>Music...</CardTitle>
            <CardDescription>It's a simple site for Music band</CardDescription>
            <CardFooter>
              <Link href="/project">
                <Button>
                  Read More
                  <ChevronRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Project;

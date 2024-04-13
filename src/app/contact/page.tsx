import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <div className="container">
      <div className="my-0 w-[120px] mt-3 lg:ml-[15%]">
        <Link href="/contact">
          <Badge>
            <PhoneCall width="18px" />
            Contact Us
          </Badge>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 max-w-[900px] mx-auto my-0 mt-5">
        <div className="map lg:w-[50%] sm:w-[100%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d108806.16836691592!2d77.59005535976436!3d10.064520623086382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAzJzE4LjIiTiA3N8KwMzYnMDMuMyJF!5e0!3m2!1sen!2sin!4v1712986016236!5m2!1sen!2sin"
            allowFullScreen
            className="w-full h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:w-[50%] flex flex-col gap-5 justify-center items-center sm:w-[100%]">
          <h1 className="font-bold text-[18px]">Get in Touch...</h1>
          <Link href="/contact" className="hover:underline hover:text-blue-500">
            Jayasriraam.job@gmail.com
          </Link>
          <Link
            href="https://www.instagram.com/_ivanjay_/"
            className="hover:underline hover:text-blue-500"
          >
            _Ivanjay_
          </Link>
          <Link
            href="/contacts"
            className="hover:underline hover:text-blue-500"
          >
            +91 9790161669
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

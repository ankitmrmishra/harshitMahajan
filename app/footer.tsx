import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#F9F2E3] text-[#64615B]  md:px-[24rem] px-5 py-4   ">
      <div className="pt-8 space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 max-w-3xl  ">
        <h2 className="text-2xl font-semibold tracking-tight text-black">
          Connect!
        </h2>
        <p>Open for collaborations, opportunities, and coffee chats!</p>

        <div className="space-y-4">
          <p>
            You can reach me via email at →{" "}
            <Link
              href="mailto:wh0sumit.work@gmail.com"
              className="text-green-600 hover:underline"
            >
              ankitmishra@gmail.com
            </Link>
          </p>

          <p>Or you can find me on socials:</p>

          <div className="flex gap-4">
            <Link
              href="https://twitter.com"
              className="text-green-600 hover:underline inline-flex items-center gap-1"
              target="_blank"
            >
              Twitter <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/"
              className="text-green-600 hover:underline inline-flex items-center gap-1"
              target="_blank"
            >
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com"
              className="text-green-600 hover:underline inline-flex items-center gap-1"
              target="_blank"
            >
              GitHub <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

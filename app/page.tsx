"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";

const PoppinsFont = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className={` ${PoppinsFont.className} leading-6 tracking-wide p-3 `}>
      <section className="Intro container mx-auto md:px-2 md:pt-20 pt-16  text-[#64615B] max-w-3xl space-y-8  py-10">
        <h1 className="text-3xl font-bold text-black">Harshit Mahajan</h1>
        <p className="max-w-[30rem] md:text-lg text-base">
          A generalist with a little bit of interest in everything But mostly →
          Growth, Business, and Startups.
        </p>
        <p className=" md:text-lg text-base">
          I have focused on building India&apos;s biggest student communities,
          Scale them from 4 to 6-digit numbers actively.
        </p>
        <p className=" md:text-lg text-base">
          Currently building Podcast circle, helping creators and brands create
          a presence online.
        </p>
        <p className="md:text-lg text-base">
          Previously built <span className="text-red-600">Hiveschool</span> ,
          India&apos;s first sales school &{" "}
          <span className="text-blue-600">BlueLearn</span> India&apos;s largest
          student community.
        </p>
        <p className="md:text-lg text-base">
          I’m the founder of <span className="text-green-600">CoFounds</span> ,
          a platform connecting the right talent with the right teams, making
          the hiring process smoother and more efficient!{" "}
          <span className="italic">
            {" "}
            (I am currently running things manually and building the platform
            alongside.)
          </span>
        </p>
      </section>
      <div className=" py-3 md:mx-[23rem] border-b border-black ">
        <Link
          className="hover:text-green-600 "
          href="https://x.com/HarshitMahajan_"
          target="_blank"
        >
          <span className="text-xl  text-green-700">@harshit</span>
        </Link>
      </div>
    </div>
  );
}

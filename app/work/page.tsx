"use client";

import Link from "next/link";
import { ArrowLeft, Dot, Pointer } from "lucide-react";
import { Roboto } from "next/font/google";
import GoBack from "../GoBack";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string[];
}

interface ExperienceSection {
  title: string;
  subtitle: string;
  experiences: {
    role: string;
    company: string;
    date: string;
    achievements: string[];
  }[];
}

const experienceData: ExperienceSection[] = [
  {
    title: "Recent Work Experience",
    subtitle: "My most recent professional experience",
    experiences: [
      {
        role: "Product Engineer",
        company: "Merlin AI",
        date: "NOV 2024 ~ Present",
        achievements: [
          "Recently joined Merlin AI as a Product Engineer to work on their AI-powered platform",
        ],
      },
      {
        role: "Software Engineer",
        company: "DevDham",
        date: "Jan 2024 ~ Oct 2024",
        achievements: [
          "Worked as a solo frontend (web) engineer creating a complete web-based platform",
          "Integrated product analytics tools for better understanding of user behavior",
          "Built and shipped a complex cart-based system with\ncustomization features and Razorpay integration",
          "Implemented internationalization and localization features",
          "Improved platform performance, increasing Lighthouse score from 40% to 80-90%",
          "Led migration from EJS to NextJS 14, reducing\nbuild times by 3x and deployment speed by 2x",
          "Implemented TypeScript and React Hooks to improve code maintainability",
        ],
      },
    ],
  },
  {
    title: "Startup Experience",
    subtitle: "Previous startup and founding experience",
    experiences: [
      {
        role: "Founder",
        company: "Rightfit.so",
        date: "Aug 2024 ~ Present",
        achievements: [
          "Thinking jobs differently- A platform for finding the right candidate for the right job",
        ],
      },
    ],
  },
];

export default function WorkPage() {
  return (
    <div className={`bg-[#F9F2E3] min-h-screen p-5 ${roboto.className}`}>
      <GoBack />
      <div className="max-w-3xl mx-auto pt-20">
        {experienceData.map((section, index) => (
          <section key={index} className="mt-12 border-b border-black py-4">
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600 mb-8">{section.subtitle}</p>

            <div className="space-y-12">
              {section.experiences.map((exp, expIndex) => (
                <div key={expIndex} className="relative w-full">
                  <div className="flex justify-between items-start mb-4 group">
                    <div className="w-full">
                      <h3 className="text-xl font-bold hover:text-green-600">
                        {exp.role}
                      </h3>
                      <div className="flex justify-between align-middle items-center w-full ">
                        <p className="text-gray-600">{exp.company}</p>
                        <span className="text-black text-sm font-bold group-hover:text-green-600">
                          {exp.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-gray-700 leading-relaxed flex justify-start align-middle items-center"
                      >
                        <Dot className="text-black size-8" /> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

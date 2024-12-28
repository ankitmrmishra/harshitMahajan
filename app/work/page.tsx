"use client";

import { Dot } from "lucide-react";
import { Roboto } from "next/font/google";
import GoBack from "../GoBack";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

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
        role: "Founder's Office: Growth & Strategic Partnerships",
        company: "Hive School (India's First Sales School)",
        date: "2024-Present",
        achievements: [
          "Scaled ARR from 12lakhs to 32lakhs in 1 year by working with the founder directly on partner acquisition and retention to drive revenue growth.",
          "Streamlined all process for the Recruiter Partnerships team – TOFU Outreach, Sales Operations, Client acquisition and retention.",
          "Standardized placement preparation modules to optimize placements rate by 30% for the cohort by working with the academic teams.",
          "Led college activation to partner with 25+ UG colleges.",
        ],
      },
      {
        role: "Intern: Growth & Strategy",
        company:
          "Blue learn (College Student focused, India's biggest student community)",
        date: "2023–24",
        achievements: [
          "Led the global community expansion initiative to scale the community in the Indian market and build a community in the market.",
          "Led the GTM and expansion strategy to scale Indian community to 30,000+ active users on the newly launched app.",
          "Activated B2B channels (college clubs) to increase user acquisition rate by 125% across (Jun-Aug) for Indian market.",
          "Led Brand's YouTube resulting 10% subscriber increase in a span of few months.",
        ],
      },
    ],
  },
  {
    title: "Leadership Experience",
    subtitle: "Roles in student organizations and communities",
    experiences: [
      {
        role: "President",
        company: "Tech Amigos",
        date: "2023-24",
        achievements: [
          "Leading the club with setting up processes for a team of 22.",
          "Doing one ever every 3 days, with guests from pan India taking session one various technologies and products.",
          "Launching a Red-Bull powered gaming arena and club.",
        ],
      },
      {
        role: "Campus Ambassador",
        company: "Geeks for Geeks",
        date: "2022-24",
        achievements: [
          "Leading the campus community and engagement activities.",
          "Building platforms and conducting various events for the same in online and offline mode.",
        ],
      },
    ],
  },
  {
    title: "Founder Experience",
    subtitle: "Entrepreneurial ventures and initiatives",
    experiences: [
      {
        role: "Founder",
        company:
          "Build Arc Labs (Building an early-stage community led start-up)",
        date: "2024",
        achievements: [
          "Aim is to build one of India's Top hacker house on an asset-lite model.",
          "GTM: Launching 2 months personal mentorship led Startup Launchpad Program at a ticket size of 25k/user for a cohort of 30 folks.",
          "Collaborated with 5 UG colleges and delivered workshops in 3 colleges collectively catering to 500+ students in the first year.",
          "Working on on-boarding Industry Mentors as a part of the Founders Pod Community through cold outreach and leveraging existing networks.",
        ],
      },
    ],
  },
];

export default function WorkPage() {
  return (
    <div className={` min-h-screen p-3 ${roboto.className}`}>
      <GoBack />
      <div className="max-w-3xl mx-auto md:pt-20">
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
                        className="text-gray-700 leading-relaxed flex justify-start  align-top items-start"
                      >
                        <Dot className="text-black max-w-8 min-w-8 max-h-8 min-h-8" />{" "}
                        {achievement}
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

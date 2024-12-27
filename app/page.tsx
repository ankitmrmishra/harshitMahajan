"use client";

import { Roboto } from "next/font/google";

const PoppinsFont = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div
      className={`bg-[#F9F2E3] min-h-screen p-5 ${PoppinsFont.className} leading-6 tracking-wide`}
    >
      <section className="Intro container mx-auto md:px-4 pt-24  text-[#64615B] max-w-3xl space-y-8 border-b border-black py-10">
        <h1 className="text-3xl font-bold text-black">Harshit Mahajan</h1>
        <p className="max-w-[25rem] md:text-lg text-base">
          Sharing my interest in a little bit of everything, but mostly →
          frontend, marketing and startups.
        </p>
        <p className=" md:text-lg text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minima
          dolore, non consequatur ab eligendi. Error aperiam impedit neque
          asperiores illo sequi nobis optio perspiciatis doloribus temporibus!
          Quam reprehenderit accusantium provident. Sit esse perferendis cum
          labore, voluptate voluptates inventore debitis.
        </p>
        <p className=" md:text-lg text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente
          reprehenderit dolore excepturi assumenda error. Voluptate cumque harum
          quibusdam incidunt.
        </p>
        <p className="md:text-lg text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illo
          quisquam reiciendis, officia quibusdam quam adipisci aspernatur ullam
          sapiente corrupti accusamus totam incidunt repellendus maxime numquam
          recusandae sequi neque similique modi voluptas iure sed, quia nemo
          pariatur. Praesentium temporibus velit tempore, expedita culpa aliquid
          dolorum molestiae obcaecati magni sunt asperiores.
        </p>
        <p className="md:text-lg text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quibusdam!
        </p>
        <p className="md:text-lg text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo
          saepe dolor dolorem aliquid praesentium!
        </p>
      </section>
    </div>
  );
}

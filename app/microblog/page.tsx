import React from "react";
import GoBack from "../GoBack";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const page = () => {
  return (
    <div className={`bg-[#F9F2E3] min-h-screen p-5 ${roboto.className}`}>
      <GoBack />
      <div className="max-w-3xl mx-auto md:pt-20 text-[#64615B]">
        <section className="mt-12 border-b border-black py-4 ">
          <h2 className="text-2xl font-semibold mb-2 text-black">MicroBlog</h2>
          <div className="flex md:flex-row flex-col text-start justify-between align-middle md:items-center items-start gap-2  mb-8">
            <p className="text-gray-600 ">
              I write about engineering, startup, and life.
            </p>
            <span className="text-[#64615B]">Total — 0 posts</span>
          </div>
          {/* <div className=" md:w-[50rem] ">
            <div className="grid md:grid-cols-2 grid-cols-1  gap-8 w-full ">
              {blogs.map((blog, id) => (
                <Blog key={id} {...blog} />
              ))}
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default page;

// interface Blogprops {
//   headline: string;
//   blog: string;
//   Date: string;
// }

// const Blog: React.FC<Blogprops> = ({ headline, blog, Date }) => {
//   return (
//     <div className="bg-[#EDD9BB] rounded-2xl md:w-96 h-80 flex flex-col justify-between align-middle items-start  p-5">
//       <div className="flex flex-col justify-between align-middle items-start gap-2">
//         <span className="font-bold text-xl text-black ">{headline}</span>
//         <p className=" text-[#64615B] leading-7">{blog}</p>
//       </div>
//       <span className=" text-[#64615B] ">{Date}</span>
//     </div>
//   );
// };

// const blogs = [
//   {
//     headline: "Exploring the Future of Technology",
//     blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet augue vel purus cursus luctus non vitae justo. Phasellus id neque id velit dignissim luctus. In varius eros non vehicula scelerisque. Proin nec ex a turpis laoreet pharetra.",
//     Date: "2024-12-27",
//   },
//   {
//     headline: "The Art of Minimalism in Design",
//     blog: "Suspendisse potenti. Nulla facilisi. Cras tincidunt ligula in odio varius, et ultricies sapien vehicula. Vivamus dictum felis sit amet nulla facilisis, a fermentum erat fermentum. Fusce eget sapien a justo dictum porttitor nec eget lorem.",
//     Date: "2024-12-26",
//   },
//   {
//     headline: "Top Strategies for Productivity",
//     blog: "Curabitur ac purus eget eros suscipit egestas. Nulla non elit sit amet magna auctor accumsan sed ut justo. Integer dapibus tortor vel nulla malesuada tincidunt. Vestibulum sit amet tincidunt nunc. Sed volutpat dapibus eros, non faucibus elit fringilla ac.",
//     Date: "2024-12-25",
//   },
//   {
//     headline: "Harnessing the Power of AI",
//     blog: "Nam convallis eros in arcu viverra, non dapibus libero luctus. Morbi cursus neque quis libero tristique laoreet. Aliquam erat volutpat. Pellentesque sit amet est in turpis faucibus tincidunt a vel felis. Vestibulum eget dignissim augue.",
//     Date: "2024-12-24",
//   },
//   {
//     headline: "The Rise of Sustainable Practices",
//     blog: "Donec vel est nec lectus luctus elementum. Praesent cursus magna at lacus gravida, a fermentum ipsum sagittis. In fringilla lacinia lacus a mollis. Nam eget quam sit amet magna dapibus tincidunt. Vivamus non arcu vel eros pellentesque accumsan.",
//     Date: "2024-12-23",
//   },
// ];

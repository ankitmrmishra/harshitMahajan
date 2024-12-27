"use client";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

import { usePathname } from "next/navigation";
const nav = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Microblog", href: "/microblog" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 w-full text-gray-500 backdrop-blur-xl z-50">
      <nav className="container mx-auto md:px-10 px-4 py-4 flex justify-between items-center align-middle font-medium text-base">
        <div className="flex gap-6">
          {nav.map((items, id) => (
            <Link
              href={items.href}
              className={`hover:text-gray-900 transition-colors ${
                pathname === items.href ? "text-green-600" : ""
              }`}
            >
              {items.name}
            </Link>
          ))}
        </div>
        <div className="md:flex gap-4 hidden">
          <Link
            className="hover:text-green-600"
            href="https://twitter.com/wh0sumit"
            target="_blank"
          >
            <Twitter className="size-7" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            className="hover:text-green-600"
            href="https://linkedin.com/in/wh0sumit"
            target="_blank"
          >
            <Linkedin className="size-7" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            className="hover:text-green-600"
            href="https://github.com/wh0sumit"
            target="_blank"
          >
            <Github className="size-7" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

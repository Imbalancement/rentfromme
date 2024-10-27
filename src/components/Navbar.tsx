"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(targetId);

    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;

      setTimeout(() => {
        const offsetPosition = targetPosition - 120;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setMobileDrawerOpen(false);
      }, 100);
    }
  };

  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      <div className="container mx-auto flex items-center justify-between rounded-lg bg-black py-3">
        <div className="flex flex-shrink-0 items-center justify-between">
          <Image
            className="mr-2"
            src="/logo.png"
            width={60}
            height={30}
            alt="Logo"
          />
          <span className="text-sm tracking-tight text-white">Real ES</span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            {NAV_LINKS.map(
              (item, index) =>
                (!isMobile || item.title !== "Getting Started") && (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-sm text-white hover:text-neutral-500"
                      onClick={(e) => handleScroll(e, item.url.substring(1))}
                      scroll={false}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="hidden text-sm text-white lg:flex">
          <Button
            variant="outline"
            className="mr-2 bg-black"
            onClick={() => window.open("", "_blank")}
          >
            Pay Now
          </Button>
        </div>
        <div className="flex-col justify-end text-white md:flex lg:hidden">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div className="rounded-md bg-black lg:hidden">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map(
              (item, index) =>
                (!isMobile || item.title !== "Getting Started") && (
                  <li key={index} className="py-6">
                    <Link
                      href={item.url}
                      className="text-sm text-white hover:text-neutral-500"
                      onClick={(e) => handleScroll(e, item.url.substring(1))}
                      scroll={false}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
            )}
          </ul>
          <div className="flex items-center justify-center pb-8 lg:hidden">
            <Link
              href="_blank"
              className="mr-2 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
            >
              Make a Payment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

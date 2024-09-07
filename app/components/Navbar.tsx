"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { navLinks } from "../constants/constants";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownIndex, setMobileDropdownIndex] = useState<number | null>(
    null
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileDropdownClick = (index: number) => {
    setMobileDropdownIndex((prev) => (prev === index ? null : index));
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
      setMobileDropdownIndex(null);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // Handle touch events on mobile
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`top-0 z-50 sticky flex items-center justify-between px-1 py-2 md:px-20 md:pt-3 md:pb-1 shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            priority
            className="h-16 md:h-18 w-auto"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-x-14 mx-auto">
        {navLinks.map((item, index) => (
          <div key={index} className="relative group">
            {item.dropdown ? (
              <>
                <p className="text-primary font-semibold font-mono hover:opacity-50 cursor-pointer">
                  {item.name}
                </p>
                <div
                  className={`absolute left-0 mt-2 w-48 bg-primary text-primary font-mono shadow-lg rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-40`}
                >
                  {item.dropdown.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.path}
                      className="block px-4 py-2 hover:opacity-50 font-mono"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.path || "#"}
                className="text-primary font-semibold hover:opacity-50 cursor-pointer font-mono"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center gap-x-4 md:hidden">
        <button onClick={handleMobileMenuToggle} aria-label="Toggle menu">
          <CgMenuRight size={28} className="icon-primary" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

          <div
            ref={menuRef}
            className="fixed top-10 right-10 bg-primary rounded-xl shadow-xl z-50 p-4"
            style={{
              width: "calc(100% - 40px)",
              maxWidth: "calc(100% - 40px)",
              height: "auto",
              maxHeight: "calc(100% - 40px)",
            }}
          >
            <div className="flex flex-col relative">
              <button
                className="absolute top-4 right-4"
                onClick={handleMobileMenuToggle}
                aria-label="Close menu"
                style={{ zIndex: 1000 }}
              >
                <IoMdClose size={32} style={{ color: "#D0B870" }} />
              </button>
              <div className="mt-12">
                {navLinks.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.dropdown ? (
                      <>
                        <p
                          className="text-primary font-semibold font-mono py-2 cursor-pointer flex items-center hover:opacity-50"
                          onClick={() => handleMobileDropdownClick(index)}
                        >
                          {item.name}
                          {item.dropdown && item.dropdown.length > 0 && (
                            <FaArrowRight
                              size={15}
                              className={`ml-2 transition-transform ${
                                mobileDropdownIndex === index
                                  ? "rotate-90"
                                  : "rotate-0"
                              }`}
                            />
                          )}
                        </p>
                        {mobileDropdownIndex === index && (
                          <div className="mt-2 rounded-lg shadow-sm z-50">
                            {item.dropdown.map((link, linkIndex) => (
                              <Link
                                key={linkIndex}
                                href={link.path}
                                className="block px-4 py-2 text-primary font-mono hover:opacity-50"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileDropdownIndex(null);
                                }}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className="block text-primary font-semibold py-2 cursor-pointer font-mono hover:opacity-50"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setMobileDropdownIndex(null);
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

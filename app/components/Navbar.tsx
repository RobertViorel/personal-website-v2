"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa'; // Import React Icons

const navLinks = [
  { name: "Product", dropdown: ["Features", "Integrations", "Pricing"] },
  { name: "Company", dropdown: ["About", "Careers", "Blog"] },
  { name: "Resources", dropdown: ["Docs", "API Reference", "Community"] },
  { name: "Contact", dropdown: [] },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownIndex, setMobileDropdownIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileDropdownClick = (index: number) => {
    setMobileDropdownIndex((prev) => (prev === index ? null : index));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
      setMobileDropdownIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="top-0 z-50 relative flex items-center justify-between px-4 py-4 lg:px-20 lg:py-6 bg-white shadow-md">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="h-8 lg:h-10" />
      </div>

      <div className="hidden lg:flex items-center gap-x-8 ml-auto">
        {navLinks.map((item, index) => (
          <div key={index} className="relative group">
            <p className="text-gray-900 font-medium hover:text-gray-600 cursor-pointer">
              {item.name}
            </p>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}
            >
              {item.dropdown.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-x-4 lg:hidden">
        <button
          className="text-gray-900"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={26} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          {/* Blurred background */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className="fixed top-10 right-10 bg-white rounded-xl shadow-xl z-50 p-4"
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
                <FaTimes size={32} />
              </button>
              <div className="mt-12">
                {navLinks.map((item, index) => (
                  <div key={index} className="relative">
                    <p
                      className="text-gray-900 font-medium py-2 cursor-pointer flex items-center"
                      onClick={() => handleMobileDropdownClick(index)}
                    >
                      {item.name}
                      {item.dropdown.length > 0 && (
                        <FaArrowRight
                          size={15}
                          className={`ml-2 transition-transform ${
                            mobileDropdownIndex === index ? 'rotate-90' : 'rotate-0'
                          }`}
                        />
                      )}
                    </p>
                    {mobileDropdownIndex === index && (
                      <div className="mt-2 bg-gray-100 rounded-lg shadow-sm">
                        {item.dropdown.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href="#"
                            className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileDropdownIndex(null);
                            }}
                          >
                            {link}
                          </a>
                        ))}
                      </div>
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

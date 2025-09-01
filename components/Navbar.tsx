"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import "../lib/i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest(".mobile-menu-container")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const languages = [
    { code: "UZ", name: "O'zbekcha" },
    { code: "RU", name: "Русский" },
    { code: "ENG", name: "English" },
  ];

  const handleLanguageChange = (language: "UZ" | "RU" | "ENG") => {
    i18n.changeLanguage(language);
    setIsLanguageDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="bg-white shadow-[0px_4px_15px_0px_rgba(0,_0,_0,_0.12)] sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-[70px] sm:h-[80px] lg:h-[90px] px-4 lg:px-0">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/logo.svg"
              alt="Washcam Logo"
              width={56}
              height={44}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-xl sm:text-2xl text-[#152349] font-sans font-black">
              WASHCAM
            </span>
          </div>
          <div className="w-8 h-8"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-[0px_4px_15px_0px_rgba(0,_0,_0,_0.12)] sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-[70px] sm:h-[80px] lg:h-[90px] px-4 lg:px-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Image
            src="/logo.svg"
            alt="Washcam Logo"
            width={56}
            height={44}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="text-xl sm:text-2xl text-[#152349] font-sans font-black">
            WASHCAM
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-[#000000] hover:text-[#1E3A8A] transition-colors duration-200 font-medium font-sans min-w-[80px] text-center"
          >
            {t("nav.asosiy")}
          </Link>
          <Link
            href="/xizmatlar"
            className="text-[#000000] hover:text-[#1E3A8A] transition-colors duration-200 font-medium font-sans min-w-[80px] text-center"
          >
            {t("nav.xizmatlar")}
          </Link>
          <Link
            href="/aloqa"
            className="text-[#000000] hover:text-[#1E3A8A] transition-colors duration-200 font-medium font-sans min-w-[80px] text-center"
          >
            {t("nav.aloqa")}
          </Link>
          <Link
            href="/biz-haqimizda"
            className="text-[#000000] hover:text-[#1E3A8A] transition-colors duration-200 font-medium font-sans min-w-[100px] text-center"
          >
            {t("nav.bizHaqimizda")}
          </Link>
        </div>

        {/* Desktop Language Switcher and Download Button */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200 font-sans min-w-[60px] justify-center"
            >
              <span className="text-[#000000] font-medium">
                {i18n.language}
              </span>
              <IoChevronDown
                className={`w-4 h-4 text-[#000000] transition-transform duration-200 ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isLanguageDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() =>
                      handleLanguageChange(language.code as "UZ" | "RU" | "ENG")
                    }
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 font-sans ${
                      i18n.language === language.code
                        ? "bg-[#1E3A8A] text-white"
                        : "text-[#000000]"
                    }`}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Download Button */}
          <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 font-sans min-w-[140px] text-center">
            {t("nav.yuklabOlish")}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-[#152349] hover:text-[#1E3A8A] transition-colors duration-200 touch-manipulation"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg mobile-menu-container">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-[#000000] hover:text-[#1E3A8A] transition-colors duration-200 font-medium font-sans py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.asosiy")}
              </Link>
              <Link
                href="/xizmatlar"
                className="block text-[#000000] hover:text-[#1E3A8A] transition-colors duration-200 font-medium font-sans py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.xizmatlar")}
              </Link>
              <Link
                href="/aloqa"
                className="block text-[#000000] hover:text-[#1E3A8A] transition-colors duration-200 font-medium font-sans py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.aloqa")}
              </Link>
              <Link
                href="/biz-haqimizda"
                className="block text-[#000000] hover:text-[#1E3A8A] transition-colors duration-200 font-medium font-sans py-3 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.bizHaqimizda")}
              </Link>
            </div>

            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Til:</span>
                <div className="flex space-x-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        handleLanguageChange(
                          language.code as "UZ" | "RU" | "ENG"
                        );
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                        i18n.language === language.code
                          ? "bg-[#1E3A8A] text-white"
                          : "bg-gray-100 text-[#000000] hover:bg-gray-200"
                      }`}
                    >
                      {language.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Download Button */}
            <div className="pt-4">
              <button className="w-full bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 font-sans touch-manipulation">
                {t("nav.yuklabOlish")}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

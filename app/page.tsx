"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../lib/i18n";

export default function Home() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to render title with highlighted "Washcam"
  const renderTitle = () => {
    const title = mounted
      ? t("hero.title")
      : "Avtomobil yuvish jarayonini kuzatishning eng qulay usuli – Washcam!";
    const parts = title.split("Washcam");

    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="text-[#1E3A8A]">Washcam</span>
          {parts[1]}
        </>
      );
    }

    return title;
  };

  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-0 pt-8 sm:pt-16 lg:pt-[170px] pb-12 lg:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="relative">
              <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#152349] leading-tight">
                {renderTitle()}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {mounted
                ? t("hero.description")
                : "360° kamera orqali mashinangizni real vaqt rejimida kuzating. Washcam bilan avtomobilingiz yuvilishini jonli ko'ring!"}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#1E3A8A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center space-x-3 touch-manipulation">
                <FaGooglePlay className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">
                  {mounted
                    ? t("hero.googlePlay")
                    : "Google Play dan yuklab olish"}
                </span>
              </button>
              <button className="bg-[#1E3A8A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center space-x-3 touch-manipulation">
                <FaApple className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">
                  {mounted ? t("hero.appStore") : "App Store dan yuklab olish"}
                </span>
              </button>
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/qrcode.png"
                  alt="QR Code"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] object-contain"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-medium text-[#152349] text-base sm:text-lg">
                  {mounted ? t("hero.qrText") : "QR kodni skanerlang"}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  {mounted ? t("hero.qrSubtext") : "va ilovani yuklab oling"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Car Image */}
          <div className="relative order-1 lg:order-2">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[549px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/car.png"
                  alt="Car"
                  width={970}
                  height={549}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-bounce z-20"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full animate-pulse z-20"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 lg:px-0 pt-16 sm:pt-20 lg:pt-[200px] pb-12 lg:pb-20 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#152349] mb-4">
            {mounted ? t("features.title") : "Nega Washcam ni tanlash kerak?"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {mounted
              ? t("features.subtitle")
              : "Avtomobilingiz yuvilishini kuzatishning eng zamonaviy usuli"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:scale-95 touch-manipulation">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-[#1E3A8A]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3 sm:mb-4 text-center">
              {mounted ? t("features.feature1.title") : "360° Kamera kuzatuvi"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
              {mounted
                ? t("features.feature1.description")
                : "Avtomobilingizning har bir burchagini jonli ko'ring"}
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:scale-95 touch-manipulation">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3 sm:mb-4 text-center">
              {mounted ? t("features.feature2.title") : "Xavfsizlik"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
              {mounted
                ? t("features.feature2.description")
                : "Avtomobilingiz xavfsizligi kafolatlangan"}
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:scale-95 touch-manipulation sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3 sm:mb-4 text-center">
              {mounted ? t("features.feature3.title") : "Tezkor xizmat"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
              {mounted
                ? t("features.feature3.description")
                : "Tez va sifatli yuvish xizmati"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

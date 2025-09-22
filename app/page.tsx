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

  const renderTitle = () => {
    const title = mounted
      ? t("hero.title")
      : "Avtomobil yuvish jarayonini kuzatishning eng qulay usuli – Washcam";
    const parts = title.split("Washcam!");

    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="text-[#1E3A8A]">Washcam!</span>
          {parts[1]}
        </>
      );
    }

    return title;
  };

  return (
    <main className="min-h-screen bg-white relative overflow-x-hidden flex-1 flex flex-col">
      <section className="container-responsive hero-padding pt-16 md:pt-20 lg:pt-[120px] pb-12 lg:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="relative">
              <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#152349] leading-tight">
                {renderTitle()}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              {mounted
                ? t("hero.description")
                : "O&apos;zbekistondagi eng yaxshi moyka xizmati! 360° kamera orqali mashinangizni real vaqt rejimida kuzating. Washcam bilan avtomobilingiz yuvilishini jonli ko&apos;ring! Moyka, mashina yuvish xizmati."}
            </p>

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

            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/qrcode.png"
                  alt="Washcam ilovani yuklab olish uchun QR-kod"
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

          <div className="relative order-1 lg:order-2">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[549px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/car.png"
                  alt="Washcam avtomobil tasviri"
                  width={970}
                  height={549}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-bounce z-20"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full animate-pulse z-20"></div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping z-20"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container-responsive content-padding pt-16 md:pt-20 lg:pt-[200px] pb-12 lg:pb-20 relative z-10"
      >
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#152349] mb-4">
            {mounted
              ? t("features.title")
              : "Nega Washcam moyka xizmatini tanlash kerak?"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {mounted
              ? t("features.subtitle")
              : "O&apos;zbekistondagi eng yaxshi moyka xizmati! Avtomobil yuvish kelajagini bizning innovatsion xususiyatlarimiz bilan his qiling. Moyka, mashina yuvish xizmati."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-[#F2F3F8] p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:scale-95 touch-manipulation h-[365px] flex flex-col items-center justify-center text-center">
            <div className="w-[92px] h-[92px] bg-[#1E3A8A] rounded-[19px] flex items-center justify-center mb-6">
              <Image
                src="/solar_camera-outline.svg"
                alt="360° kamera belgisi"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3 sm:mb-4">
              {mounted ? t("features.feature1.title") : "360° Kamera kuzatuvi"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {mounted
                ? t("features.feature1.description")
                : "Mashina yuvilishini telefoningizdan real vaqt rejimida tomosha qiling"}
            </p>
          </div>

          <div className="bg-[#F2F3F8] p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:scale-95 touch-manipulation h-[365px] flex flex-col items-center justify-center text-center">
            <div className="w-[92px] h-[92px] bg-[#1E3A8A] rounded-[19px] flex items-center justify-center mb-6">
              <Image
                src="/carbon_security.svg"
                alt="Xavfsizlik belgisi"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3 sm:mb-4">
              {mounted ? t("features.feature2.title") : "Xavfsizlik"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {mounted
                ? t("features.feature2.description")
                : "Mashina yuvish davomida xavfsizlikni to&apos;liq ta&apos;minlaymiz"}
            </p>
          </div>

          <div className="bg-[#F2F3F8] p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:scale-95 touch-manipulation sm:col-span-2 lg:col-span-1 h-[365px] flex flex-col items-center justify-center text-center">
            <div className="w-[92px] h-[92px] bg-[#1E3A8A] rounded-[19px] flex items-center justify-center mb-6">
              <Image
                src="/mage_electricity.svg"
                alt="Tezkor xizmat belgisi"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3 sm:mb-4">
              {mounted ? t("features.feature3.title") : "Tezkor xizmat"}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {mounted
                ? t("features.feature3.description")
                : "Navbat kutmasdan online buyurtma bering va vaqtingizni tejang"}
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="container-responsive content-padding pt-16 md:pt-20 lg:pt-[200px] pb-12 lg:pb-20 relative z-10"
      >
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#152349] mb-4">
            {mounted ? t("howItWorks.title") : "WebCam qanday ishlaydi"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {mounted
              ? t("howItWorks.subtitle")
              : "Uchta oddiy qadam bilan Washcam-dan foydalanishni boshlang"}
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto mb-10">
          <div className="w-20 h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">01</span>
          </div>
          <Image
            src="/Line-1.png"
            alt=""
            width={234}
            height={24}
            className="w-[234px] h-6 object-contain"
          />
          <div className="w-20 h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">02</span>
          </div>
          <Image
            src="/Line-1.png"
            alt=""
            width={234}
            height={24}
            className="w-[234px] h-6 object-contain"
          />
          <div className="w-20 h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">03</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-start">
          <div className="text-center">
            <div className="lg:hidden w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">01</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 h-[263px] sm:h-[222px] lg:h-[365px] flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-[#F2F3F8] rounded-[19px] flex items-center justify-center mb-4">
                <img
                  src="/mynaui_download.svg"
                  alt="Ilovani yuklab olish belgisi"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3">
                {mounted ? t("howItWorks.step1.title") : "Ilovani yuklab oling"}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {mounted
                  ? t("howItWorks.step1.description")
                  : "App Store yoki Google Play-dan Washcam-ni yuklab oling"}
              </p>
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-center -mt-4 -mb-2">
            <Image
              src="/Line-2.png"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>

          <div className="text-center">
            <div className="lg:hidden w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">02</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 h-[263px] sm:h-[222px] lg:h-[365px] flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-[#F2F3F8] rounded-[19px] flex items-center justify-center mb-4">
                <img
                  src="/proicons_location.svg"
                  alt="Joylashuv belgisi"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3">
                {mounted
                  ? t("howItWorks.step2.title")
                  : "Eng yaqin Washcam moykasini tanlash"}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {mounted
                  ? t("howItWorks.step2.description")
                  : "Sizga yaqin qulay joyni toping va tanlang"}
              </p>
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-center -mt-4 -mb-2">
            <Image
              src="/Line-2.png"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>

          <div className="text-center">
            <div className="lg:hidden w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">03</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 h-[263px] sm:h-[222px] lg:h-[365px] flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-[#F2F3F8] rounded-[19px] flex items-center justify-center mb-4">
                <img
                  src="/solar_play-linear.svg"
                  alt="Boshlash belgisi"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#152349] mb-3">
                Jararayonni jonli kuzatish
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Avtomobilingizni 360° kamera orqali yuvayotganini tomosha qiling
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="trusted"
        className="container-responsive content-padding pt-16 md:pt-20 lg:pt-[200px] pb-12 lg:pb-20 relative z-10"
      >
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#152349] mb-4">
            {mounted
              ? t("trusted.title")
              : "Minglab odamlar tomonidan ishoniladi"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {mounted
              ? t("trusted.subtitle")
              : "Foydalanuvchilarimiz bizga ishonadi"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/tabler_users.svg"
                alt="Foydalanuvchilar belgisi"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#152349] mb-2">
              {mounted ? t("trusted.users") : "10,000+ Foydalanuvchilar"}
            </h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/proicons_location-1.svg"
                alt="Manzil belgisi"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#152349] mb-2">
              {mounted ? t("trusted.washPoints") : "100+ Moyka nuqtasi"}
            </h3>
          </div>
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-6">
              <Image
                src="/tdesign_time.svg"
                alt="Vaqt belgisi"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#152349] mb-2">
              {mounted ? t("trusted.service") : "24/7 Xizmat"}
            </h3>
          </div>
        </div>
      </section>
      <section
        id="sponsors"
        className="container-responsive content-padding pt-16 md:pt-20 lg:pt-[200px] pb-12 lg:pb-20 relative z-10"
      >
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#152349] mb-4">
            {mounted ? t("sponsors.title") : "Bizning homiylarimiz"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {mounted ? t("sponsors.subtitle") : "Ishonchli hamkorlarimiz"}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          <div className="text-center">
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[161px] bg-[#F2F3F8] rounded-[10px] flex items-center justify-center mx-auto shadow-sm">
              <span className="text-[#1E3A8A] font-semibold">Tez kunda!</span>
            </div>
          </div>

          <div className="text-center">
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[161px] bg-[#F2F3F8] rounded-[10px] flex items-center justify-center mx-auto shadow-sm">
              <span className="text-[#1E3A8A] font-semibold">Tez kunda!</span>
            </div>
          </div>

          <div className="text-center">
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[161px] bg-[#F2F3F8] rounded-[10px] flex items-center justify-center mx-auto shadow-sm">
              <span className="text-[#1E3A8A] font-semibold">Tez kunda!</span>
            </div>
          </div>

          <div className="text-center">
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[161px] bg-[#F2F3F8] rounded-[10px] flex items-center justify-center mx-auto shadow-sm">
              <span className="text-[#1E3A8A] font-semibold">Tez kunda!</span>
            </div>
          </div>

          <div className="text-center sm:col-span-2 lg:col-span-1">
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[161px] bg-[#F2F3F8] rounded-[10px] flex items-center justify-center mx-auto shadow-sm">
              <span className="text-[#1E3A8A] font-semibold">Tez kunda!</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-auto bg-[#020A22] text-white">
        <div className="container-responsive content-padding py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
            <div>
              <h4 className="text-xl font-semibold mb-4">
                Washcam - Moyka xizmati
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                O&apos;zbekistondagi eng yaxshi moyka xizmati! 360° kamera
                texnologiyasi bilan avtomobil yuvish jarayonini kuzatishning eng
                yaxshi usuli. Moyka, mashina yuvish xizmati.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md text-sm">
                <span className="inline-block w-3 h-3 bg-white rounded-[2px]"></span>
                Yuklab olish
              </button>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Tezkor havolalar</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Asosiy</li>
                <li>Xizmatlar</li>
                <li>Aloqa</li>
                <li>Biz haqimizda</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Moyka xizmatlari</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Avtomobil yuvish</li>
                <li>Mashina yuvish</li>
                <li>360° Kamera kuzatuvi</li>
                <li>Real vaqt bildirishnomalar</li>
                <li>Online buyurtmalar</li>
                <li>24/7 moyka xizmati</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Aloqa</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="mailto:info@washcam.uz"
                    className="hover:text-white transition-colors"
                  >
                    info@washcam.uz
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+998950090009"
                    className="hover:text-white transition-colors"
                  >
                    +998 95 009 00 09
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src="/image 32.png"
                  alt="Google Play belgisi"
                  width={128}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/Frame 149.png"
                  alt="App Store belgisi"
                  width={128}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="mt-4 w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-md p-2">
                <Image
                  src="/qrcode.png"
                  width={112}
                  height={112}
                  alt="Washcam ilovasi uchun QR-kod"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-xs">
            © 2025 Washcam. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>
    </main>
  );
}

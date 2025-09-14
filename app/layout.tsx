import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://washcam.uz"),
  title: {
    default:
      "Washcam – Moyka, Avtomobil yuvish | 360° kamera, Real vaqt kuzatish | Moyka xizmati",
    template: "%s | Washcam - Moyka xizmati",
  },
  description:
    "Washcam – O&apos;zbekistondagi eng yaxshi moyka xizmati! 360° kamera orqali avtomobil yuvish jarayonini onlayn kuzating. Moyka, mashina yuvish, avtomobil yuvish xizmati. Real vaqt bildirishnomalar, xavfsiz va qulay xizmat. Mobil ilova orqali eng yaqin moykani toping va jarayonni kuzating.",
  keywords: [
    "Washcam",
    "washcam uz",
    "washcam.uz",
    "moyka",
    "moyka uz",
    "moykalar",
    "moykalar uz",
    "avtomobil yuvish",
    "avtomobil yuvish online",
    "mashina yuvish",
    "mashina yuvish xizmati",
    "360 kamera avtomobil",
    "avtomobil yuvish kuzatish",
    "mashina yuvish kamera",
    "real vaqt kuzatuv",
    "avtomobil yuvish ilova",
    "car wash uzbekistan",
    "car wash tashkent",
    "moyka tashkent",
    "moyka xizmati",
    "avtomobil yuvish xizmati",
    "mashina yuvish online",
    "moyka online",
    "moyka kuzatish",
    "moyka kamera",
    "moyka 360",
    "moyka real vaqt",
    "moyka ilova",
    "moyka app",
    "moyka yuklab olish",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Washcam – Moyka xizmati | Avtomobil yuvish 360° kamera bilan",
    description:
      "O&apos;zbekistondagi eng yaxshi moyka xizmati! 360° kamera orqali avtomobilingiz yuvilishini jonli kuzating. Moyka, mashina yuvish xizmati. Eng yaqin moykani tanlang, buyurtma bering va jarayonni xavfsiz kuzating.",
    url: "https://washcam.uz",
    siteName: "Washcam",
    images: [
      {
        url: "https://washcam.uz/logo.svg",
        width: 57,
        height: 44,
        alt: "Washcam - Avtomobil yuvish jarayonini kuzatish",
        type: "image/svg+xml",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Washcam – Moyka xizmati | 360° kamera bilan avtomobil yuvish",
    description:
      "O&apos;zbekistondagi eng yaxshi moyka xizmati! 360° kamera orqali avtomobil yuvish jarayonini onlayn kuzatish. Moyka, mashina yuvish xizmati.",
    images: ["https://washcam.uz/logo.svg"],
    creator: "@washcam",
    site: "@washcam",
  },
  icons: {
    icon: [
      { url: "/logo.svg", sizes: "57x44", type: "image/svg+xml" },
      { url: "/logo.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/logo.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    shortcut: "/logo.svg",
    apple: [
      { url: "/logo.svg", sizes: "57x44", type: "image/svg+xml" },
      { url: "/logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  themeColor: "#1E3A8A",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="m-0 p-0">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="" />
        <meta name="yandex-verification" content="" />
        <link rel="canonical" href="https://washcam.uz/" />
        <link rel="alternate" hrefLang="uz" href="https://washcam.uz/" />
        <link rel="alternate" hrefLang="ru" href="https://washcam.uz/" />
        <link rel="alternate" hrefLang="en" href="https://washcam.uz/" />
        <link
          rel="icon"
          href="https://washcam.uz/logo.svg"
          type="image/svg+xml"
        />
        <link rel="icon" href="https://washcam.uz/logo.svg" sizes="any" />
        <link rel="apple-touch-icon" href="https://washcam.uz/logo.svg" />
        <link
          rel="shortcut icon"
          href="https://washcam.uz/logo.svg"
          type="image/svg+xml"
        />
        <meta
          name="msapplication-TileImage"
          content="https://washcam.uz/logo.svg"
        />
        <meta name="msapplication-TileColor" content="#1E3A8A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Washcam",
              url: "https://washcam.uz",
              logo: {
                "@type": "ImageObject",
                url: "https://washcam.uz/logo.svg",
                width: 57,
                height: 44,
                caption: "Washcam - Avtomobil yuvish jarayonini kuzatish",
              },
              image: "https://washcam.uz/logo.svg",
              description:
                "360° kamera orqali avtomobil yuvish jarayonini onlayn kuzatish xizmati",
              sameAs: ["https://t.me/washcam", "https://instagram.com/washcam"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+998950090009",
                  contactType: "customer service",
                  areaServed: "UZ",
                  availableLanguage: ["uz", "ru", "en"],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Washcam",
              url: "https://washcam.uz",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "iOS, Android, Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "UZS",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Washcam - Moyka xizmati",
              description:
                "O&apos;zbekistondagi eng yaxshi moyka xizmati. 360° kamera orqali avtomobil yuvish jarayonini onlayn kuzatish.",
              url: "https://washcam.uz",
              logo: "https://washcam.uz/logo.svg",
              address: {
                "@type": "PostalAddress",
                addressCountry: "UZ",
                addressRegion: "Toshkent",
              },
              serviceArea: {
                "@type": "Country",
                name: "Uzbekistan",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Moyka xizmatlari",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Avtomobil yuvish",
                      description:
                        "360° kamera orqali avtomobil yuvish xizmati",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mashina yuvish",
                      description: "Real vaqt rejimida mashina yuvish kuzatuvi",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Washcam",
              url: "https://washcam.uz",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://washcam.uz/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className="antialiased bg-white m-0 p-0 min-h-screen flex flex-col"
        suppressHydrationWarning={true}
      >
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}

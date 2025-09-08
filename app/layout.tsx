import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://washcam.uz"),
  title: {
    default:
      "Washcam – Avtomobil yuvish jarayonini kuzatish | 360° kamera, real vaqt",
    template: "%s | Washcam",
  },
  description:
    "Washcam – 360° kamera orqali avtomobil yuvish jarayonini onlayn kuzating. Real vaqt bildirishnomalar, xavfsiz va qulay xizmat. Mobil ilova orqali eng yaqin moykani toping va jarayonni kuzating.",
  keywords: [
    "Washcam",
    "washcam uz",
    "washcam.uz",
    "avtomobil yuvish online",
    "360 kamera avtomobil",
    "avtomobil yuvish kuzatish",
    "mashina yuvish kamera",
    "real vaqt kuzatuv",
    "avtomobil yuvish ilova",
    "car wash uzbekistan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Washcam – Avtomobil yuvish jarayonini kuzatish (360° kamera)",
    description:
      "360° kamera orqali avtomobilingiz yuvilishini jonli kuzating. Eng yaqin moykani tanlang, buyurtma bering va jarayonni xavfsiz kuzating.",
    url: "https://washcam.uz",
    siteName: "Washcam",
    images: [{ url: "/logo.svg", width: 1200, height: 630, alt: "Washcam" }],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Washcam – 360° kamera bilan avtomobil yuvish kuzatuvi",
    description:
      "360° kamera orqali avtomobil yuvish jarayonini onlayn kuzatish xizmati",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
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
              logo: "https://washcam.uz/logo.svg",
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

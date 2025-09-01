import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  UZ: {
    translation: {
      nav: {
        asosiy: "Asosiy",
        xizmatlar: "Xizmatlar",
        aloqa: "Aloqa",
        bizHaqimizda: "Biz haqimizda",
        yuklabOlish: "Yuklab olish",
      },
      hero: {
        title:
          "Avtomobil yuvish jarayonini kuzatishning eng qulay usuli – Washcam!",
        description:
          "360° kamera orqali mashinangizni real vaqt rejimida kuzating. Washcam bilan avtomobilingiz yuvilishini jonli ko'ring!",
        googlePlay: "Google Play dan yuklab olish",
        appStore: "App Store dan yuklab olish",
        qrText: "QR kodni skanerlang",
        qrSubtext: "va ilovani yuklab oling",
        carTitle: "Avtomobil",
        carSubtitle: "Yuvish jarayoni",
      },
      features: {
        title: "Nega Washcam ni tanlash kerak?",
        subtitle: "Avtomobilingiz yuvilishini kuzatishning eng zamonaviy usuli",
        feature1: {
          title: "360° Kamera kuzatuvi",
          description: "Avtomobilingizning har bir burchagini jonli ko'ring",
        },
        feature2: {
          title: "Xavfsizlik",
          description: "Avtomobilingiz xavfsizligi kafolatlangan",
        },
        feature3: {
          title: "Tezkor xizmat",
          description: "Tez va sifatli yuvish xizmati",
        },
      },
    },
  },
  RU: {
    translation: {
      nav: {
        asosiy: "Главная",
        xizmatlar: "Услуги",
        aloqa: "Контакты",
        bizHaqimizda: "О нас",
        yuklabOlish: "Скачать",
      },
      hero: {
        title:
          "Самый удобный способ контролировать процесс мойки автомобиля – Washcam!",
        description:
          "Наблюдайте за вашим автомобилем в реальном времени через 360° камеру. Смотрите, как ваш автомобиль моется вживую с Washcam!",
        googlePlay: "Скачать из Google Play",
        appStore: "Скачать из App Store",
        qrText: "Отсканируйте QR-код",
        qrSubtext: "и скачайте приложение",
        carTitle: "Автомобиль",
        carSubtitle: "Процесс мойки",
      },
      features: {
        title: "Почему стоит выбрать Washcam?",
        subtitle:
          "Самый современный способ наблюдать за мойкой вашего автомобиля",
        feature1: {
          title: "360° Видеонаблюдение",
          description: "Наблюдайте за каждым углом вашего автомобиля вживую",
        },
        feature2: {
          title: "Безопасность",
          description: "Безопасность вашего автомобиля гарантирована",
        },
        feature3: {
          title: "Быстрый сервис",
          description: "Быстрая и качественная мойка",
        },
      },
    },
  },
  ENG: {
    translation: {
      nav: {
        asosiy: "Home",
        xizmatlar: "Services",
        aloqa: "Contact",
        bizHaqimizda: "About",
        yuklabOlish: "Download",
      },
      hero: {
        title:
          "The most convenient way to monitor the car wash process – Washcam!",
        description:
          "Monitor your car in real-time with a 360° camera. Watch your car being washed live with Washcam!",
        googlePlay: "Download from Google Play",
        appStore: "Download from App Store",
        qrText: "Scan the QR code",
        qrSubtext: "and download the app",
        carTitle: "Car",
        carSubtitle: "Washing process",
      },
      features: {
        title: "Why choose Washcam?",
        subtitle: "The most modern way to monitor your car wash",
        feature1: {
          title: "360° Camera surveillance",
          description: "Watch every corner of your car live",
        },
        feature2: {
          title: "Security",
          description: "Your car's security is guaranteed",
        },
        feature3: {
          title: "Fast service",
          description: "Fast and quality washing service",
        },
      },
    },
  },
};

// Initialize i18n for both server and client
i18n.use(initReactI18next).init({
  resources,
  lng: "UZ",
  fallbackLng: "UZ",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

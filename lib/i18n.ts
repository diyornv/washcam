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
        subtitle:
          "Avtomobil yuvish kelajagini bizning innovatsion xususiyatlarimiz bilan his qiling",
        feature1: {
          title: "360° Kamera kuzatuvi",
          description:
            "Mashina yuvilishini telefoningizdan real vaqt rejimida tomosha qiling",
        },
        feature2: {
          title: "Xavfsizlik",
          description:
            "Mashina yuvish davomida xavfsizlikni to'liq ta'minlaymiz",
        },
        feature3: {
          title: "Tezkor xizmat",
          description:
            "Navbat kutmasdan online buyurtma bering va vaqtingizni tejang",
        },
      },
      howItWorks: {
        title: "WebCam qanday ishlaydi",
        subtitle: "Uchta oddiy qadam bilan Washcam-dan foydalanishni boshlang",
        step1: {
          title: "Ilovani yuklab oling",
          description: "App Store yoki Google Play-dan Washcam-ni yuklab oling",
        },
        step2: {
          title: "Eng yaqin Washcam moykasini tanlash",
          description: "Sizga yaqin qulay joyni toping va tanlang",
        },
        step3: {
          title: "Jararayonni jonli kuzatish",
          description:
            "Avtomobilingizni 360° kamera orqali yuvayotganini tomosha qiling",
        },
      },
      trusted: {
        title: "Minglab odamlar tomonidan ishoniladi",
        subtitle: "Foydalanuvchilarimiz bizga ishonadi",
        users: "10,000+ Foydalanuvchilar",
        washPoints: "100+ Moyka nuqtasi",
        service: "24/7 Xizmat",
      },
      sponsors: {
        title: "Bizning homiylarimiz",
        subtitle: "Ishonchli hamkorlarimiz",
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
          "Почувствуйте будущее мойки автомобилей с нашими инновационными функциями",
        feature1: {
          title: "360° Видеонаблюдение",
          description:
            "Смотрите процесс мойки автомобиля в реальном времени на своем телефоне",
        },
        feature2: {
          title: "Безопасность",
          description:
            "Полностью обеспечиваем безопасность во время мойки автомобиля",
        },
        feature3: {
          title: "Быстрый сервис",
          description: "Заказывайте онлайн без очереди и экономьте свое время",
        },
      },
      howItWorks: {
        title: "Как работает WebCam",
        subtitle: "Начните использовать Washcam в три простых шага",
        step1: {
          title: "Скачайте приложение",
          description: "Скачайте Washcam из App Store или Google Play",
        },
        step2: {
          title: "Выберите ближайшую мойку Washcam",
          description: "Найдите и выберите удобное место рядом с вами",
        },
        step3: {
          title: "Наблюдайте процесс вживую",
          description: "Смотрите, как ваш автомобиль моется через 360° камеру",
        },
      },
      trusted: {
        title: "Доверяют тысячи людей",
        subtitle: "Наши пользователи доверяют нам",
        users: "10,000+ Пользователей",
        washPoints: "100+ Пунктов мойки",
        service: "24/7 Сервис",
      },
      sponsors: {
        title: "Наши спонсоры",
        subtitle: "Надежные партнеры",
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
        subtitle:
          "Experience the future of car washing with our innovative features",
        feature1: {
          title: "360° Camera surveillance",
          description: "Watch the car wash process in real-time on your phone",
        },
        feature2: {
          title: "Security",
          description: "We fully ensure safety during car washing",
        },
        feature3: {
          title: "Fast service",
          description:
            "Order online without waiting in line and save your time",
        },
      },
      howItWorks: {
        title: "How WebCam works",
        subtitle: "Start using Washcam in three simple steps",
        step1: {
          title: "Download the app",
          description: "Download Washcam from App Store or Google Play",
        },
        step2: {
          title: "Choose the nearest Washcam car wash",
          description: "Find and choose a convenient location near you",
        },
        step3: {
          title: "Live monitoring of the process",
          description: "Watch your car being washed via 360° camera",
        },
      },
      trusted: {
        title: "Trusted by thousands of people",
        subtitle: "Our users trust us",
        users: "10,000+ Users",
        washPoints: "100+ Wash Points",
        service: "24/7 Service",
      },
      sponsors: {
        title: "Our sponsors",
        subtitle: "Reliable partners",
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

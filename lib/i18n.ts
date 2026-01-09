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
        title: "WashCam qanday ishlaydi",
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
      about: {
        title: "Biz haqimizda",
        description:
          "Washcam LLC — Oʻzbekistonda roʻyxatdan oʻtgan va Toshkent shahrida joylashgan texnologik startap. Biz avtomoyka jarayonlarini kompyuter ko'rishi, sun'iy intellekt va avtomatlashtirish orqali modernizatsiya qiluvchi AI-first yechimlar yaratamiz. Washcam texnologiyasi obuna asosidagi SaaS platforma sifatida taqdim etiladi va oddiy avtomoyka emas, balki texnologik kompaniyadir.",
        companyInfo: {
          title: "Kompaniya ma'lumotlari",
          legalName: "Yuridik nomi: Washcam LLC",
          registered: "Ro'yxatdan o'tgan: O'zbekiston",
          headquarters: "Joylashuv: Toshkent, O'zbekiston",
          industry: "Soha: AI asosidagi avtomoyka avtomatlashtirish va monitoring",
        },
        team: {
          title: "Jamoa",
          founderTitle: "Asoschi & CEO — Diyorbek Nurullayev",
          founderBio:
            "Kompyuter ko'rishi, bulutli platformalar va kengaytiriladigan SaaS mahsulotlariga ixtisoslashgan texnologik tadbirkor.",
        },
      },
      product: {
        title: "Mahsulot",
        description:
          "Avtomoykalar uchun AI asosidagi monitoring platformasi. Real vaqtli 360° video tahlil, nosozliklarni aniqlash, bulutli boshqaruv paneli va mobil/web ilovalarni o'z ichiga oladi. Platforma amalda ishlayotgan avtomoykalarda joriy etilgan.",
      },
      howItWorks: {
        title: "Qanday ishlaydi",
        subtitle: "Uchta oddiy qadam bilan Washcam-dan foydalanishni boshlang",
        step1: {
          title: "Kameralar 360° video yozib oladi",
          description: "Har bir moyka joy uchun 360° video yozib olinadi",
        },
        step2: {
          title: "AI yuvish jarayonini real vaqtda tahlil qiladi",
          description:
            "Kompyuter ko'rishi yordamida jarayonni tahlil qiladi va nosozliklarni aniqlaydi",
        },
        step3: {
          title: "Ma'lumotlar bulutda qayta ishlanadi",
          description: "Bulut xizmati orqali ma'lumotlar saqlanadi va tahlil qilinadi",
        },
        step4: {
          title: "Foydalanuvchilar ilova orqali kuzatadi",
          description: "Mobil va web ilovalar orqali real vaqtda monitoring",
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
        title: "Как работает WashCam",
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
      about: {
        title: "О нас",
        description:
          "Washcam LLC — технологический стартап, зарегистрированный в Узбекистане и расположенный в Ташкенте. Мы разрабатываем AI-first решения для автоматизации и мониторинга автомоек с использованием компьютерного зрения и облачной инфраструктуры. Washcam предоставляет свою технологию в виде SaaS-платформы и не является традиционной автомойкой.",
        companyInfo: {
          title: "Информация о компании",
          legalName: "Юридическое название: Washcam LLC",
          registered: "Регистрация: Узбекистан",
          headquarters: "Штаб-квартира: Ташкент, Узбекистан",
          industry: "Отрасль: AI-автоматизация и мониторинг автомоек",
        },
        team: {
          title: "Команда",
          founderTitle: "Основатель и CEO — Диёрбек Нуруллаев",
          founderBio:
            "Технологический предприниматель, специализирующийся на компьютерном зрении, облачных платформах и SaaS-продуктах.",
        },
      },
      product: {
        title: "Продукт",
        description:
          "AI-платформа мониторинга для автоматизированных автомоек с анализом 360° видео в реальном времени, выявлением аномалий и облачными панелями управления. Платформа используется на действующих автомойках.",
      },
      howItWorks: {
        title: "Как это работает",
        subtitle: "Начните использовать Washcam в три простых шага",
        step1: {
          title: "Камеры записывают 360° видео",
          description: "Непрерывная запись видео во всех зонах мойки",
        },
        step2: {
          title: "AI анализирует процесс мойки",
          description:
            "Компьютерное зрение в реальном времени обнаруживает аномалии",
        },
        step3: {
          title: "Данные обрабатываются в облаке",
          description: "Облачное хранилище и аналитика данных",
        },
        step4: {
          title: "Пользователи отслеживают через приложения",
          description: "Мониторинг через мобильные и веб-приложения",
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
        title: "How WAshCam works",
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
      about: {
        title: "About Us",
        description:
          "Washcam LLC is a digital-native technology startup registered in Uzbekistan and headquartered in Tashkent. We build AI-first solutions that modernize car wash operations through computer vision, automation, and cloud-native infrastructure. Our mission is to bring transparency, efficiency, and trust to car wash businesses and their customers using AI-driven monitoring and real-time video analytics. Washcam delivers its technology as a subscription-based SaaS platform and is not a traditional car wash operator.",
        companyInfo: {
          title: "Company Information",
          legalName: "Legal name: Washcam LLC",
          registered: "Registered: Uzbekistan",
          headquarters: "Headquarters: Tashkent, Uzbekistan",
          industry: "Industry: AI-powered car wash automation & monitoring",
        },
        team: {
          title: "Team",
          founderTitle: "Founder & CEO — Diyorbek Nurullayev",
          founderBio:
            "Technology entrepreneur focused on computer vision, cloud platforms, and scalable SaaS products.",
        },
      },
      product: {
        title: "Product",
        description:
          "AI-powered monitoring platform for automated car wash operations, including real-time 360° video analytics, anomaly detection, cloud dashboards, and mobile/web applications. The platform is deployed in active car wash locations.",
      },
      howItWorks: {
        title: "How it works",
        subtitle: "Start using Washcam in three simple steps",
        step1: {
          title: "Cameras capture 360° video streams",
          description: "Continuous video capture across all wash bays",
        },
        step2: {
          title: "AI analyzes the wash process in real time",
          description: "Computer vision detects stages and anomalies",
        },
        step3: {
          title: "Data is processed in the cloud",
          description: "Cloud storage and data analytics",
        },
        step4: {
          title: "Users monitor via mobile and web apps",
          description: "Real-time monitoring through applications",
        },
      },
    },
  },
};

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

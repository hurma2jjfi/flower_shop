import { eventWrapper } from "@testing-library/user-event/dist/utils";

export const navList = [
  {
    path: "/",
    text: "Главная",
  },
  {
    path: "/about",
    text: "О нас",
  },
  {
    path: "/services",
    text: "Услуги",
  },
  {
    path: "/event",
    text: "События",
  },
  {
    path: "/menu",
    text: "Каталог",
  },
  {
    path: "/blog",
    text: "Блог",
  },
  {
    path: "/contact",
    text: "Контакты",
  },
  {
    path: "/login",
    text: "Войти",
  },
  {
    path: "/register",
    text: "Регистрация",
  },

];

export const features = [
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Доставка свежей и быстрой еды",
  },
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Круглосуточная поддержка",
  },
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Простой и понятный интерфейс",
  },
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Вкусные предложения для вкусных блюд",
  },
];

export const faces = [
  {
    name: "ДОВОЛЬНЫХ КЛИЕНТОВ",
    icon: <i className="fas fa-users fa-4x mb-4 text-white"></i>,
    counter: "100",
  },
  {
    name: "БОЛЬШОЙ ВЫБОР ЦВЕТОВ",
    icon: <i className="fas fa-users-cog fa-4x mb-4 text-white"></i>,
    counter: "+4",
  },
  {
    name: "УДОБСТВО ИСПОЛЬЗОВАНИЯ",
    icon: <i className="fas fa-check fa-4x mb-4 text-white"></i>,
    counter: "+100",
  },
];

export const services = [
  {
   
    name: "Доставка 24/7",
    discription: "Доставка в любой уголок России.",
    btn: "Подробнее",
  },
  {
    
    name: "Опытные флористы",
    discription: "Работают опытные флористы со стажем.",
    btn: "Подробнее",
  },
  {
    
    name: "Низкая цена",
    discription: "Все наши товары по низким ценам.",
    btn: "Подробнее",
  },

  {
    
    name: "Качество",
    discription: "Все наши товары строго надлежащего качества.",
    btn: "Подробнее",
  },
  
];
export const event = [
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/Баннер биг.png",
    category: "Свадьба",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/Баннер биг.png",
    category: "Праздник",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/Баннер биг.png",
    category: "Сувенир",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/Баннер биг.png",
    category: "Коллекция",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/Баннер биг.png",
    category: "Свадьба",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/Баннер биг.png",
    category: "Праздник",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/Баннер биг.png",
    category: "Сувенир",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/Баннер биг.png",
    category: "Коллекция",
  },
];


export const menu = [
  {
    id: 1,
    name: "Алое",
    price: "90",
    content:
      "Растение с толстыми сочными листьями, которое часто используется в медицинских и косметических целях.",
    img: "../assets/img/товар 3 (2).png",
    category: "starter",
    btn: "Добавить в корзину",
  },
  {
    id: 2,
    name: "Кактус",
    price: "90",
    content:
      "Растение, которое растет в засушливых местностях и характеризуются наличием колючек вместо листьев. ",
    img: "../assets/img/товар 4 (2).png",
    category: "starter",
    btn: "Добавить в корзину",
  },
  {
    id: 3,
    name: "Синие пионы",
    price: "90",
    content:
      "Синие пионы являются воплощением мистики, с их нежными и яркими лепестками, наполняющими воздух чудесным ароматом",
    img: "../assets/img/товар 8 (1).png",
    category: "starter",
    btn: "Добавить в корзину",
  },
  {
    id: 4,
    name: "Горшок суккулент",
    price: "90",
    content:
      " Этот горшочек с растением, характеризуется наличием специальных тканей для запаса воды.",
    img: "../assets/img/товар 7.png",
    category: "starter",
    btn: "Добавить в корзину",
  },
 
  {
    id: 5,
    name: "Декор весны",
    price: "90",
    content:
      "Декоративные цветы могут использоваться для украшения интерьера, создания букетов, оформления свадеб и других торжественных мероприятий.",
    img: "../assets/img/image 6.png",
    category: "maincourse",
    btn: "Добавить в корзину",
  },
  {
    id: 6,
    name: "Декор лета",
    price: "90",
    content:
      "Декоративные цветы могут использоваться для украшения интерьера, создания букетов, оформления свадеб и других торжественных мероприятий.",
    img: "../assets/img/image 7.png",
    category: "maincourse",
    btn: "Добавить в корзину",
  },
  {
    id: 7,
    name: "Декор зимы",
    price: "90",
    content:
      "Декоративные цветы могут использоваться для украшения интерьера, создания букетов, оформления свадеб и других торжественных мероприятий.",
    img: "../assets/img/image 7.png",
    category: "maincourse",
    btn: "Добавить в корзину",
  },
  // {
  //   id: 12,
  //   name: "Blooming",
  //   price: "90",
  //   content:
  //     "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
  //   img: "../assets/img/menu-04.jpg",
  //   category: "ourspecials",
  //   btn: "Добавить в корзину",
  // },
  // {
  //   id: 13,
  //   name: "Декор осени",
  //   price: "90",
  //   content:
  //     "Декоративные цветы могут использоваться для украшения интерьера, создания букетов, оформления свадеб и других торжественных мероприятий.",
  //   img: "../assets/img/image 9.png",
  //   category: "ourspecials",
  //   btn: "Добавить в корзину",
  // },
  {
    id: 8,
    name: "Жёлтые Пионы",
    price: "90",
    content:
      "Красивые цветы с золотисто- или медно-желтыми цветками диаметром 5-10 см.",
    img: "../assets/img/image 3.png",
    category: "drinks",
    btn: "Добавить в корзину",
  },
  {
    id: 9,
    name: "Фиолетовые Пионы",
    price: "90",
    content:
      "Фиолетовые пионы символизируют молодость, женственность и защиту от негативной энергии.",
    img: "../assets/img/image 4.png",
    category: "drinks",
    btn: "Добавить в корзину",
  },
  // {
  //   id: 16,
  //   name: "Crispy Water",
  //   price: "90",
  //   content:
  //     "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
  //   img: "../assets/img/menu-10.jpg",
  //   category: "offers",
  //   btn: "Добавить в корзину",
  // },
  {
    id: 10,
    name: "Тюльпаны",
    price: "90",
    content:
      "Изящные цветы, символизирующие процветание и наступление весны. Они доступны во множестве разнообразных цветов и оттенков. ",
    img: "../assets/img/image 4.png",
    category: "drinks",
    btn: "Добавить в корзину",
  },
  {
    id: 11,
    name: "Розы",
    price: "90",
    content:
      "Один из самых популярных цветов в мире, который символизирует любовь, красоту и страсть.",
    img: "../assets/img/1656064121_30-mykaleidoscope-ru-p-bolshoi-buket-rozovikh-roz-krasivo-foto-32 1.png",
    category: "drinks",
    btn: "Добавить в корзину",
  },
  {
    id: 12,
    name: "Декор осени",
    price: "90",
    content:
      "Декоративные цветы могут использоваться для украшения интерьера, создания букетов, оформления свадеб и других торжественных мероприятий.",
    img: "../assets/img/image 9.png",
    category: "maincourse",
    btn: "Добавить в корзину",
  },
  // {
  //   id: 20,
  //   name: "Lemon",
  //   price: "90",
  //   content:
  //     "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
  //   img: "../assets/img/menu-01.jpg",
  //   category: "offers",
  //   btn: "Добавить в корзину",
  // },
];

export const footerIcon = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
 
];

export const footerUnitItem = [
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Быстро",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Качественно",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Недорого",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Надёжно",
  },
];

export const footerUnitContact = [
  {
    icon: <i className="fa fa-map-marker-alt text-primary me-2"></i>,
    name: "Ахматовская 1, Астрахань, Россия",
  },
  {
    icon: <i className="fa fa-phone-alt text-primary me-2"></i>,
    name: "(+8800) 5553 5555",
  },
  {
    icon: <i className="fas fa-envelope text-primary me-2"></i>,
    name: "Мир-Цветов@gmail.com",
  },
  {
    icon: <i className="fa fa-clock text-primary me-2"></i>,
    name: "Режим работы: с 9:00-18:00",
  },
];
export const footergallery = [
  {
    img: "../assets/img/товар 3 (2).png",
  },
  {
    img: "../assets/img/image 5.png",
  },
  {
    img: "../assets/img/товар 4 (2).png",
  },
  {
    img: "../assets/img/товар 7.png",
  },
  {
    img: "../assets/img/товар 8 (1).png",
  },
  {
    img: "../assets/img/image 6.png",
  },
];

export const contact = [
  {
    icon: <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>,
    title: "Адрес:",
    address: "Ахматовская 1, Астрахань, Россия",
  },
  {
    icon: <i className="fas fa-envelope fa-2x text-primary me-4"></i>,
    title: "Почта",
    address: "Мир-Цветов@gmail.com",
  },
  {
    icon: <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>,
    title: "Телефон",
    address: "(+8800) 5553 5555",
  },
];
export const blog = [
  {
    name: "Осенний флаурс",
    img: "../assets/img/image 19.png",
    day: "09",
    month: "Февраля",
  },
  {
    name: "Весенний флаурс",
    img: "../assets/img/image 20.png",
    day: "09",
    month: "Февраля",
  },
  {
    name: "Летний флаурс",
    img: "../assets/img/image 21.png",
    day: "09",
    month: "Февраля",
  },
];

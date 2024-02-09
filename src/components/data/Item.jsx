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
    image: "../assets/img/event-1.jpg",
    category: "wedding",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-2.jpg",
    category: "corporate",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-3.jpg",
    category: "wedding",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-4.jpg",
    category: "corporate",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-5.jpg",
    category: "buffet",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-6.jpg",
    category: "cocktail",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-7.jpg",
    category: "buffet",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-8.jpg",
    category: "cocktail",
  },
];

export const menu = [
  {
    id: 1,
    name: "Алое",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "starter",
    btn: "Добавить в корзину",
  },
  {
    id: 2,
    name: "Кактус",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "starter",
    btn: "Добавить в корзину",
  },
  {
    id: 3,
    name: "Синие пионы",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "starter",
    btn: "Добавить в корзину",
  },
  {
    id: 4,
    name: "Горшок суккулент",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "starter",
    btn: "Добавить в корзину",
  },
 
  {
    id: 9,
    name: "Argentinian",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "maincourse",
    btn: "Добавить в корзину",
  },
  {
    id: 10,
    name: "Crispy",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "maincourse",
    btn: "Добавить в корзину",
  },
  {
    id: 11,
    name: "Lemon",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "maincourse",
    btn: "Добавить в корзину",
  },
  {
    id: 12,
    name: "Blooming",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "ourspecials",
    btn: "Добавить в корзину",
  },
  {
    id: 13,
    name: "Алое",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "ourspecials",
    btn: "Добавить в корзину",
  },
  {
    id: 14,
    name: "Жёлтые Пионы",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "drinks",
    btn: "Добавить в корзину",
  },
  {
    id: 15,
    name: "Фиолетовые Пионы",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "drinks",
    btn: "Добавить в корзину",
  },
  {
    id: 16,
    name: "Crispy Water",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "offers",
    btn: "Добавить в корзину",
  },
  {
    id: 17,
    name: "Тюльпаны",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "drinks",
    btn: "Добавить в корзину",
  },
  {
    id: 18,
    name: "Розы",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "drinks",
    btn: "Добавить в корзину",
  },
  {
    id: 19,
    name: "Алое",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "maincourse",
    btn: "Добавить в корзину",
  },
  {
    id: 20,
    name: "Lemon",
    price: "90",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "offers",
    btn: "Добавить в корзину",
  },
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
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
];

export const footerUnitItem = [
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Cheese Burger",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Sandwitch",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Paneer Burger",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Special Sweet",
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
    name: "Режим работы: 24/7",
  },
];
export const footergallery = [
  {
    img: "../assets/img/menu-01.jpg",
  },
  {
    img: "../assets/img/menu-02.jpg",
  },
  {
    img: "../assets/img/menu-03.jpg",
  },
  {
    img: "../assets/img/menu-04.jpg",
  },
  {
    img: "../assets/img/menu-05.jpg",
  },
  {
    img: "../assets/img/menu-06.jpg",
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
    name: "Как добавить больше теста в вашу еду от",
    img: "../assets/img/blog-1.jpg",
    day: "16",
    month: "Sep",
  },
  {
    name: "Как добавить больше теста в вашу еду от",
    img: "../assets/img/blog-2.jpg",
    day: "16",
    month: "Sep",
  },
  {
    name: "Как добавить больше теста в вашу еду от",
    img: "../assets/img/blog-3.jpg",
    day: "16",
    month: "Sep",
  },
];

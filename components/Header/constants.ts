type NavItem = {
  id: number;
  title: string;
  path: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Каталог", path: "/cat" },
  { id: 3, title: "Блог", path: "/blog" },
  { id: 4, title: "О компании", path: "/pages/about" },
  { id: 5, title: "Доставка и оплата", path: "/pages/delivery" },
  {
    id: 6,
    title: "Для партнеров",
    path: "#",
    children: [
      { id: 10, title: "Документы", path: "/pages/documents" },
      { id: 11, title: "Условия", path: "/pages/conditions" },
      { id: 12, title: "Сертификаты", path: "/pages/sertificats" },
    ],
  },
  { id: 7, title: "Вакансии", path: "/pages/vacancies" },
  { id: 8, title: "Прайс", path: "/pages/price" },
  { id: 9, title: "Контакты", path: "/pages/contacts" },
];

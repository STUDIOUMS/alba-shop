type NavItem = {
  id: number;
  title: string;
  path: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Блог", path: "/blog" },
  { id: 3, title: "О компании", path: "/about" },
  { id: 4, title: "Доставка и оплата", path: "/delivery" },
  {
    id: 5,
    title: "Для партнеров",
    path: "#",
    children: [
      { id: 9, title: "Документы", path: "/" },
      { id: 10, title: "Условия", path: "/" },
      { id: 11, title: "Сертификаты", path: "/" },
    ],
  },
  { id: 6, title: "Вакансии", path: "/vacancies" },
  { id: 7, title: "Прайс", path: "/price" },
  { id: 8, title: "Контакты", path: "/contacts" },
];

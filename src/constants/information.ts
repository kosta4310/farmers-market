import { Route } from '../routers';

export const information = [
  { id: 1, title: 'Про нас', route: '/about' },
  { id: 2, title: 'Правила та умови', route: '/rules' },
  { id: 3, title: 'Доставка', route: '/delivery' },
  { id: 4, title: 'Оплата', route: '/payment' },
];

export const menuBuyer = [
  { id: 1, title: 'Мої данні', route: Route.myPage },
  { id: 2, title: 'Мої покупки', route: Route.myPurchases },
  { id: 3, title: 'Список бажань', route: Route.myFavorites },
  { id: 4, title: 'Відгуки', route: Route.reviews },
  { id: 5, title: 'Приватні повідомлення', route: Route.privateMessages },
];

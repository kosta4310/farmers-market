import { Route } from '../routers/route';

export const information = [
  { id: 1, title: 'Про нас', route: Route.about },
  { id: 2, title: 'Правила та умови', route: Route.rules },
  { id: 3, title: 'Доставка', route: Route.delivery },
  { id: 4, title: 'Оплата', route: Route.payment },
];

export const menuBuyer = [
  { id: 1, title: 'Мої данні', route: Route.myPage },
  { id: 2, title: 'Мої покупки', route: Route.myPurchases },
  { id: 3, title: 'Список бажань', route: Route.myFavorites },
  { id: 4, title: 'Відгуки', route: Route.reviews },
  { id: 5, title: 'Приватні повідомлення', route: Route.privateMessages },
];

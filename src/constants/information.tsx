import { Route } from '../routers/route';
import {
  AddProductIcon,
  IColors,
  MyFavoritesIcon,
  MyProductsIcon,
  MyPurchasesIcon,
  MySalesIcon,
  MyTemplatesIcon,
  PrivateMessagesIcon,
  PublicMessagesIcon,
  ReviewsIcon,
  UserIcon,
} from '../components/shared/Icons/dashBoardIcons.tsx';
import { ReactNode } from 'react';

export const information = [
  { id: 1, title: 'Про нас', route: Route.about },
  { id: 2, title: 'Правила та умови', route: Route.rules },
  { id: 3, title: 'Доставка', route: Route.delivery },
  { id: 4, title: 'Оплата', route: Route.payment },
];

interface IMenu {
  id: number;
  title: string;
  route: string;
  // eslint-disable-next-line no-unused-vars
  icon?: (color: IColors) => ReactNode;
}

export const menuDashboard: IMenu[] = [
  {
    id: 1,
    title: 'Мої данні',
    route: Route.dashboard.myPage,
    icon: ({ color }) => <UserIcon color={color} />,
  },
  {
    id: 2,
    title: 'Подати оголошення',
    route: Route.dashboard.addProduct,
    icon: ({ color }) => <AddProductIcon color={color} />,
  },
  {
    id: 3,
    title: 'Мої шаблони',
    route: Route.dashboard.myTemplates,
    icon: ({ color }) => <MyTemplatesIcon color={color} />,
  },
  {
    id: 4,
    title: 'Мої оголошення',
    route: Route.dashboard.myProducts,
    icon: ({ color }) => <MyProductsIcon color={color} />,
  },
  {
    id: 5,
    title: 'Мої продажі',
    route: Route.dashboard.mySales,
    icon: ({ color }) => <MySalesIcon color={color} />,
  },
  {
    id: 6,
    title: 'Мої покупки',
    route: Route.dashboard.myPurchases,
    icon: ({ color }) => <MyPurchasesIcon color={color} />,
  },
  {
    id: 7,
    title: 'Список бажань',
    route: Route.dashboard.myFavorites,
    icon: ({ color }) => <MyFavoritesIcon color={color} />,
  },
  {
    id: 8,
    title: 'Відгуки',
    route: Route.dashboard.reviews,
    icon: ({ color }) => <ReviewsIcon color={color} />,
  },
  {
    id: 9,
    title: 'Публічні повідомлення',
    route: Route.dashboard.publicMessages,
    icon: ({ color }) => <PublicMessagesIcon color={color} />,
  },
  {
    id: 10,
    title: 'Приватні повідомлення',
    route: Route.dashboard.privateMessages,
    icon: ({ color }) => <PrivateMessagesIcon color={color} />,
  },
];

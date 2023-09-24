import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../components/pages/MainPage';
import AboutPage from '../components/pages/AboutPage';
import ScreenLayout from '../layouts/ScreenLayout';
import RulesPage from '../components/pages/RulesPage';
import DeliveryPage from '../components/pages/DeliveryPage';
import PaymentPage from '../components/pages/PaymentPage';
import RegistrationPage from '../components/pages/RegistrationPage';
import MyPage from '../components/pages/MyPage';
import MyPurchasesPage from '../components/pages/MyPurchases';
import MyFavoritesPage from '../components/pages/MyFavorites';
import ReviewsPage from '../components/pages/Reviews';
import PrivateMessagesPage from '../components/pages/PrivateMessages';
import { Route } from './route';

export const router = (template: string) =>
  createBrowserRouter([
    {
      path: Route.main,
      element: <ScreenLayout />,
      children: [
        {
          path: Route.main,
          element: <MainPage />,
        },
        {
          path: Route.tokenValue,
          element: <MainPage />,
        },
        {
          path: Route.about,
          element: <AboutPage />,
        },
        {
          path: Route.rules,
          element: <RulesPage />,
        },
        {
          path: Route.delivery,
          element: <DeliveryPage />,
        },
        {
          path: Route.payment,
          element: <PaymentPage />,
        },
        {
          path: Route.registration,
          element: <RegistrationPage template={template} />,
        },
        {
          path: Route.myPage,
          element: <MyPage />,
        },
        {
          path: Route.myPurchases,
          element: <MyPurchasesPage />,
        },
        {
          path: Route.myFavorites,
          element: <MyFavoritesPage />,
        },
        {
          path: Route.reviews,
          element: <ReviewsPage />,
        },
        {
          path: Route.privateMessages,
          element: <PrivateMessagesPage />,
        },
      ],
    },
  ]);

import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../components/pages/MainPage';
import AboutPage from '../components/pages/AboutPage';
import ScreenLayout from '../layouts/ScreenLayout';
import RulesPage from '../components/pages/RulesPage';
import DeliveryPage from '../components/pages/DeliveryPage';
import PaymentPage from '../components/pages/PaymentPage';
import RegistrationPage from '../components/pages/RegistrationPage';
import MyFavoritesPage from '../components/pages/MyFavorites';
import ReviewsPage from '../components/pages/Reviews';
import PrivateMessagesPage from '../components/pages/PrivateMessages';
import { Route } from './route';
import ProductInfo from '../components/pages/ProductInfo';
import Description from '../components/common/FullInfoProductChildrenRoute/Description';
import Consitution from '../components/common/FullInfoProductChildrenRoute/Constitution';
import Feedback from '../components/common/FullInfoProductChildrenRoute/Feedback';
import Questions from '../components/common/FullInfoProductChildrenRoute/Questions';
import FullInfoProduct from '../components/shared/FullInfoProduct';

import MyPage from '../components/pages/MyPage';
import MyPurchasesPage from '../components/pages/MyPurchases';
import DashBoardLayout from '../layouts/DashboardLayout';
import { AddProduct } from '../components/pages/AddProduct';
import BasketPage from '../components/pages/BasketPage';
import BasketCheckout from '../components/common/BasketComponent/BasketСheckout';
import BasketPaymant from '../components/common/BasketComponent/BasketPaymant';

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
          path: Route.basket,
          element: <BasketPage />,
        },
        {
          path: Route.checkout,
          element: <BasketCheckout />,
        },
        {
          path: Route.paymant,
          element: <BasketPaymant />,
        },
        {
          element: <DashBoardLayout />,
          children: [
            {
              path: Route.dashboard.myPage,
              element: <MyPage />,
            },
            {
              path: Route.dashboard.addProduct,
              element: <AddProduct />,
            },
            {
              path: Route.dashboard.myPurchases,
              element: <MyPurchasesPage />,
            },
            {
              path: Route.dashboard.myFavorites,
              element: <MyFavoritesPage />,
            },
            {
              path: Route.dashboard.reviews,
              element: <ReviewsPage />,
            },
            {
              path: Route.dashboard.privateMessages,
              element: <PrivateMessagesPage />,
            },
          ],
        },
        {
          path: Route.product,
          element: <ProductInfo />,
        },
        {
          path: Route.id,
          element: <FullInfoProduct />,
          children: [
            {
              path: Route.description,
              element: <Description />,
            },
            {
              path: Route.constitution,
              element: <Consitution />,
            },
            {
              path: Route.feedback,
              element: <Feedback />,
            },
            {
              path: Route.questions,
              element: <Questions />,
            },
          ],
        },
      ],
    },
  ]);

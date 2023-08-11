import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../components/pages/MainPage';
import AboutPage from '../components/pages/AboutPage';
import Layout from '../components/common/Layout';
import RulesPage from '../components/pages/RulesPage';
import DeliveryPage from '../components/pages/Delivery';
import PaymentPage from '../components/pages/Payment';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/rules',
        element: <RulesPage />,
      },
      {
        path: '/delivery',
        element: <DeliveryPage />,
      },
      {
        path: '/payment',
        element: <PaymentPage />,
      },
    ],
  },
]);

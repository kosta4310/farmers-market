import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../components/pages/MainPage';
import AboutPage from '../components/pages/AboutPage';
import Layout from '../components/common/Layout';
import RulesPage from '../components/pages/RulesPage';
import DeliveryPage from '../components/pages/DeliveryPage';
import PaymentPage from '../components/pages/PaymentPage';
import RegistrationPage from '../components/pages/RegistrationPage';

export const router = (template: string) =>
  createBrowserRouter([
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
        {
          path: '/registration',
          element: <RegistrationPage template={template} />,
        },
      ],
    },
  ]);

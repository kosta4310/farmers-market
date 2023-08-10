import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Layout from "./components/common/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;

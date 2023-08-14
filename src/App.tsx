import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { useAppSelector } from './hooks/redux.ts';

const App: FC = () => {
  const template = useAppSelector((state) => state.registration.template);

  return <RouterProvider router={router(template)} />;
};

export default App;

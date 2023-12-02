import { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { useAppDispatch, useAppSelector } from './hooks/redux.ts';
import { userSlice } from './store/reducers/userSlice.ts';

const { SET_LOGGED_USER } = userSlice.actions;

const foo = {
  phoneNumber: '789789798',
  name: 'Alex',
  lastName: 'Osa',
  companyName: 'name compant',
  logo: '',
  aboutUs: 'about us',
  contactPerson: null,
  address: 'address',
  workingHours: '8:30-7:30',
  image:
    'https://res.cloudinary.com/debx785xm/image/upload/v1698740839/xqj2utbevda5n8hfjkxf.jpg',
  isActive: false,
  user: {
    email: 'test@example.com',
    role: 'seller',
  },
};

const App: FC = () => {
  const template = useAppSelector(state => state.registrationCommon.template);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(SET_LOGGED_USER(foo));
  }, []);

  return <RouterProvider router={router(template)} />;
};

export default App;

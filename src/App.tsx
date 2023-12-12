import { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { useAppDispatch, useAppSelector } from './hooks/redux.ts';
import { userSlice } from './store/reducers/userSlice.ts';

const { SET_LOGGED_USER } = userSlice.actions;

//TODO remove when we have endpoint Get user by token
const userState = {
  phoneNumber: '77766655',
  name: 'Test',
  lastName: 'Testenko',
  companyName: 'Fruit & Ko',
  logo: '',
  aboutUs: 'We are big develop company',
  contactPerson: null,
  address: 'Ukraine,Kyiv',
  workingHours: '8:30AM-7:30PM',
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
    dispatch(SET_LOGGED_USER(userState));
  }, []);

  return <RouterProvider router={router(template)} />;
};

export default App;

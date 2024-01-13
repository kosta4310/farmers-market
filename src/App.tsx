import { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { useAppDispatch, useAppSelector } from './hooks/redux.ts';
import { thunkGetUserByToken, userSlice } from './store/reducers/userSlice.ts';
import { getLocalStorageItem } from './utils/localStorageUtils.ts';
import { registrationCommonSlice } from './store/reducers/registrationCommon.ts';

const { SET_LOGGED_USER } = userSlice.actions;

const App: FC = () => {
  const { setIsLogged } = registrationCommonSlice.actions;
  const template = useAppSelector(state => state.registrationCommon.template);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getLocalStorageItem('token');
    token &&
      dispatch(thunkGetUserByToken(token)).then(res => {
        if (res.payload.buyer) {
          dispatch(SET_LOGGED_USER(res.payload.buyer));
          dispatch(setIsLogged(true));
        }
        if (res.payload.seller) {
          dispatch(SET_LOGGED_USER(res.payload.seller));
          dispatch(setIsLogged(true));
        }
      });
  }, []);

  return <RouterProvider router={router(template)} />;
};

export default App;

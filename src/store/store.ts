import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import registrationReducer from './reducers/registrationSlice';
import buyerRegistrationReducer from './reducers/buyersSlice';
import registrationCommonReducer from './reducers/registrationCommon';
import sellerRegistrationReducer from './reducers/sellerSlice';
import userReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  sellerRegistration: sellerRegistrationReducer,
  buyersRegistration: buyerRegistrationReducer,
  registrationCommon: registrationCommonReducer,
  userState: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

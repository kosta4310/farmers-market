import { combineReducers, configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/registrationSlice';
import buyerRegistrationReducer from './reducers/buyersSlice';
import registrationCommonReducer from './reducers/registrationCommon';

const rootReducer = combineReducers({
  registration: registrationReducer,
  buyersRegistration: buyerRegistrationReducer,
  registrationCommon: registrationCommonReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

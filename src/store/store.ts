import { combineReducers, configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/registrationSlice.ts';

const rootReducer = combineReducers({
  registration: registrationReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

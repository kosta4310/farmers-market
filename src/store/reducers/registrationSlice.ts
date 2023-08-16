import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationSliceState {
  template: string;
  email: string;
  number: string;
  name: string;
  surname: string;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
}

const initialState: RegistrationSliceState = {
  template: 'buyer',
  email: '',
  number: '',
  name: '',
  surname: '',
  password: '',
  repeatPassword: '',
  isCheckRules: false,
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setRepeatPassword: (state, action: PayloadAction<string>) => {
      state.repeatPassword = action.payload;
    },
    setIsCheckRules: (state, action: PayloadAction<boolean>) => {
      state.isCheckRules = action.payload;
    },
  },
});

export default registrationSlice.reducer;

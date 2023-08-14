import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationSliceState {
  template: string;
  login: string;
}

const initialState: RegistrationSliceState = {
  template: 'buyer',
  login: '',
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload;
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
  },
});

export default registrationSlice.reducer;

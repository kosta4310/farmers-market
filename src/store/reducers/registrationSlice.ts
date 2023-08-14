import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationSliceState {
  template: string;
}

const initialState: RegistrationSliceState = {
  template: 'buyer',
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload;
    },
  },
});

export default registrationSlice.reducer;

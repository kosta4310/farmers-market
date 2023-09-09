import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BuyersSignup } from '../../api/types';
import { fetchBuyersSignUp } from '../../api/apiAuthBuyers';
import { getErrorMessage } from '../../utils/func/getErrorMessage';

interface RegistrationSliceState {
  email: string;
  phoneNumber: string;
  name: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
}

const initialState: RegistrationSliceState = {
  email: '',
  phoneNumber: '',
  name: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  isCheckRules: false,
};

export const thunkBuyersSignUp = createAsyncThunk(
  'buyers/fetchBuyersSignUp',
  async (options: BuyersSignup, { rejectWithValue }) => {
    try {
      const res = await fetchBuyersSignUp(options);
      if (!res.ok) {
        const err: { message: string; statusCode: number } = await res.json();

        throw new Error(`${err.statusCode}_SIGNUP`);
      }

      // Show modal window

      // const { _id, name, login }: Buyer = await res.json();
      // const password = options.password;
      // return { _id, name, login, password };
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const buyersRegistrationSlice = createSlice({
  name: 'buersRegistration',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
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

export default buyersRegistrationSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BuyersSignup } from '../../api/types';
import { fetchBuyersSignUp } from '../../api/authBuyers';
import { getErrorMessage } from '../../utils/func/getErrorMessage';

interface RegistrationSliceState {
  phoneNumber: string;
  name: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
  modalConfirmationEmailIsOpen: boolean;
  error: string;
}

const initialState: RegistrationSliceState = {
  phoneNumber: '',
  name: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  isCheckRules: false,
  modalConfirmationEmailIsOpen: false,
  error: '',
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

      // const response = await res.json();
      // return response;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const buyersRegistrationSlice = createSlice({
  name: 'buersRegistration',
  initialState,
  reducers: {
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
    setModalConfirmationEmailIsOpen: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.modalConfirmationEmailIsOpen = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(thunkBuyersSignUp.fulfilled, state => {
        state.modalConfirmationEmailIsOpen = true;
      })
      .addCase(thunkBuyersSignUp.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default buyersRegistrationSlice.reducer;

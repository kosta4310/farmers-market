import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BuyersSignup } from '../../api/types';
import { fetchBuyersSignUp } from '../../api/authBuyers';
import { getErrorMessage } from '../../utils/func/getErrorMessage';
import { registrationCommonSlice } from './registrationCommon';

const { setModalConfirmationEmailIsOpen, setError } =
  registrationCommonSlice.actions;

interface IRegistrationSliceState extends BuyersSignup {
  repeatPassword: string;
  isCheckRules: boolean;
}

type RegistrationSliceState = Omit<IRegistrationSliceState, 'email'>;

const initialState: RegistrationSliceState = {
  phoneNumber: '',
  name: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  isCheckRules: false,
};

export const thunkBuyersSignUp = createAsyncThunk(
  'buyers/fetchBuyersSignUp',
  async (options: BuyersSignup, { rejectWithValue, dispatch }) => {
    try {
      const res = await fetchBuyersSignUp(options);
      if (!res.ok) {
        const err: { message: string; statusCode: number } = await res.json();

        throw new Error(`${err.statusCode}_${err.message}`);
      }
      dispatch(setModalConfirmationEmailIsOpen(true));
    } catch (error) {
      const err = getErrorMessage(error);
      dispatch(setError(err));
      return rejectWithValue(err);
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
  },
  extraReducers(builder) {
    builder
      .addCase(thunkBuyersSignUp.fulfilled, () => {
        setModalConfirmationEmailIsOpen(true);
      })
      .addCase(thunkBuyersSignUp.rejected, (_, action) => {
        setError(action.payload as string);
      });
  },
});

export default buyersRegistrationSlice.reducer;

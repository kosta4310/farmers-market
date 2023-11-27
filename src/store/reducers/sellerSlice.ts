import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SellerSignUp } from '../../api/types';
import { fetchSellerSignUp } from '../../api/authSeller';
import { registrationCommonSlice } from './registrationCommon';
import { getErrorMessage } from '../../utils/func/getErrorMessage';

const { setModalConfirmationEmailIsOpen, setError } =
  registrationCommonSlice.actions;

interface RegistrationSliceState extends SellerSignUp {
  registrationPage: number;
  repeatPassword: string;
  isCheckRules: boolean;
}

const initialState: RegistrationSliceState = {
  phoneNumber: '',
  name: '',
  lastName: '',
  typeSeller: 'business',
  companyName: '',
  image: '',
  logo: '',
  aboutUs: '',
  contactPerson: '',
  address: '',
  workHoursFrom: '',
  workHoursTo: '',
  deliveryConditions: '',
  password: '',
  repeatPassword: '',
  isCheckRules: false,
  registrationPage: 1,
};

export const thunkSellerSignUp = createAsyncThunk(
  'seller/fetchSellerSignUp',
  async (
    options: SellerSignUp & { email: string },
    { rejectWithValue, dispatch },
  ) => {
    try {
      const res = await fetchSellerSignUp(options);
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

export const sellerRegistrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    SET_FIELD: (state, action: { payload: { field: string; value: any } }) => {
      return { ...state, [action.payload.field]: action.payload.value };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(thunkSellerSignUp.fulfilled, () => {
        setModalConfirmationEmailIsOpen(true);
      })
      .addCase(thunkSellerSignUp.rejected, (_, action) => {
        setError(action.payload as string);
      });
  },
});

export default sellerRegistrationSlice.reducer;

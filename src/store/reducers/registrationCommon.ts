import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Signin } from '../../api/types';
import { fetchConfirmEmail } from '../../api/confirmEmail';
import { getErrorMessage } from '../../utils/func/getErrorMessage';
import { fetchSignIn } from '../../api/authCommon';
import { Buyer } from '../types';

interface RegistrationSliceState {
  error: string;
  isLogged: boolean;
}

const initialState: RegistrationSliceState = {
  error: '',
  isLogged: false,
};

export const thunkConfirmEmail = createAsyncThunk(
  'auth/confirmEmail',
  async (options: { code: string }, { rejectWithValue }) => {
    try {
      const res = await fetchConfirmEmail(options);
      if (res.status !== 200) {
        const err: { message: string; statusCode: number } = await res.json();

        throw new Error(`${err.message}`);
      }
      return res.json();
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const thunkAuthSignin = createAsyncThunk(
  'auth/signin',
  async (options: Signin, { rejectWithValue }) => {
    try {
      const res = await fetchSignIn(options);

      if (res.status !== 201) {
        const err: { message: string; statusCode: number } = await res.json();

        throw new Error(`${err.message}`);
      }
      return await res.json();
    } catch (error) {
      console.log('errror', error);

      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const registrationCommonSlice = createSlice({
  name: 'registrationCommon',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        thunkConfirmEmail.fulfilled,
        (state, action: PayloadAction<Buyer>) => {
          state.isLogged = true;
          const {
            lastName,
            name,
            phoneNumber,
            token,
            user: { email, role },
          } = action.payload;
          console.log({ lastName, name, phoneNumber, token, email, role });
        },
      )
      .addCase(thunkConfirmEmail.rejected, (_state, action) => {
        // state.error = action.payload as string;
        console.log('error confirm', action.payload);
      });

    builder
      .addCase(thunkAuthSignin.fulfilled, (_state, action) => {
        console.log('success login', action.payload);
      })
      .addCase(thunkAuthSignin.rejected, (_state, action) => {
        // state.error = action.payload as string;
        console.log('error signin', action.payload);
      });
  },
});

export default registrationCommonSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGetUser } from '../../api/getUser.ts';
import { getErrorMessage } from '../../utils/func/getErrorMessage.ts';

export class UserState {
  user: {
    phoneNumber?: string;
    name?: string;
    lastName?: string;
    sellerType?: string;
    companyName?: string;
    logo?: string;
    aboutUs?: string;
    contactPerson?: string;
    address?: string;
    workingHours?: string;
    deliveryConditions?: string;
    image?: string;
    isActive?: boolean;
    userConfig?: {
      email?: string;
      role?: string;
    };
  };

  constructor(res: any) {
    this.user = {
      phoneNumber: res['phoneNumber'],
      name: res['name'],
      lastName: res['lastName'],
      sellerType: res['sellerType'],
      companyName: res['companyName'],
      logo: res['logo'],
      aboutUs: res['aboutUs'],
      contactPerson: res['contactPerson'],
      address: res['address'],
      workingHours: res['workingHours'],
      deliveryConditions: res['deliveryConditions'],
      image: res['image'],
      isActive: res['isActive'],
      userConfig: {
        email: res['user']['email'],
        role: res['user']['role'],
      },
    };
  }
}

const initialState: UserState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    SET_LOGGED_USER: (state, action: { payload: any }) => {
      state.user = new UserState(action.payload).user;
    },
  },
});

export default userSlice.reducer;

export const thunkGetUserByToken = createAsyncThunk(
  'auth/getUser',
  async (token: string, { rejectWithValue }) => {
    try {
      const res = await fetchGetUser(token);
      return await res.json();
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

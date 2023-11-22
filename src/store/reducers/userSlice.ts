import { createSlice } from '@reduxjs/toolkit';

export class UserState {
  user?: {
    phoneNumber?: string;
    name?: string;
    lastName?: string;
    sellerType?: string;
    companyName?: string;
    factoryPhoto?: string;
    factoryLogo?: string;
    aboutUs?: string;
    contactPerson?: string;
    address?: string;
    workHoursFrom?: string;
    workHoursTo?: string;
    deliveryConditions?: string;
    photo?: string;
    aboutMe?: string;
    isCheckRules?: string;
    registrationPage?: number;
    businessName?: string;
    factoryAddress?: string;
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
      factoryPhoto: res['factoryPhoto'],
      factoryLogo: res['factoryLogo'],
      aboutUs: res['aboutUs'],
      contactPerson: res['contactPerson'],
      address: res['address'],
      workHoursFrom: res['workHoursFrom'],
      workHoursTo: res['workHoursTo'],
      deliveryConditions: res['deliveryConditions'],
      photo: res['photo'],
      aboutMe: res['aboutMe'],
      isCheckRules: res['isCheckRules'],
      registrationPage: res['registrationPage'],
      businessName: res['businessName'],
      factoryAddress: res['factoryAddress'],
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

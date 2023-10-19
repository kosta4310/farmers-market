import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationSliceState {
  phoneNumber: string;
  name: string;
  lastName: string;
  sellerType: string;
  businessName: string;
  factoryPhoto: Blob | null;
  factoryLogo: Blob | null;
  aboutUs: string;
  contactPerson: string;
  factoryAddress: string;
  workHoursFrom: string;
  workHoursTo: string;
  deliveryConditions: string;
  photo: Blob | null;
  aboutMe: string;
  registrationPage: number;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
}

const initialState: RegistrationSliceState = {
  phoneNumber: '',
  name: '',
  lastName: '',
  sellerType: 'business',
  businessName: '',
  factoryPhoto: null,
  factoryLogo: null,
  aboutUs: '',
  contactPerson: '',
  factoryAddress: '',
  workHoursFrom: '',
  workHoursTo: '',
  deliveryConditions: '',
  photo: null,
  aboutMe: '',
  password: '',
  repeatPassword: '',
  isCheckRules: false,
  registrationPage: 1,
};

export const sellerRegistrationSlice = createSlice({
  name: 'registration',
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
    setBusinessName: (state, action: PayloadAction<string>) => {
      state.businessName = action.payload;
    },
    setSellerType: (state, action: PayloadAction<string>) => {
      state.sellerType = action.payload;
    },
    setFactoryAddress: (state, action: PayloadAction<string>) => {
      state.factoryAddress = action.payload;
    },
    setAboutUs: (state, action: PayloadAction<string>) => {
      state.aboutUs = action.payload;
    },
    setContactPerson: (state, action: PayloadAction<string>) => {
      state.contactPerson = action.payload;
    },
    setWorkHoursFrom: (state, action: PayloadAction<string>) => {
      state.workHoursFrom = action.payload;
    },
    setWorkHoursTo: (state, action: PayloadAction<string>) => {
      state.workHoursTo = action.payload;
    },
    setRegistrationPage: (state, action: PayloadAction<number>) => {
      state.registrationPage = action.payload;
    },
    setDeliveryConditions: (state, action: PayloadAction<string>) => {
      state.deliveryConditions = action.payload;
    },
  },
});

export default sellerRegistrationSlice.reducer;

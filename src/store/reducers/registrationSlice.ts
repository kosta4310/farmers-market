import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationSliceState {
  template: string;
  email: string;
  numberPhone: string;
  name: string;
  surname: string;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
  businessName: string;
  sellerType: string;
  factoryAddress: string;
  workSchedule: string;
  aboutUs: string;
  contactPerson: string;
}

const initialState: RegistrationSliceState = {
  template: 'buyer',
  email: '',
  numberPhone: '',
  name: '',
  surname: '',
  password: '',
  repeatPassword: '',
  isCheckRules: false,
  businessName: '',
  sellerType: '',
  factoryAddress: '',
  workSchedule: '',
  aboutUs: '',
  contactPerson: '',
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setNumberPhone: (state, action: PayloadAction<string>) => {
      state.numberPhone = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
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
    setWorkSchedule: (state, action: PayloadAction<string>) => {
      state.workSchedule = action.payload;
    },
    setAboutUs: (state, action: PayloadAction<string>) => {
      state.aboutUs = action.payload;
    },
    setContactPerson: (state, action: PayloadAction<string>) => {
      state.contactPerson = action.payload;
    },
  },
});

export default registrationSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationSliceState {
  template: string;
  email: string;
  phoneNumber: string;
  name: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
  businessName: string;
  sellerType: string;
  factoryAddress: string;
  workSchedule: string;
  aboutUs: string;
  contactPerson: string;
  workHoursFrom: string;
  workHoursTo: string;
  registrationPage: number;
  iban: string;
  bankName: string;
  mfo: string;
  erdpou: string;
  fullBusinessName: string;
  numberCard: string;
  cardExpiryDate: string;
}

const initialState: RegistrationSliceState = {
  template: 'buyer',
  email: '',
  phoneNumber: '',
  name: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  isCheckRules: false,
  businessName: '',
  sellerType: 'business',
  factoryAddress: '',
  workSchedule: '',
  aboutUs: '',
  contactPerson: '',
  workHoursFrom: '',
  workHoursTo: '',
  registrationPage: 1,
  iban: '',
  bankName: '',
  mfo: '',
  erdpou: '',
  fullBusinessName: '',
  numberCard: '',
  cardExpiryDate: '',
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
    setWorkSchedule: (state, action: PayloadAction<string>) => {
      state.workSchedule = action.payload;
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
    setIban: (state, action: PayloadAction<string>) => {
      state.iban = action.payload;
    },
    setBankName: (state, action: PayloadAction<string>) => {
      state.bankName = action.payload;
    },
    setMfo: (state, action: PayloadAction<string>) => {
      state.mfo = action.payload;
    },
    setErdpou: (state, action: PayloadAction<string>) => {
      state.erdpou = action.payload;
    },
    setFullBusinessName: (state, action: PayloadAction<string>) => {
      state.fullBusinessName = action.payload;
    },
    setNumberCard: (state, action: PayloadAction<string>) => {
      state.numberCard = action.payload;
    },
    setCardExpiryDate: (state, action: PayloadAction<string>) => {
      state.cardExpiryDate = action.payload;
    },
  },
});

export default registrationSlice.reducer;

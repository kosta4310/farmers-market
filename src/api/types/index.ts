export interface BuyersSignup {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export type Signin = {
  email: string;
  password: string;
};

export interface SellerSignUp {
  phoneNumber: string;
  name: string;
  lastName: string;
  typeSeller: string;
  companyName: string;
  image: string;
  logo: string;
  aboutUs: string;
  contactPerson: string;
  address: string;
  workHoursFrom: string;
  workHoursTo: string;
  deliveryConditions: string;
  password: string;
}

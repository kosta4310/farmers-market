interface User {
  email: string;
  role: Role;
}

export interface Buyer {
  lastName: string;
  name: string;
  phoneNumber: string;
  token: string;
  user: User;
}

export enum Role {
  BUYER = 'buyer',
  SELLER = 'seller',
}

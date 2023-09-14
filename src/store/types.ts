interface User {
  email: string;
  role: 'buyer' | 'seller';
}

export interface Buyer {
  lastName: string;
  name: string;
  phoneNumber: string;
  token: string;
  user: User;
}

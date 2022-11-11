interface Address {
  lineOne: string;
  lineTwo?: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface SignupData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone?: string;
  address: Address;
}

export interface LoginData {
  email: string;
  password: string;
}

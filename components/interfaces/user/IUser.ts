export interface ICreateAccount {
  names: string;
  email: string;
  validEmail: string;
  password: string;
  validPassword: string;
  phone: string;
}

export interface ILogin {
  email: string;
  password: string;
}

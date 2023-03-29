import { Course } from './User';

export interface RegistrationFormFields {
  surname: string;
  name: string;
  patronymic: string;
  email: string;
  phone: string;
  specialField: Course | string;
  password: string;
  passwordConfirm: string;
}

export interface LoginFormFields {
  email: string;
  password: string;
}

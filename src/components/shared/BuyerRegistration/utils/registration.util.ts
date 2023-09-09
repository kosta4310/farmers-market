import { fetchBuyersSignUp } from '../../../../api/apiAuthBuyers';

interface RegistrationFields {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
}

export function checkFields(fields: RegistrationFields) {
  const {
    name,
    lastName,
    phoneNumber,
    email,
    password,
    repeatPassword,
    isCheckRules,
  } = fields;

  if (name.trim() === '') {
    alert(`Введіть ім'я`);
    return false;
  }

  if (lastName.trim() === '') {
    alert('Введіть прізвище');
    return false;
  }

  if (phoneNumber.trim() === '' || isNaN(Number(phoneNumber))) {
    alert('Введіть номер телефону');
    return false;
  }

  if (!email.includes('@')) {
    alert('Введіть валідний email');
    return false;
  }

  if (password.trim() === '') {
    alert('Введіть пароль');
    return false;
  }

  if (repeatPassword !== password) {
    alert('Паролі не співпадають');
    return false;
  }

  if (!isCheckRules) {
    alert('Підтвердіть умови використання');
    return false;
  }

  return true;
}

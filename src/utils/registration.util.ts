interface RegistrationFields {
  template: string;
  name: string;
  surname: string;
  numberPhone: string;
  email: string;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
  businessName?: string;
  sellerType?: string;
  factoryAddress?: string;
  workSchedule?: string;
  aboutUs?: string;
  contactPerson?: string;
}

export function checkFields(fields: RegistrationFields) {
  const {
    template,
    name,
    surname,
    numberPhone,
    email,
    password,
    repeatPassword,
    isCheckRules,
    businessName,
    sellerType,
    factoryAddress,
    workSchedule,
    aboutUs,
    contactPerson,
  } = fields;

  if (name.trim() === '') {
    return alert(`Введіть ім'я`);
  }

  if (surname.trim() === '') {
    return alert('Введіть прізвище');
  }

  if (numberPhone.trim() === '') {
    return alert('Введіть номер телефону');
  }

  if (!email.includes('@')) {
    return alert('Введіть валідний email');
  }

  if (password.trim() === '') {
    return alert('Введіть пароль');
  }

  if (repeatPassword !== password) {
    return alert('Паролі не співпадають');
  }

  if (businessName && businessName.trim() === '') {
    return alert('Введіть назву підприємства');
  }

  if (!isCheckRules) {
    return alert('Підтвердіть умови використання');
  }

  if (template === 'seller') {
    return console.log({
      template,
      name,
      surname,
      numberPhone,
      email,
      password,
      businessName,
      sellerType,
      factoryAddress,
      workSchedule,
      aboutUs,
      contactPerson,
    });
  }

  return console.log({
    template,
    name,
    surname,
    numberPhone,
    email,
    password,
  });
}

import { fetchBuyersSignUp } from '../../../../api/apiAuthBuyers';

interface RegistrationFields {
  // template: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  repeatPassword: string;
  isCheckRules: boolean;
  // businessName?: string;
  // sellerType?: string;
  // factoryAddress?: string;
  // workSchedule?: string;
  // aboutUs?: string;
  // contactPerson?: string;
}

export async function checkFields(fields: RegistrationFields) {
  const {
    // template,
    name,
    lastName,
    phoneNumber,
    email,
    password,
    repeatPassword,
    isCheckRules,
    // businessName,
    // sellerType,
    // factoryAddress,
    // workSchedule,
    // aboutUs,
    // contactPerson,
  } = fields;

  if (name.trim() === '') {
    return alert(`Введіть ім'я`);
  }

  if (lastName.trim() === '') {
    return alert('Введіть прізвище');
  }

  if (phoneNumber.trim() === '' || isNaN(Number(phoneNumber))) {
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

  // if (!businessName || businessName.trim() === '') {
  //   return alert('Введіть назву підприємства');
  // }

  if (!isCheckRules) {
    return alert('Підтвердіть умови використання');
  }

  // if (template === 'seller') {
  //   return console.log({
  //     template,
  //     name,
  //     surname,
  //     numberPhone,
  //     email,
  //     password,
  //     businessName,
  //     sellerType,
  //     factoryAddress,
  //     workSchedule,
  //     aboutUs,
  //     contactPerson,
  //   });
  // }

  const res = await fetchBuyersSignUp({
    buyer: {
      name,
      lastName,
      phoneNumber,
      email,
      password,
    },
  });
  // const res = await fetchBuyersSignUp({
  //   buyer: {
  //     name: 'Inna',
  //     lastName: 'Roo',
  //     role: 'seller',
  //     phoneNumber: '0912983665',
  //     address: 'asdf4ghjkl12',
  //     email: 'ghdпfhgd12@gmail.com',
  //     password: 'sdf5ghjkуTgh12',
  //   },
  // });
  console.log(res);
  return res;
}

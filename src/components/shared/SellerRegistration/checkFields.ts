export function checkFieldsFirstPage(
  name: string,
  surname: string,
  numberPhone: string,
  email: string,
) {
  if (name?.trim() === '') {
    alert(`Введіть ім'я`);
    return false;
  }

  if (surname?.trim() === '') {
    alert('Введіть прізвище');
    return false;
  }

  if (numberPhone?.trim() === '') {
    alert('Введіть номер телефону');
    return false;
  }

  if (email?.trim() === '') {
    alert('Введіть email');
    return false;
  }

  return true;
}

export function checkFieldsSecondPage(
  companyName: string | undefined,
  sellerType: string,
  aboutUs: string,
) {
  let response;
  switch (sellerType) {
    case 'business':
      response = businessCase();
      break;
    case 'private':
      response = privateCase();
      break;
    default:
      break;
  }
  return response;
  function businessCase() {
    if (companyName?.trim() === '') {
      alert('Введіть назву підприємства');
      return false;
    }
    if (aboutUs.trim() === '') {
      alert('Заповніть поле про нас');
      return false;
    }

    return true;
  }

  function privateCase() {
    return true;
  }
}

export function checkFieldsFourthPage(
  password: string,
  repeatPassword: string,
  isCheckRules: boolean,
) {
  if (password === '') {
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

export function checkFieldsThirdPage() {
  // factoryAddress: string,
  // deliveryConditions: string,
  // workHoursFrom: string,
  // workHoursTo: string,
  // if (factoryAddress === '') {
  //   alert('Введіть адресу для самовивізу товару');
  //   return false;
  // }
  // if (deliveryConditions === '') {
  //   alert('Введіть умови доставки');
  //   return false;
  // }
  // if (workHoursFrom === '' || workHoursTo === '') {
  //   alert('Введіть часи роботи підприємства');
  //   return false;
  // }

  return true;
}

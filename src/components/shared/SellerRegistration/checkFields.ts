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
  businessName: string,
  sellerType: string,
  aboutUs: string,
  iban: string,
  bankName: string,
  mfo: string,
  erdpou: string,
  fullBusinessName: string,
  numberCard: string,
  cardExpiryDate: string,
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
    if (businessName.trim() === '') {
      alert('Введіть назву підприємства');
      return false;
    }
    if (aboutUs.trim() === '') {
      alert('Заповніть поле про нас');
      return false;
    }
    if (iban.trim() === '') {
      alert('Введіть IBAN');
      return false;
    }
    if (bankName.trim() === '') {
      alert('Введіть назву банку');
      return false;
    }
    if (mfo.trim() === '') {
      alert('Введіть МФО');
      return false;
    }
    if (erdpou.trim() === '') {
      alert('Введіть ЕРДПОУ');
      return false;
    }
    if (fullBusinessName.trim() === '') {
      alert('Введіть повну назву підприємства');
      return false;
    }
    return true;
  }

  function privateCase() {
    if (numberCard.trim() === '') {
      alert('Введіть номер карти');
      return false;
    }
    if (cardExpiryDate.trim() === '') {
      alert('Введіть срок дії карти');
      return false;
    }
    return true;
  }
}

export function checkFieldsThirdPage(
  password: string,
  repeatPassword: string,
  isCheckRules: boolean,
) {
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

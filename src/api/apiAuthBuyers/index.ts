import { BUYERS_SIGNIN, BUYERS_SIGNUP } from '../config';
import { BuyersSignin, BuyersSignup } from '../types';

export async function fetchBuyersSignIn(
  options: BuyersSignin,
): Promise<Response> {
  const response = await fetch(BUYERS_SIGNIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(options),
  });
  return response;
}

export async function fetchBuyersSignUp(options: {
  buyer: BuyersSignup;
}): Promise<Response> {
  const response = await fetch(BUYERS_SIGNUP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      buyer: options,
    }),
  });
  return response;
}

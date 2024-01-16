import { BUYERS_SIGNUP } from './config';
import { BuyersSignup } from './types';

export async function fetchBuyersSignUp(
  options: BuyersSignup,
): Promise<Response> {
  return await fetch(BUYERS_SIGNUP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(options),
  });
}

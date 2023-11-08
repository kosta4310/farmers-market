import { SELLER_SIGNUP } from './config';
import { SellerSignUp } from './types';

export async function fetchSellerSignUp(
  options: SellerSignUp,
): Promise<Response> {
  const response = await fetch(SELLER_SIGNUP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(options),
  });
  return response;
}

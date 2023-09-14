import { AUTH_SIGNIN } from './config';
import { Signin } from './types';

export async function fetchSignIn(options: Signin): Promise<Response> {
  const response = await fetch(AUTH_SIGNIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(options),
  });
  return response;
}

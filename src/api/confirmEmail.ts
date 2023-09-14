import { CONFIRM_EMAIL } from './config';

export async function fetchConfirmEmail(options: {
  code: string;
}): Promise<Response> {
  const response = await fetch(CONFIRM_EMAIL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(options),
  });
  return response;
}

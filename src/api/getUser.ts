import { GET_USER } from './config';

export async function fetchGetUser(token: string): Promise<Response> {
  return await fetch(GET_USER, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

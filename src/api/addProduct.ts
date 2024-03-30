// import { AddProduct } from '../store/reducers/productsSlice';
import { getLocalStorageItem } from '../utils/localStorageUtils';
import { ADD_PRODUCT } from './config';

export async function fetchAddProduct(options: FormData): Promise<Response> {
  const token = getLocalStorageItem('token');

  for (const entry of options.entries()) {
    console.log(entry);
  }

  const response = await fetch(ADD_PRODUCT, {
    method: 'POST',

    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: options,
  });

  return response;
}

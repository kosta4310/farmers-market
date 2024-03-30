import { getLocalStorageItem } from '../utils/localStorageUtils';
import { PATCH_PRODUCT } from './config';

export async function fetchPatchProduct(options: FormData): Promise<Response> {
    const token = getLocalStorageItem('token');

    for (const entry of options.entries()) {
        console.log(entry);
    }

    const response = await fetch(
      `${PATCH_PRODUCT}/b9783b72-b27a-4a10-948b-3b54ebbbf416`,
      {
        method: 'PATCH',

        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: options,
      },
    );

    return response;
}
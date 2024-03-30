import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_ALL_PRODUCT } from './config';
import { getErrorMessage } from '../utils/func/getErrorMessage';
import { getLocalStorageItem } from '../utils/localStorageUtils';

export const thunkGetAllProduct = createAsyncThunk(
  'product/all',
  async (_, { rejectWithValue }) => {
      try {
            const token = getLocalStorageItem('token');

      const response = await fetch(GET_ALL_PRODUCT, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

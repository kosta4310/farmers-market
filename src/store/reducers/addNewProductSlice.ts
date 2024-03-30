import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '../../utils/func/getErrorMessage';
import { fetchAddProduct } from '../../api/addProduct';
import { fetchPatchProduct } from '../../api/patchProduct';
// import { AddProduct } from './productsSlice';

export const thunkAddNewProduct = createAsyncThunk(
  'product/add',
  async (options: FormData, { rejectWithValue }) => {
    try {
      const res = await fetchAddProduct(options);

      const data = await res.json();
      return data;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(getErrorMessage(error));
    }
  },
);


export const thunkPatchProduct = createAsyncThunk(
  'product/patch',
  async (options: FormData, { rejectWithValue }) => {
    try {
      const res = await fetchPatchProduct(options);

      const data = await res.json();
      return data;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(getErrorMessage(error));
    }
  },
);
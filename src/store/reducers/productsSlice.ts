import { createSlice } from '@reduxjs/toolkit';
import { thunkGetAllProduct } from '../../api/getAllProduct';

export class AddProduct {
  name: string;
  file: null;
  description: string;
  caloricContent: string;
  proteins: string;
  fats: string;
  carbohydrates: string;
  price: number;
  quantity: number;
  unit: {
    value: string;
    label: string;
  };
  deliveryTypes: string[];
  deliveryPlaces: string;
  phoneNumber: string;
  categoryId: string;
  category: {
    id: string | number;
    value: string;
    label: string;
  };
  subcategory: {
    value: string;
    label: string;
  };
  subsubcategory?: object;
  image: string | undefined;

  constructor(val: any) {
    this.name = val.name;
    this.file = val.file;
    this.description = val.description;
    this.caloricContent = val.caloricContent;
    this.proteins = val.proteins;
    this.carbohydrates = val.carbohydrates;
    this.fats = val.fats;
    this.price = val.price;
    this.quantity = val.quantity;
    this.unit = val.unit;
    this.deliveryTypes = val.deliveryType;
    this.phoneNumber = val.phoneNumber;
    this.categoryId = val.categoryId;
    this.category = val.category;
    this.subcategory = val.subcategory;
    this.subsubcategory = val.subsubcategory;
    this.deliveryPlaces = val.deliveryPlaces;
  }
}

export interface IProducts {
  searchResult: [];
  myProducts: [];
  addProduct: AddProduct;
}

const initialState: IProducts = {
  searchResult: [],
  myProducts: [],
  addProduct: { ...new AddProduct({ deliveryType: [] }) },
};

const slice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    // GET_PRODUCTS: (state, action: { payload: any }) => {
    //   state.myProducts = [];
    // },
    SET_FIELD: (state, action: { payload: Partial<AddProduct> }) => {
      state.addProduct = {
        ...state.addProduct,
        ...action.payload,
      };
    },
    // RESET_FIELD: (state) => {
    //   state.addProduct=initialState
    // },
    SET_DELIVERY_FIELD: (
      state,
      action: { payload: { isChecked: boolean; value: string } },
    ) => {
      state.addProduct = {
        ...state.addProduct,
        deliveryTypes: [
          ...state.addProduct.deliveryTypes,
          action.payload.value,
        ],
        // deliveryPlaces: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(thunkGetAllProduct.fulfilled, (state, action) => {
      state.myProducts = action.payload;
    });
    // .addCase(thunkGetAllProduct.rejected, (_, action) => {
    //   setError(action.payload as string);
    // });
  },
});
const actions = {
  ...slice.actions,
};

export const productSlice = {
  initialState,
  actions,
  slice,
  reducer: slice.reducer,
};

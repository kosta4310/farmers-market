import { createSlice } from '@reduxjs/toolkit';

export class AddProduct {
  name: string;
  image: string;
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
  deliveryType: string[];
  deliveryPlaces: {
    place: string;
    selected: boolean;
  };
  phoneNumber: string;
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

  constructor(val: any) {
    this.name = val.name;
    this.image = val.image;
    this.description = val.description;
    this.caloricContent = val.caloricContent;
    this.proteins = val.proteins;
    this.carbohydrates = val.carbohydrates;
    this.fats = val.fats;
    this.price = val.price;
    this.quantity = val.quantity;
    this.unit = val.unit;
    this.deliveryType = val.deliveryType;
    this.phoneNumber = val.phoneNumber;
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
    SET_DELIVERY_FIELD: (
      state,
      action: { payload: { isChecked: boolean; value: string } },
    ) => {
      state.addProduct = {
        ...state.addProduct,
        deliveryType: [...state.addProduct.deliveryType, action.payload.value],
      };
    },
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

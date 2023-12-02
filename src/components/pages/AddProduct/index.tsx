import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { productSlice } from '../../../store/reducers/products.ts';
import Select from 'react-select';

const inputStyle =
  'w-full border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0';

const Label = ({ label }: { label: string }) => (
  <p className={'text-[16px] font-medium mb-2 text-text_com leading-6'}>
    {label}
  </p>
);
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const AddProduct: FC = () => {
  const { addProduct } = useAppSelector(state => state.productState);
  const dispatch = useAppDispatch();

  const { SET_FIELD } = productSlice.actions;

  return (
    <section className={'p-[16px]'}>
      <h1 className={'text-[24px] font-bold text-text_com mb-4'}>
        Подати оголошення
      </h1>
      <div id={'product-name'} className={'w-2/3 mb-6'}>
        <Label label={'Назва товару'} />
        <input
          placeholder={
            "Введіть ім'я використовуючи українську або латинську абетку"
          }
          className={inputStyle}
          id={'name'}
          required
          value={addProduct.name}
          onChange={e => {
            dispatch(SET_FIELD({ ['name']: e.target.value }));
          }}
        />
      </div>
      <div className={'w-full flex gap-6'} id={'row-select-category'}>
        <div id={'category'} className={'w-1/3'}>
          <Label label={'Вибір Категорії'} />
          <Select
            value={addProduct.category}
            onChange={val => {
              dispatch(
                SET_FIELD({
                  ['category']: {
                    value: val?.value ?? '',
                    label: val?.label ?? '',
                  },
                }),
              );
            }}
            options={options}
          />
        </div>
        <div id={'category'} className={'w-1/3'}>
          <Label label={'Вибір під категорії'} />
          <Select
            value={addProduct.subcategory}
            onChange={val => {
              dispatch(
                SET_FIELD({
                  ['subcategory']: {
                    value: val?.value ?? '',
                    label: val?.label ?? '',
                  },
                }),
              );
            }}
            options={options}
          />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;

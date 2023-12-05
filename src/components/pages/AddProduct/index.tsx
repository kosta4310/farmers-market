import { FC, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { productSlice } from '../../../store/reducers/productsSlice.ts';
import Select from 'react-select';
import {
  mainCategories,
  subCategory,
  unit,
} from '../../../constants/categories.ts';
import UploadAndDisplayImage from '../../common/FileUpload';

const inputStyle =
  'w-full border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0';

const Label = ({ label }: { label: string }) => (
  <p className={'text-[16px] font-medium mb-2 text-text_com leading-6'}>
    {label}
  </p>
);

export const AddProduct: FC = () => {
  const { addProduct } = useAppSelector(state => state.productState);
  const dispatch = useAppDispatch();

  const { SET_FIELD } = productSlice.actions;

  const subCategoryLocal = useMemo(() => {
    return subCategory.filter(
      el => el?.categoryId === addProduct?.category?.id,
    );
  }, [addProduct.category]);

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

      <div className={'w-full flex gap-6 mb-6'} id={'row-select-category'}>
        <div id={'category'} className={'w-1/3'}>
          <Label label={'Вибір Категорії'} />
          <Select
            value={addProduct.category}
            onChange={val => {
              console.log(val);
              dispatch(
                SET_FIELD({
                  ['category']: {
                    value: val?.value ?? '',
                    label: val?.label ?? '',
                    id: val?.id ?? '',
                  },
                }),
              );
            }}
            options={mainCategories}
          />
        </div>
        <div id={'subCategory'} className={'w-1/3'}>
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
            options={subCategoryLocal}
          />
        </div>
      </div>

      <div id={'add-photo'} className={'mb-6'}>
        <Label label={'Фотографія товару'} />
        <UploadAndDisplayImage
          label={''}
          inputId={'image'}
          hint="Зображення має бути не більшим ніж 2 МБ,
          та розміром не більше 1024х1024 пікселей."
          selectedImage={addProduct.image}
          handleChange={(_, value) => {
            dispatch(SET_FIELD({ ['image']: value }));
          }}
        />
      </div>

      <div id={'product-description'} className={'w-2/3 mb-6'}>
        <Label label={'Опис товару'} />
        <textarea
          rows={5}
          placeholder={
            "Введіть ім'я використовуючи українську або латинську абетку"
          }
          className={inputStyle}
          id={'description'}
          required
          value={addProduct.description}
          onChange={e => {
            dispatch(SET_FIELD({ ['description']: e.target.value }));
          }}
        />
      </div>
      <div id={'features'} className={'mb-6'}>
        <Label label={'Поживна цінність на 100 г продукту'} />
        <div id={'row-features-inputs'} className={'flex gap-6'}>
          <input
            type={'number'}
            placeholder={'Калорійність'}
            className={inputStyle}
            id={'caloricContent'}
            required
            value={addProduct.caloricContent}
            onChange={e => {
              dispatch(SET_FIELD({ ['caloricContent']: e.target.value }));
            }}
          />
          <input
            type={'number'}
            placeholder={'Білки'}
            className={inputStyle}
            id={'proteins'}
            required
            value={addProduct.proteins}
            onChange={e => {
              dispatch(SET_FIELD({ ['proteins']: e.target.value }));
            }}
          />
          <input
            type={'number'}
            placeholder={'Жири'}
            className={inputStyle}
            id={'fats'}
            required
            value={addProduct.fats}
            onChange={e => {
              dispatch(SET_FIELD({ ['fats']: e.target.value }));
            }}
          />
          <input
            type={'number'}
            placeholder={'Вуглеводи'}
            className={inputStyle}
            id={'carbohydrates'}
            required
            value={addProduct.carbohydrates}
            onChange={e => {
              dispatch(SET_FIELD({ ['carbohydrates']: e.target.value }));
            }}
          />
        </div>
      </div>
      <div id={'price-and-others'} className={'flex gap-6'}>
        <div id={'price'}>
          <Label label={'Ціна за одиницю товару, грн.'} />
          <input
            type={'number'}
            step={'0.1'}
            placeholder={'Ціна товару'}
            className={inputStyle}
            id={'price'}
            required
            value={addProduct.price}
            onChange={e => {
              dispatch(SET_FIELD({ ['price']: +e.target.value }));
            }}
          />
        </div>
        <div id={'unit'}>
          <Label label={'Одиниця замовлення'} />
          <Select
            value={addProduct.unit}
            placeholder={'Виберіть одиницю'}
            onChange={val => {
              dispatch(
                SET_FIELD({
                  ['unit']: {
                    value: val?.value ?? '',
                    label: val?.label ?? '',
                  },
                }),
              );
            }}
            options={unit}
          />
        </div>
      </div>
    </section>
  );
};

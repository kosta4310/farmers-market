import React, { FC, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { productSlice } from '../../../store/reducers/productsSlice.ts';
import Select from 'react-select';
import {
  mainCategories,
  subCategory,
  unit,
} from '../../../constants/categories.ts';
import UploadAndDisplayImage from '../../common/FileUpload';
import Checkbox from '../../common/Checkbox';
import RegistrationField from '../../common/RegistrationField';
import Button from '../../common/Button';
import { useLocation } from 'react-router-dom';
import { thunkAddNewProduct } from '../../../store/reducers/addNewProductSlice.ts';

const inputStyle =
  'w-full border border-gray-200 rounded p-3 outline-none focus:bg-none focus:ring-0';

const Label = ({ label }: { label: string }) => (
  <p className={'text-[16px] font-medium mb-2 text-text_com leading-6'}>
    {label}
  </p>
);

export const AddProduct: FC = () => {
  const { addProduct } = useAppSelector(state => state.productState);
  const { user } = useAppSelector(state => state.userState);
  const dispatch = useAppDispatch();

  const [selectedFile, setSelectedFile] = useState(null);

  const location = useLocation();
  const { state } = location;

  const { SET_FIELD,  SET_DELIVERY_FIELD } = productSlice.actions;

  useEffect(() => {
    if (state) {
      Object.entries(state).forEach(([key, value]) => {
        dispatch(SET_FIELD({ [key]: value }));
      });
    }
  }, [state, SET_FIELD, dispatch]);

  const subCategoryLocal = useMemo(() => {
    return subCategory.filter(
      el => el?.categoryId === addProduct?.category?.id,
    );
  }, [addProduct.category]);

  const onHandleChangeField = (field: string, value: any) => {
    dispatch(SET_FIELD({ [field]: value }));
  };

  const handleCreateProduct = () => {
    const formData = new FormData();

    if (addProduct) {
      Object.entries(addProduct).forEach(([key, value]) => {
        // if (value === undefined || value.length === '0') {
        //   return;
        // }
        formData.append(key, value);
      });
    }

    if (selectedFile !== null) {
      formData.append('file', selectedFile);
    }
    // if (state) {
    //   dispatch(thunkPatchProduct(formData));
    //   return
    // }

    dispatch(thunkAddNewProduct(formData));
    // dispatch(RESET_FIELD());
  };

  const deliveryPlaceChoise = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const updatedDeliveryPlaces = checked
      ? addProduct.deliveryPlaces
        ? `${addProduct.deliveryPlaces} ${id}`
        : id
      : addProduct.deliveryPlaces.replace(id, ' ');

    onHandleChangeField('deliveryPlaces', updatedDeliveryPlaces);
  };

  return (
    <section className={'p-[16px]'}>
      <h1 className={'text-[24px] font-bold text-text_com mb-4'}>
        {state ? '  Мої шаблони' : 'Подати оголошення'}
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
            onHandleChangeField('name', e.target.value);
          }}
        />
      </div>

      <div className={'w-full flex gap-6 mb-6'} id={'row-select-category'}>
        <div id={'category'} className={'w-1/3'}>
          <Label label={'Вибір Категорії'} />
          <Select
            value={addProduct.category}
            onChange={val => {
              onHandleChangeField('category', {
                value: val?.value ?? '',
                label: val?.label ?? '',
                id: val?.id ?? '',
              }),
                onHandleChangeField(
                  'categoryId',
                  '34b47ec9-6f70-4490-a5ea-ed7c21f1c8cd',
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
              onHandleChangeField('subcategory', {
                value: val?.value ?? '',
                label: val?.label ?? '',
              });
            }}
            options={subCategoryLocal}
          />
        </div>
      </div>

      <div id={'add-photo'} className={'mb-6'}>
        <Label label={'Фотографія товару'} />
        <UploadAndDisplayImage
          label={''}
          inputId={'file'}
          hint="Зображення має бути не більшим ніж 2 МБ,
          та розміром не більше 1024х1024 пікселей."
          selectedImage={addProduct?.image}
          handleChange={(_, value) => {
            setSelectedFile(value);
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
            onHandleChangeField('description', e.target.value);
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
              onHandleChangeField('caloricContent', e.target.value);
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
              onHandleChangeField('proteins', e.target.value);
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
              onHandleChangeField('fats', e.target.value);
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
              onHandleChangeField('carbohydrates', e.target.value);
            }}
          />
        </div>
      </div>
      <div id={'price-and-others'} className={'flex gap-6 mb-6'}>
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
              onHandleChangeField('price', +e.target.value);
            }}
          />
        </div>
        <div id={'unit'}>
          <Label label={'Одиниця замовлення'} />
          <Select
            value={addProduct.unit}
            placeholder={'Виберіть одиницю'}
            onChange={val => {
              onHandleChangeField(
                'unit',
                val?.value ?? '',
                // label: val?.label ?? '',
              );
            }}
            options={unit}
          />
        </div>
        <div id={'quantity'}>
          <Label label={'Кількість товару'} />
          <input
            type={'number'}
            step={'0.1'}
            placeholder={'Кількість товару'}
            className={inputStyle}
            id={'quantity'}
            required
            value={addProduct.quantity}
            onChange={e => {
              onHandleChangeField('quantity', e.target.value);
            }}
          />
        </div>
      </div>
      <div id={'delivery-method'} className={'mb-6'}>
        <Label label={'Вибиріть способи доставки'} />
        <Checkbox
          label={'Самовивіз'}
          inputId={'delivery-itself'}
          onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
            console.log('1', val.target.checked);
            dispatch(SET_DELIVERY_FIELD({ isChecked: true, value: 'Pickup' }));
          }}
          classes={'mb-2.5'}
        />
        <Checkbox
          label={'Адресна доставка'}
          inputId={'address-delivery'}
          onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
            console.log('2', val.target.checked);

            dispatch(SET_DELIVERY_FIELD({ isChecked: true, value: 'Courier' }));
          }}
        />
      </div>
      <div id={'delivery-place'} className={'mb-6'}>
        <Label label={'Місце доставки'} />
        <Checkbox
          label={'Київ та передмістя'}
          inputId={'kyiv'}
          onChange={e => deliveryPlaceChoise(e)}
          classes={'mb-2.5'}
        />
        <Checkbox
          label={'Інші міста за домовленістю'}
          inputId={'other'}
          onChange={e => deliveryPlaceChoise(e)}
        />
      </div>
      <div className={'mb-6'}>
        <Label label={'Номер телефону для обробки замовлень'} />
        <Checkbox
          classes={'mb-3'}
          label={'Використовувати номер контактної особи для обробки замовлень'}
          inputId={'phoneNum'}
          onChange={(val: React.ChangeEvent<HTMLInputElement>) => {
            onHandleChangeField(
              'phoneNumber',
              val.target.checked ? user.phoneNumber : '',
            );
          }}
        />
        <RegistrationField
          label=""
          inputType="number"
          inputId="numberPhone"
          value={addProduct.phoneNumber}
          hint=""
          placeholder="Будь-ласка введіть вірний номер"
          onChange={value => {
            onHandleChangeField('phoneNumber', value);
          }}
        />
      </div>
      <div className={'grid grid-cols-max2 gap-6'}>
        <span className="flex justify-center mb-7">
          {state ? (
            <Button color="green" size="w-60" onClick={handleCreateProduct}>
              Зберегти оголошення
            </Button>
          ) : (
            <Button color="green" size="w-max" onClick={handleCreateProduct}>
              Додати оголошення
            </Button>
          )}
        </span>
        <span className="flex justify-center mb-7">
          {
            state && (
              <Button
                color="transparent"
                size="w-60"
                onClick={() => {
                  Object.keys(state).forEach(key => {
                    dispatch(SET_FIELD({ [key]: '' }));
                  });
                }}
              >
                Скинути зміни
              </Button>
            )
            // : (
            // <Button
            //   color="transparent"
            //   size="w-max"
            //   onClick={() => {
            //     console.log('шаблон');
            //   }}
            // >
            //   Зберегти як шаблон
            // </Button>
            // )
          }
        </span>
      </div>
    </section>
  );
};

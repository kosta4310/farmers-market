import images from "./imagesForCategories";

export const mainCategories = [
  { id: 1, value: '1', label: `М'ясо` },
  { id: 2, value: '2', label: 'Молочна продукція' },
  { id: 3, value: '3', label: 'Сири' },
  { id: 4, value: '4', label: 'Фрукти та овочі' },
  { id: 5, value: '5', label: 'Яйця' },
  { id: 6, value: '6', label: 'Бакалія' },
  { id: 7, value: '7', label: 'Напої' },
  { id: 8, value: '8', label: 'Кравтофі продукти' },
];

export const subCategory = [
  {
    categoryId: 1,
    value: '1',
    label: 'Яловичина',
    image: images.c1v1,
  },
  {
    categoryId: 1,
    value: '2',
    label: 'Свинина',
    image: images.c1v2,
  },
  {
    categoryId: 1,
    value: '3',
    label: 'Курка',
    image: images.c1v3,
  },
  {
    categoryId: 1,
    value: '4',
    label: 'Індичка',
    image: images.c1v4,
  },
  {
    categoryId: 1,
    value: '5',
    label: 'Баранина',
    image: images.c1v5,
  },
  {
    categoryId: 1,
    value: '6',
    label: 'Стейки',
    image: images.c1v6,
  },
  {
    categoryId: 2,
    value: '1',
    label: 'Коров’яче молоко',
    image: images.c2v1,
  },
  {
    categoryId: 2,
    value: '2',
    label: 'Козяче молоко',
    image: images.c2v2,
  },
  {
    categoryId: 2,
    value: '3',
    label: 'Сир',
    image: images.c2v3,
  },
  {
    categoryId: 2,
    value: '4',
    label: 'Вершки',
    image: images.c2v4,
  },
  {
    categoryId: 2,
    value: '5',
    label: 'Вершкове масло',
    image: images.c2v5,
  },
  {
    categoryId: 3,
    value: '1',
    label: 'Свіжі сири',
    image: images.c3v1,
  },
  {
    categoryId: 3,
    value: '2',
    label: 'М’які сири',
    image: images.c3v2,
  },
  {
    categoryId: 3,
    value: '3',
    label: 'Напівтверді сири',
    image: images.c3v3,
  },
  {
    categoryId: 3,
    value: '4',
    label: 'Тверді сири',
    image: images.c3v4,
  },
  {
    categoryId: 3,
    value: '5',
    label: 'Голубі сири',
    image: images.c3v5,
  },
  {
    categoryId: 4,
    value: '1',
    label: 'Фрукти',
    image: images.c4v1,
  },
  {
    categoryId: 4,
    value: '2',
    label: 'Овочі',
    image: images.c4v2,
  },
  {
    categoryId: 4,
    value: '3',
    label: 'Зелень',
    image: images.c4v3,
  },
  {
    categoryId: 5,
    value: '1',
    label: 'Курячі яйця',
    image: images.c5v1,
  },
  {
    categoryId: 5,
    value: '2',
    label: 'Перепелині яйця',
    image: images.c5v2,
  },
  {
    categoryId: 6,
    value: '1',
    label: 'Крупи',
    image: images.c6v1,
  },
  {
    categoryId: 6,
    value: '2',
    label: 'Паста',
    image: images.c6v2,
  },
  {
    categoryId: 6,
    value: '3',
    label: 'Спеції',
    image: images.c6v3,
  },
  {
    categoryId: 6,
    value: '4',
    label: 'Борошно',
    image: images.c6v4,
  },
  {
    categoryId: 6,
    value: '5',
    label: 'Масло',
    image: images.c6v5,
  },
  {
    categoryId: 7,
    value: '1',
    label: 'Чай',
    image: images.c7v1,
  },
  {
    categoryId: 7,
    value: '2',
    label: 'Кава',
    image: images.c7v2,
  },
  {
    categoryId: 7,
    value: '3',
    label: 'Вода',
    image: images.c7v3,
  },
  {
    categoryId: 7,
    value: '4',
    label: 'Сік ',
    image: images.c7v4,
  },
  {
    categoryId: 7,
    value: '5',
    label: 'Безалкогольні напої ',
    image: images.c7v5,
  },
  {
    categoryId: 8,
    value: '1',
    label: 'Солоне',
    image: images.c8v1,
  },
  {
    categoryId: 8,
    value: '2',
    label: 'Солодке',
    image: images.c8v2,
  },
];

export const unit = [
  {
    value: 'kg',
    label: 'Кілограм',
  },
  {
    value: 'litre',
    label: 'Літр',
  },
  {
    value: 'pcs',
    label: 'Штука',
  },
];

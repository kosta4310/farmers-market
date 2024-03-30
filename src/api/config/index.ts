// const BASE = 'https://test-nest-deploy-2zrrw65jva-lz.a.run.app';
// const BASE = 'http://127.0.0.1:4000';

const BASE = 'https://marketplace-back-endat.onrender.com';

const BUYERS_SIGNUP = `${BASE}/auth/register/buyer`;
const SELLER_SIGNUP = `${BASE}/auth/register/seller`;
const CONFIRM_EMAIL = `${BASE}/auth/verify-email`;
const AUTH_SIGNIN = `${BASE}/auth/login`;

const ADD_PRODUCT = `${BASE}/product`
const PATCH_PRODUCT = `${BASE}/product`
const GET_ALL_PRODUCT=`${BASE}/product`

const GET_USER = `${BASE}/user`;

export {
  BASE,
  BUYERS_SIGNUP,
  CONFIRM_EMAIL,
  AUTH_SIGNIN,
  SELLER_SIGNUP,
  GET_USER,
  ADD_PRODUCT,
  GET_ALL_PRODUCT,
  PATCH_PRODUCT
};

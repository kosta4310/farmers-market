import { AnyAction } from '@reduxjs/toolkit';
import { useAppDispatch } from './redux.ts';

const useHandleChange = () => {
  const dispatch = useAppDispatch();

  return (action: (value: string) => AnyAction, value: string) => {
    dispatch(action(value));
  };
};

export default useHandleChange;

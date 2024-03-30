import { FC } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { registrationCommonSlice } from '../../../store/reducers/registrationCommon';

interface Props {
  children: React.ReactNode;
}
const ModalError: FC<Props> = ({ children }) => {
  const { setError } = registrationCommonSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <div
      className="fixed top-0 left-0 bg-slate-600 bg-opacity-30 w-screen h-screen flex justify-center items-center   z-50"
      onClick={() => {
        dispatch(setError(''));
      }}
    >
      <div
        className="bg-white h-max w-4/12 max-lg:w-8/12 max-md:w-full
    p-11 outline-none shadow-sm border-2 relative  z-50"
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalError;

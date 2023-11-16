import { FC } from 'react';
import inputImage from '../../../assets/img/input.svg';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../hooks/redux';

interface FileUploaddProps {
  label: string;
  inputId: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  hint?: string;
  setSelectedImage:
    | ActionCreatorWithPayload<string, 'registration/setFactoryPhoto'>
    | ActionCreatorWithPayload<string, 'registration/setFactoryLogo'>
    | ActionCreatorWithPayload<string, 'registration/setPhoto'>;
  selectedImage: string;
}

const UploadAndDisplayImage: FC<FileUploaddProps> = ({
  label,
  inputId,
  hint,
  setSelectedImage,
  selectedImage,
}) => {
  const dispatch = useAppDispatch();

  const hintMessage = <span className="text-xs text-gray-500">{hint}</span>;

  const filePreview:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = event => {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        dispatch(setSelectedImage(reader.result as string));
      });
    }
  };

  return (
    <div>
      <label className="flex gap-1 flex-col" htmlFor={inputId}>
        {label}
        <div className="rounded-tl rounded-bl p-3 text-gray-400 ">
          {selectedImage ? (
            <div>
              <img alt="not found" width={'250px'} src={selectedImage} />
              <br />
              <button onClick={() => setSelectedImage('')}>Remove</button>
            </div>
          ) : (
            <img src={inputImage} alt="input image" />
          )}
        </div>
        <input type="file" id={inputId} onChange={filePreview} />
      </label>
      {hintMessage}
    </div>
  );
};

export default UploadAndDisplayImage;

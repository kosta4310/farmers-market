import { FC } from 'react';
import inputImage from '../../../assets/img/input.svg';
import { useAppDispatch } from '../../../hooks/redux';
import { sellerRegistrationSlice } from '../../../store/reducers/sellerSlice.ts';

interface FileUploadProps {
  label: string;
  inputId: string;
  placeholder?: string;
  handleChange?: (field: string, value: any) => void;
  hint?: string;
  selectedImage: string;
}

const UploadAndDisplayImage: FC<FileUploadProps> = ({
  label,
  inputId,
  hint,
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
        dispatch(
          sellerRegistrationSlice.actions.SET_FIELD({
            field: inputId,
            value: reader.result as string,
          }),
        );
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
              <button
                onClick={() =>
                  dispatch(
                    sellerRegistrationSlice.actions.SET_FIELD({
                      field: inputId,
                      value: '',
                    }),
                  )
                }
              >
                Remove
              </button>
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

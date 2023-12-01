import { FC } from 'react';
import inputImage from '../../../assets/img/input.svg';

interface FileUploadProps {
  label: string;
  inputId: string;
  placeholder?: string;
  handleChange: (field: string, value: any) => void;
  hint?: string;
  selectedImage: string;
}

const UploadAndDisplayImage: FC<FileUploadProps> = ({
  label,
  inputId,
  hint,
  selectedImage,
  handleChange,
}) => {
  const hintMessage = <span className="text-xs text-gray-500">{hint}</span>;

  const filePreview:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = event => {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        handleChange(inputId, reader.result as string);
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
                onClick={() => {
                  handleChange(inputId, '');
                }}
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

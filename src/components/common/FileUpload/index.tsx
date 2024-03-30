import { FC, useState } from 'react';
import inputImage from '../../../assets/img/input.svg';

interface FileUploadProps {
  label: string;
  inputId: string;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (field: string, value: any) => void;
  hint?: string;
  selectedImage: string|undefined;
}

const UploadAndDisplayImage: FC<FileUploadProps> = ({
  label,
  inputId,
  hint,
  selectedImage,
  handleChange,
}) => {
  const hintMessage = <span className="text-xs text-gray-500">{hint}</span>;

  const [selectedFile, setSelectedFile] = useState('');

  const filePreview:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = event => {
    const file = event.target.files && event.target.files[0];

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        handleChange(inputId, file);
        setSelectedFile(reader.result as string);
      });
    }
  };

  return (
    <div>
      <label className="flex gap-1 flex-col cursor-pointer" htmlFor={inputId}>
        {label}
        <div className="rounded-tl rounded-bl p-3 text-gray-400 ">
          {selectedFile || selectedImage ? (
            <div>
              <img
                alt="not found"
                width={'250px'}
                src={selectedFile ? selectedFile : selectedImage}
              />
              <br />
              <button
                onClick={() => {
                  setSelectedFile('');
                }}
              >
                Remove
              </button>
            </div>
          ) : (
            <img src={inputImage} alt="input image" />
          )}
        </div>
        <input
          type="file"
          className={'hidden'}
          id={inputId}
          onChange={filePreview}
        />
      </label>
      {hintMessage}
    </div>
  );
};

export default UploadAndDisplayImage;

import { FC, useState } from 'react';
import inputImage from '../../../assets/img/input.svg';

interface FileUploaddProps {
  label: string;
  inputId: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  hint?: string;
}

const UploadAndDisplayImage: FC<FileUploaddProps> = ({
  label,
  inputId,
  hint,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const hintMessage = <span className="text-xs text-gray-500">{hint}</span>;

  return (
    <div>
      <label className="flex gap-1 flex-col" htmlFor={inputId}>
        {label}
        <div className="rounded-tl rounded-bl p-3 text-gray-400 ">
          {selectedImage ? (
            <div>
              <img
                alt="not found"
                width={'250px'}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          ) : (
            <img src={inputImage} alt="input image" />
          )}
        </div>

        <input
          type="file"
          id={inputId}
          onChange={event => {
            console.log(event.target.files ? event.target.files[0] : 'nothing');
            event.target.files && setSelectedImage(event.target.files[0]);
          }}
        />
      </label>
      {hintMessage}
    </div>
  );
};

export default UploadAndDisplayImage;

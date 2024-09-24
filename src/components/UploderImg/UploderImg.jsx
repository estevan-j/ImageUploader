import './UploderImg.css';
import UploadIcon from '../../assets/icons/exit.svg';
import { useRef } from 'react';

const UploderImg = ({ onFileChange}) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      onFileChange(event.target.files[0]);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  return (
    <div className='box-upload'>
      <img src={UploadIcon} alt='exit' />
      <p>Drag & drop a file or <a href="#" onClick={handleClick}>browse files</a></p>
      <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/jpeg, image/png, image/gif"
        />
      <span>JPG, PNG, or GIF - Max file size 2MB</span>
    </div>
  );
};

export default UploderImg;
import { useState } from "react";
import UploaderImg from "../UploderImg/UploderImg";
import "./Container.css";
import LoadingBar from "../LoadingBar/LoadingBar";
import ImgContainer from "../ImgContainer/ImgContainer";

const Container = ({ darkMode }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (file) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedFile(file);
      setLoading(false);
    }, 2000);
  };

  return (
    <section id="body-page">
      <div className={`box ${darkMode ? "darkBox" : ""}`}>
        {!selectedFile && !loading && (
          <UploaderImg onFileChange={handleFileChange} />
        )}
        {loading && <LoadingBar/>}
        {selectedFile && !loading && (
          <ImgContainer file={selectedFile} />
        )}
      </div>
    </section>
  );
};

export default Container;
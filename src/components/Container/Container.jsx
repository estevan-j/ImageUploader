import { useState } from "react";
import UploaderImg from "../UploderImg/UploderImg";
import "./Container.css";
import LoadingBar from "../LoadingBar/LoadingBar";
import ImgContainer from "../ImgContainer/ImgContainer";
import Button from "../Button/Button";
import Share from "../icons/Share";
import Download from "../icons/Download";

const Container = ({ darkMode }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (file) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setLoading(false);
    }, 2000);
  };

  const handleShareImg = async () => {
    if (!imageUrl) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Compartir Imagen",
          text: "Mira esta imagen increíble",
          url: imageUrl,
        });
        console.log("Imagen compartida exitosamente");
      } catch (error) {
        console.error("Error al compartir la imagen:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(imageUrl);
        alert("URL de la imagen copiada al portapapeles");
      } catch (error) {
        console.error("Error al copiar la URL:", error);
      }
    }
  };

  const handleDownloadImg = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "imagen.jpg"; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="body-page">
      <div className={`box ${darkMode ? "darkBox" : ""}`}>
        {!selectedFile && !loading && (
          <UploaderImg onFileChange={handleFileChange} />
        )}
        {loading && <LoadingBar />}
        {selectedFile && !loading && <ImgContainer file={selectedFile} />}
      </div>
      {selectedFile && !loading && (
        <div className="container-btn">
          <Button
            type="button"
            onClick={handleShareImg}
          >
            <Share />
            Share
          </Button>
          <Button
            type="button"
            onClick={handleDownloadImg}
          >
            <Download />
            Download
          </Button>
        </div>
      )}
    </section>
  );
};

export default Container;

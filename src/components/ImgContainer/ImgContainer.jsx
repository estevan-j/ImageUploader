const ImgContainer = ({ file }) => {
  const imageUrl = URL.createObjectURL(file);
  const bodies   =   "gatos";
  return (
    <img
      src={imageUrl}
      alt="img"
      style={{ width: "100%", height: "100%", borderRadius: "10px" }}
    />
  );
};

export default ImgContainer;

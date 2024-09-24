import "./LoadingBar.css";
const LoadingBar = () => {
  return (
    <div className="container-loading">
      <h4>
        Uploading<span>, please wait...</span>
      </h4>
      <div className="loading-bar">
        <div className="loading-bar-fill"></div>
      </div>
    </div>
  );
};

export default LoadingBar;

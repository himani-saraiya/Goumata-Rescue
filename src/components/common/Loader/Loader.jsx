import "./Loader.css";

const Loader = ({
  size = "medium",
  text = "Loading...",
}) => {
  return (
    <div className={`loader loader-${size}`}>
      <span className="loader-spinner"></span>

      {text && <p>{text}</p>}
    </div>
  );
};

export default Loader;
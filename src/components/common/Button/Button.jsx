import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <span className="btn-spinner"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        {showCloseButton && (
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        )}

        {title && <h2 className="modal-title">{title}</h2>}

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
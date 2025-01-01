interface Props {
  show: boolean;
  title: string;
  description: string;
  long_description: string;
  img_src: string;
  img_alt: string;
  onClose: () => void;
}

const Modal = ({
  show,
  title,
  description,
  long_description,
  img_src,
  img_alt,
  onClose,
}: Props) => {
  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{long_description}</p>
            <img
              src={"/projects/" + img_src}
              className="img-fluid"
              alt={img_alt}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

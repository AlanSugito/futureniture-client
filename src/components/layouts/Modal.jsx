import PropTypes from "prop-types";

const Modal = ({ children }) => {
  return (
    <div className="inset-0 bg-black/55 fixed z-[99999999999] centerize">
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;

import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white  rounded-lg relative w-full max-w-4xl mx-4 overflow-auto h-auto m-60">
        <button onClick={onClose} className="absolute top-0 right-0 p-4">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

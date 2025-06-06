import React from "react";

// A reusable Modal Component from ChatGPT4o. I would have written it myself but I am running a fever.

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-grey-10 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-3xl text-grey-80 hover:text-primary-100"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;


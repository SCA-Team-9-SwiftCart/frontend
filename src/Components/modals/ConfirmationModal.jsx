import React from "react";

const ConfirmationModal = ({
  onClose,
  onProceed,
  title,
  message,
  buttonText,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onProceed();
    onClose();
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold uppercase py-4 text-center">
          {title}
        </h2>
        <p className="text-center pb-3">{message}</p>
        <button
          type="submit"
          className="w-full py-4 rounded-[4px] font-semibold bg-black text-white"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ConfirmationModal;

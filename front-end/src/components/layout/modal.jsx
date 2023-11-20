import React, { useState } from "react";

export const Modal = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Modal Example</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Abrir Modal
      </button>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <span
              className="absolute top-0 right-0 p-4 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <p>Contenido del modal</p>
          </div>
        </div>
      )}
    </div>
  );
};

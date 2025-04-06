import './App.css';
import React, { useState } from 'react';
import PopupModal from '../src/comonant/popup/PopupModal';
import SampleForm from '../src/comonant/page/loginform';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Open Form Popup
      </button>

      <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Fill the Form</h2>
        <SampleForm />
      </PopupModal>
    </div>
  );
};

export default App;

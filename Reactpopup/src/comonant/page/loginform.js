import React, { useState } from 'react';

const SampleForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form data here if needed
    setShowPopup(true);
    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto">
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
      </form>

      {showPopup && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded mt-4 shadow-lg">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default SampleForm;

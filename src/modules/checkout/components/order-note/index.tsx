// OrderNotesStep.jsx
import React, { useState } from 'react';

const OrderNote = ({ onNext, orderNote, setOrderNote }) => {
  const handleNext = () => {
    // You can perform any validation or additional logic here before proceeding to the next step
    onNext();
  };

  return (
    <div>
      <h2>Order Note</h2>
      <textarea
        value={orderNote}
        onChange={(e) => setOrderNote(e.target.value)}
        placeholder="Enter your order notes..."
        rows={5}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default OrderNote;

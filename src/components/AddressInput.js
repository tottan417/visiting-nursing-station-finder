import React from 'react';

const AddressInput = ({ tempAddress, setTempAddress }) => {
  const handleChange = (e) => {
    setTempAddress(e.target.value);
  };

  return (
    <div>
      <label>住所: </label>
      <input
        type="text"
        value={tempAddress}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddressInput;

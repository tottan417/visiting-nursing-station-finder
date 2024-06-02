import React from 'react';

const AddressInput = ({ address, setAddress }) => {
  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <label>住所: </label>
      <input
        type="text"
        value={address}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddressInput;

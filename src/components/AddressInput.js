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
        placeholder='000-0000'
      />
    </div>
  );
};

export default AddressInput;

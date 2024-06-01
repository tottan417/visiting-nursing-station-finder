import React from 'react';

const AddressInput = ({ address, setAddress }) => {
  return (
    <div>
      <label>住所: </label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
};

export default AddressInput;

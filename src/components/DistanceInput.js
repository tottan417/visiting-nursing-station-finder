import React from 'react';

const DistanceInput = ({ distance, setDistance }) => {
  const handleChange = (e) => {
    setDistance(e.target.value);
  };

  return (
    <div>
      <label>表示距離(km): </label>
      <input
        type="text"
        value={distance}
        onChange={handleChange}
      />
    </div>
  );
};

export default DistanceInput;

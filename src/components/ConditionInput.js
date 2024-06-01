import React from 'react';

const ConditionInput = ({ conditions, selectedConditions, setSelectedConditions }) => {
  const handleCheckboxChange = (condition) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };

  return (
    <div>
      <label>条件: </label>
      {conditions.map((condition) => (
        <div key={condition}>
          <input
            type="checkbox"
            checked={selectedConditions.includes(condition)}
            onChange={() => handleCheckboxChange(condition)}
          />
          {condition}
        </div>
      ))}
    </div>
  );
};

export default ConditionInput;

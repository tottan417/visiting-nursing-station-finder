import React from 'react';

const SerchInput = ({ serch, setSerch }) => {

  return (
    <div>
      <label>検索: </label>
      <input
        type="text"
        value={serch}
        placeholder='準備中'
      />
    </div>
  );
};

export default SerchInput;

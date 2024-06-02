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
    <div class='ConditionInput'>
      <ul>
        <label>対応可能な看護・ケア</label>
          <li>
            <input type="checkbox" checked={selectedConditions.includes('精神科訪問看護')} onChange={() => handleCheckboxChange('精神科訪問看護')}/>精神科訪問看護
          </li>
          <li>
            <input type="checkbox" checked={selectedConditions.includes('小児訪問看護')} onChange={() => handleCheckboxChange('小児訪問看護')}/>小児訪問看護
          </li>
          <li>
            <input type="checkbox" checked={selectedConditions.includes('がん緩和ケア')} onChange={() => handleCheckboxChange('がん緩和ケア')}/>がん緩和ケア
          </li>
        </ul>
        <ul>
          <label>リハビリ対応</label>
          <li>
            <input type="checkbox" checked={selectedConditions.includes('PT')} onChange={() => handleCheckboxChange('PT')}/>PT
          </li>
          <li>
            <input type="checkbox" checked={selectedConditions.includes('OT')} onChange={() => handleCheckboxChange('OT')}/>OT
          </li>
          <li>
            <input type="checkbox" checked={selectedConditions.includes('ST')} onChange={() => handleCheckboxChange('ST')}/>ST
          </li>
        </ul>
        <ul>
          <label>その他</label>
          <li>
            <input type="checkbox" checked={selectedConditions.includes('24時間対応体制')} onChange={() => handleCheckboxChange('24時間対応体制')}/>24時間対応体制
          </li>
          <li>
            <input type="checkbox" checked={selectedConditions.includes('機能強化型訪問看護管理養育費の届出')} onChange={() => handleCheckboxChange('機能強化型訪問看護管理養育費の届出')}/>機能強化型訪問看護管理養育費の届出
          </li>
      </ul>
    </div>
  );
};

export default ConditionInput;

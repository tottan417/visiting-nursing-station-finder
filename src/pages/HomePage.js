import React, { useState, useEffect } from 'react';
import AddressInput from '../components/AddressInput';
import ConditionInput from '../components/ConditionInput';
import StationList from '../components/StationList';
import { fetchNursingStations } from '../api/nursingStations';
import '../styles/HomePage.css';

const HomePage = () => {
  const [address, setAddress] = useState('');
  const [conditions] = useState(['精神科訪問看護', '小児訪問看護', 'がん緩和ケア', 'PT', 'OT', 'ST', "24時間対応体制", "機能強化型訪問看護管理養育費の届出"]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [stations, setStations] = useState([]);
  const [showConditions] = useState(true);

  useEffect(() => {
    if (true) {
      const results = fetchNursingStations(address, selectedConditions);
      setStations(results);
    }
  }, [selectedConditions, address]);

  return (
    <div className="home-page">
      <h1>兵庫県訪問看護ステーション検索</h1>
      <AddressInput address={address} setAddress={setAddress} />
      {showConditions && (
        <>
          <ConditionInput 
            conditions={conditions} 
            selectedConditions={selectedConditions} 
            setSelectedConditions={setSelectedConditions} 
          />
          <StationList stations={stations} />
        </>
      )}
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import { fetchNursingStations, filterNursingStations } from '../api/nursingStations';
import BeforeRead from '../components/BeforeRead';
import AddressInput from '../components/AddressInput';
import SearchInput from '../components/SearchInput';
import DistanceInput from '../components/DistanceInput';
import ConditionInput from '../components/ConditionInput';
import StationList from '../components/StationList';
import '../styles/HomePage.css';

const HomePage = () => {
  const [address, setAddress] = useState('');
  const [serch, setSearch] = useState('');
  const [distance, setDistance] = useState(3);
  const [conditions] = useState(['精神科訪問看護', '小児訪問看護', 'がん緩和ケア', 'PT', 'OT', 'ST', "24時間対応体制", "機能強化型訪問看護管理養育費の届出"]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [stations, setStations] = useState([]);
  const [filterStations, setFilterStations] = useState([]);
  const [showConditions, setShowConditions] = useState(false);

  const handleSearch = () => {
    const results = fetchNursingStations(address, 1000000);
    setStations(results);
    setSelectedConditions([]);
    setShowConditions(true);
  };

  useEffect(() => {
      const results = filterNursingStations(stations, distance, selectedConditions);
      setFilterStations(results);
  }, [stations, distance, selectedConditions]);

  return (
    <div className="home-page">
      <h1>兵庫県訪問看護ステーション検索</h1>
      <AddressInput address={address} setAddress={setAddress} />
      <button onClick={handleSearch}>検索</button>
      
      {showConditions ? (
        <>
          <div class='searchAndDistance'>
            <SearchInput serch={serch} setSearch={setSearch} />
            <DistanceInput distance={distance} setDistance={setDistance} />
          </div>
          <ConditionInput 
            conditions={conditions} 
            selectedConditions={selectedConditions} 
            setSelectedConditions={setSelectedConditions} 
          />
          <StationList filterStations={filterStations} />
        </>
      ) : (
        <BeforeRead />
      )}
    </div>
  );
};

export default HomePage;

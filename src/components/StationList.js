import React from 'react';

const StationList = ({ stations }) => {
  if (stations.length === 0) {
    return <p>該当する看護ステーションがありません。</p>;
  }

  return (
    <div>
      <h2>看護ステーション一覧</h2>
      <ul>
        {stations.map((station, index) => (
          <li key={index}>
            <h3>{station["事業所名称(開設主体)"]}</h3>
            <p>住所: {station["事業所所在地"]}</p>
            <p>電話番号: {station["連絡先"]}</p>
            
            <p>併設事業: {station["併設事業"]}</p>
            <p>営業日・営業時間: {station["営業日・営業時間"]}</p>
            <p>距離: {station.distance.toFixed(2)} km</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationList;

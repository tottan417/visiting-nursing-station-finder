import React from 'react';

const StationList = ({ filterStations }) => {
  if (filterStations.length === 0) {
    return <p>該当する看護ステーションがありません。</p>;
  }

  return (
    <div>
      <h2>看護ステーション一覧</h2>
      <ul>
        {filterStations.map((station, index) => (
          <li key={index}>
            <div class="box">
            <h3>{station["事業所名称(開設主体)"]}</h3>
            <p>住所: {station["事業所所在地"]}</p>
            <p>電話番号: {station["連絡先"]}</p>
            
            <p>併設事業: {station["併設事業"]}</p>
            <p>営業日・営業時間: {station["営業日・営業時間"]}</p>
            <p>距離: {station.distance.toFixed(2)} km</p>
            <table border='1'>
              <tr>
                <th>精神科訪問看護</th>
                <th>小児訪問看護</th>
                <th>がん緩和ケア</th>
                <th>PT</th>
                <th>OT</th>
                <th>ST</th>
                <th>24時間対応体制</th>
                <th>機能強化型訪問看護管理養育費の届出</th>
              </tr>
              <tr>
                <td>{station["精神科訪問看護"]}</td>
                <td>{station["小児訪問看護"]}</td>
                <td>{station["がん緩和ケア"]}</td>
                <td>{station["PT"]}</td>
                <td>{station["OT"]}</td>
                <td>{station["ST"]}</td>
                <td>{station["24時間対応体制"]}</td>
                <td>{station["機能強化型訪問看護管理養育費の届出"]}</td>
              </tr>
            </table>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StationList;

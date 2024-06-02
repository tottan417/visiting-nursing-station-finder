import nursingStations from '../data/nursingStations.json';
import postalData from '../data/postalData.json';

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // 地球の半径 (キロメートル)
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon1 - lon2) * (Math.PI / 180); // 修正：経度の計算を修正
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // 距離 (キロメートル)
};

const getCoordinatesFromPostalCode = (postalCode) => {
  return postalData[postalCode];
};

export const fetchNursingStations = (address, distance) => {
  const postalCodeMatch = address.match(/\d{3}-?\d{4}/); // 郵便番号を抽出（ハイフンの有無に対応）
  if (!postalCodeMatch) {
    console.log("郵便番号が見つかりません");
    return [];
  }

  const postalCode = postalCodeMatch[0].replace('-', '');
  const coordinates = getCoordinatesFromPostalCode(postalCode);
  
  if (!coordinates) {
    console.log(`座標が見つかりません: ${postalCode}`);
    return [];
  }

  const [lat, lon] = coordinates;
  console.log(`検索された住所の座標: ${lat}, ${lon}`);

  const filteredStations = nursingStations
    .map(station => {
      const stationPostalCode = station["郵便番号"].replace('-', '');
      const stationCoordinates = getCoordinatesFromPostalCode(stationPostalCode);
      if (!stationCoordinates) {
        console.log(`ステーションの座標が見つかりません: ${stationPostalCode}`);
        return null;
      }
      const [stationLat, stationLon] = stationCoordinates;
      const distance = calculateDistance(lat, lon, stationLat, stationLon);
      return { ...station, distance };
    })
    .filter(station => station !== null && station.distance <= distance)
    .sort((a, b) => a.distance - b.distance);

  console.log("フィルタリング後のステーション: ", filteredStations);
  return filteredStations;
};

export const filterNursingStations = (stations, distance, selectedConditions) => {
  const filteredStations = stations
    .filter(station => {
      if (selectedConditions.length === 0) return true; // 条件がない場合はすべてのステーションを返す
      return selectedConditions.every(cond => station[cond] === 'o' || station[cond] === '特' || station[cond] === 'Ⅰ' || station[cond] === 'Ⅱ');
    })
    .filter(station => station.distance <= distance)

  return filteredStations;
}
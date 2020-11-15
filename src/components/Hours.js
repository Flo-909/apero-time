import React, { useEffect, useState } from 'react'
import City from './City'
import moment from 'moment-timezone';
import '../App.css';

function Hours() {
  const [citiesData, setCitiesData] = useState([])
  const [loading, setLoading] = useState(true)

  let cityList = (
    citiesData.map((city, i) => {
      return (<City key={i}
        cityName={city.cityName}
        time={city.time}
      />)
    })
  )

  const calculateTime = () => {
    const zones = moment.tz.names()
    zones.map((zone, i) => {
      const a = moment.utc(Date.now()).tz(zone);
      const currentTime = a.format('HH:mm')
      if (currentTime > "18:00" && currentTime < "19:00") {
        citiesData.push({ cityName: zone, time: currentTime })
      }
    })
  }

  useEffect(() => {
    calculateTime()
    setTimeout(function () {
      setLoading(false);
    }, 2200);
  }, [])



  return (
    <div>
      <div className="title-container">
        <p>
          It's always <span className='time'>18h</span> somewhere !!!
        </p>
        <p>
          It's time to <span className='drink'>drink</span> for :
        </p>
      </div>
      <div>
        {loading ?
          <div className="giphy">
            <iframe src="https://giphy.com/embed/ZbC2FTbi0r7QdDJws7" className="iframe" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          : cityList}
      </div>
    </div>
  );
}

export default Hours;

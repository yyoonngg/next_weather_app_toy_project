import React from 'react'

const WeatherInfo = ({weather}: any) => {
    let src
    if(weather){
        src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    }
  return (
    <div>
        <div>
            <h2>{weather?.name}</h2>
            <div>{weather?.main.temp}°</div>
        </div>
        <div>
            <img src={weather?src:""}/>
            <div>{weather?.weather[0].description}</div>
        </div>
    </div>
  )
}

export default WeatherInfo
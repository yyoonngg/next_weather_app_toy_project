import React from 'react'

const WeeklyWeather = ({dayWeather}: any) => {
  return (
    <>
        {dayWeather && dayWeather.map((item: any)=>{
            let day = item.dt;
            let date = new Date(day*1000);
            let dateOfWeek = date.toString().split(' ')[0].toUpperCase();
            let imgSrc = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            if(item.dt != dayWeather[0].dt){
                return(<div>
                    <div>{dateOfWeek}</div>
                    <img src={imgSrc}/>
                    <div>{Math.floor(item.main.temp_min)}° ~ {Math.floor(item.main.temp_max)}°</div>
                </div>)
            }}
        )}
    </>
        
  )
}

export default WeeklyWeather
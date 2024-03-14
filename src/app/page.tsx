"use client"
import WeatherInfo from "@/component/weatherInfo";
import WeeklyWeather from "@/component/weeklyWeather";
import { list } from "postcss";
import { List } from "postcss/lib/list";
import { useState, useEffect } from "react";
import "./globals.css";
import 'tailwindcss/tailwind.css';

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [weeklyWeatherData, setWeeklyWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=> {
    // 현재 위치의 위도, 경도 검색
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        fetchWeatherData(lat, lon);
        getWeatherByDay(lat, lon);
      });
    };

    // 오늘 날씨
    const fetchWeatherData = async (lat: number, lon: number) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}&units=metric`);
        if(!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        console.log("data:", data);
        setWeatherData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    // 주간 날씨
    const getWeatherByDay = async (lat: number, lon: number) => {
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}&units=metric&cnt=7`);
        if(!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        console.log("data:", data);
        setWeeklyWeatherData(data.list);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    getCurrentLocation();
  }, []);

  if(loading) {
    return <div>Loading</div>
  }
  
  if(error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1 className="bg-blue-500 text-white p-4 rounded-lg">이이</h1>
      {loading == false && (
        <>
          <WeatherInfo weather={weatherData} />
          <WeeklyWeather dayWeather={weeklyWeatherData} />
        </>
      )}
    </div>
  );
}
export default WeatherPage;

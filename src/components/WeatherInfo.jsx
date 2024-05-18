import React from "react";
import { LuSun } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BsThermometerHalf } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
import { WiBarometer } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { TbWindmill } from "react-icons/tb";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";


function WeatherInfo({ data, kelvinToCelsius, metersToKilometers, mpsToKmph }) {
  return (
    <div className="weather-container">
      <div className="weather-top">
        <div className="weather-icon">
          <div>
            <LuSun />
          </div>
        </div>
        <div className="weather-details">
          <div className="weather-location">
            <div className="location-icon">
              <FaLocationDot />
            </div>
            <div className="location-name">
              {data.name && <div>{data.name}, {data.sys.country}</div>}
            </div> </div>
          <div className="weather-temp">
            {data.main && <div>{kelvinToCelsius(data.main.temp)}°C</div>}
          </div>
        </div>
      </div>
      <div className="weather-bottom">
        <div className="weather-desc">
          {data.weather && data.weather[0] && (
            <div>{data.weather[0].description.toUpperCase()}</div>
          )}
        </div>


        <div className="weather-box1">
          <div className="lbox">
            {data.main && (
              <div><BsThermometerHalf /> Feels Like: {kelvinToCelsius(data.main.feels_like)} °C</div>
            )}
          </div>
          <div className="rbox">
            {data.main && <div><WiHumidity /> Humidity: {data.main.humidity}%</div>}
          </div>
        </div>



        <div className="weather-box2">
          <div className="lbox">
            <FaEye /> Visibility:
            <span> {data.visibility && metersToKilometers(data.visibility)} km</span>
          </div>
          <div className="rbox">
            {data.main && <div><WiBarometer /> Pressure: {data.main.pressure} mbar</div>}
          </div>
        </div>




        <div className="weather-box3">
          {data.wind && (
            <>
              <div className="lbox"><BiWind /> Wind Speed: {mpsToKmph(data.wind.speed)} km/h</div>
              <div className="rbox"><TbWindmill /> Wind Degree: {data.wind.deg}°</div>
            </>
          )}
        </div>


        <div className="weather-box4">
          {data.main && (
            <div className="lbox"><FaTemperatureArrowDown /> Temp Min: {kelvinToCelsius(data.main.temp_min)} °C</div>
          )}
          {data.main && (
            <div className="rbox"><FaTemperatureArrowUp /> Temp Max: {kelvinToCelsius(data.main.temp_max)} °C</div>
          )}
        </div>


      </div>
    </div>
  );
}

export default WeatherInfo;

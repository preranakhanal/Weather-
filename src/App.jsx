import { useState } from "react";
import './App.css';
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { WiCloud, WiDaySunny, WiRain, WiSnow, WiThunderstorm, WiFog, WiThermometer, WiDirectionDown, WiDirectionUp, WiThermometerExterior } from "react-icons/wi";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  const handleSearch = async () => {
    if (!city) return;

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
     // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.get(url);
      const data = await response.data
      console.log(data);
      if (data.cod === 200) {
        setWeather(data); // Store the entire data object
      } else {
        setWeather(null);
        alert("City not found");
      }
    } catch (error) {
     setWeather(null);
    if (error.response && error.response.status === 404) {
      alert("City not found. Please check the spelling or try another city.");
    } else {
      alert("An error occurred. Please try again later.");
    }
    console.error("Error fetching weather data:", error);
  }
};

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();}
          }}
      />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weather && weather.sys && (
        <div>
          <div className="weather-result">
            <h2>
              <FaMapMarkerAlt style={{ color: "#74ebd5", marginRight: 8, verticalAlign: "middle" }} />
              {weather.name}, {weather.sys.country}
            </h2>
            <div style={{ fontSize: "3.5rem", margin: "12px 0" }}>
              {weather.weather[0].main === "Clouds" && <WiCloud />}
              {weather.weather[0].main === "Clear" && <WiDaySunny />}
              {weather.weather[0].main === "Rain" && <WiRain />}
              {weather.weather[0].main === "Snow" && <WiSnow />}
              {weather.weather[0].main === "Thunderstorm" && <WiThunderstorm />}
              {weather.weather[0].main === "Mist" && <WiFog />}
              {/* Add more as needed */}
            </div>
            <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <WiThermometer style={{ marginRight: 8 }} />
              {weather.main.temp}°C
            </div>
            <div style={{ fontSize: "1.2rem", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {weather.weather[0].main === "Clouds" && <WiCloud style={{ marginRight: 6 }} />}
              {weather.weather[0].main === "Clear" && <WiDaySunny style={{ marginRight: 6 }} />}
              {weather.weather[0].main === "Rain" && <WiRain style={{ marginRight: 6 }} />}
              {weather.weather[0].main === "Snow" && <WiSnow style={{ marginRight: 6 }} />}
              {weather.weather[0].main === "Thunderstorm" && <WiThunderstorm style={{ marginRight: 6 }} />}
              {weather.weather[0].main === "Mist" && <WiFog style={{ marginRight: 6 }} />}
              {weather.weather[0].main} - {weather.weather[0].description}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 16 }}>
              <div style={{ textAlign: "center" }}>
                <WiDirectionDown size={32} color="#74ebd5" />
                <div style={{ fontWeight: 600 }}>{weather.main.temp_min}°C</div>
                <div style={{ fontSize: "0.9rem", color: "#888" }}>Min</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <WiDirectionUp size={32} color="#f39c12" />
                <div style={{ fontWeight: 600 }}>{weather.main.temp_max}°C</div>
                <div style={{ fontSize: "0.9rem", color: "#888" }}>Max</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <WiThermometerExterior size={32} color="#e67e22" />
                <div style={{ fontWeight: 600 }}>{weather.main.feels_like}°C</div>
                <div style={{ fontSize: "0.9rem", color: "#888" }}>Feels Like</div>
              </div>
            </div>
          </div>

          {/* Week Forecast - static */}
          

          {/* Highlights */}
          <h3 style={{ marginTop: 32 }}>Today's Highlights</h3>
          <div className="highlights-grid">
            {/* UV Index - Placeholder */}
            <div className="highlight-card">
              <h4>Sea Level</h4>
               <span className="big">{weather.main.sea_level}%</span>
              <div className="highlight-value">
                <span role="img" aria-label="UV"></span>
                <span className="big"></span>
              </div>
            </div>
            {/* Wind Status */}
            <div className="highlight-card">
              <h4>Wind Status</h4>
              <div className="highlight-value">
                <span className="big">{weather.wind.speed}</span> m/s
                <div>{weather.wind.deg}°</div>
              </div>
            </div>
            {/* Sunrise & Sunset */}
            <div className="highlight-card">
              <h4>Sunrise & Sunset</h4>
              <div className="highlight-value">
                <div>
                  <span role="img" aria-label="sunrise">🌅</span>
                  <span style={{ fontWeight: 600, fontSize: "1.2rem", marginLeft: 4 }}>
                    {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div>
                  <span role="img" aria-label="sunset">🌇</span>
                  <span style={{ fontWeight: 600, fontSize: "1.2rem", marginLeft: 4 }}>
                    {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
            {/* Humidity */}
            <div className="highlight-card">
              <h4>Humidity</h4>
              <div className="highlight-value">
                <span className="big">{weather.main.humidity}%</span>
                <div>Normal 👍</div>
              </div>
            </div>
            {/* Visibility */}
            <div className="highlight-card">
              <h4>Visibility</h4>
              <div className="highlight-value">
                <span className="big">{(weather.visibility / 1000).toFixed(1)}</span> km
                <div>Average 😊</div>
              </div>
            </div>
            {/* Air Quality - Placeholder */}
            <div className="highlight-card">
              <h4>Air Quality</h4>
              <div className="highlight-value">
                <span className="big">--</span>
                <div>Unknown</div>
              </div>
            </div>
          </div>

          {weather.coord && (
        <div style={{ margin: "32px 0px", display: "flex", justifyContent: "center" }}>
          <iframe
            title="map"
            width="90%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${weather.coord.lon-0.1}%2C${weather.coord.lat-0.1}%2C${weather.coord.lon+0.1}%2C${weather.coord.lat+0.1}&layer=mapnik&marker=${weather.coord.lat}%2C${weather.coord.lon}`}
          ></iframe>
        </div>
)}
        </div>
      )}
    </div>
  );
}

export default App;
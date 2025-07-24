import { useState, useReducer, useEffect } from 'react';
import Themetoggle from './Themetoggle.jsx';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ACTIONS = {
    DARK: "dark",
    LIGHT: "light",
    TOGGLE: "toggle",
  };

  // Initialize state from localStorage or prefer-color-scheme
  const initialState = { 
    mode: localStorage.getItem('theme') || 
          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  };

  function modeReducer(state, action) {
    let newMode;
    switch (action.type) {
      case ACTIONS.DARK:
        newMode = "dark";
        break;
      case ACTIONS.LIGHT:
        newMode = "light";
        break;
      case ACTIONS.TOGGLE:
        newMode = state.mode === "light" ? "dark" : "light";
        break;
      default:
        return state;
    }
    
    localStorage.setItem('theme', newMode);
    return { mode: newMode };
  }
  
  const [state, dispatch] = useReducer(modeReducer, initialState);

  // Apply theme class to body
  useEffect(() => {
    document.body.className = state.mode;
  }, [state.mode]);

  const handleSearch = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results?.length) {
        throw new Error('City not found');
      }

      const { latitude, longitude } = geoData.results[0];
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      setWeather(await weatherResponse.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav>
        <Themetoggle 
          func={() => dispatch({ type: ACTIONS.TOGGLE })} 
          isDark={state.mode === "dark"} 
        />
      </nav>
      <div className={`${state.mode} container`}>
        <input
          className="input-field"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button 
          className="search-button" 
          onClick={handleSearch} 
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>

        {error && <div className="error">{error}</div>}

        {weather && (
          <div className="weather-result">
            <h2>Weather in {city}</h2>
            <p>Temperature: {weather.current_weather.temperature}°C</p>
            <p>Wind: {weather.current_weather.windspeed} km/h</p>
          </div>
        )}
      </div>
    </>
  );
}
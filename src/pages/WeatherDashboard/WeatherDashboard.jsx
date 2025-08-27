import { useEffect, useState } from "react"
import "./WeatherDashboard.css"

import { Sun, CloudRain, CloudSun, Droplets, Wind, Gauge, Search } from "lucide-react"
import { fetchWeatherApi } from "openmeteo"

const tabs = [
  { id: "temperature", label: "Temperatura", icon: Sun },
  { id: "precipitation", label: "Precipitação", icon: CloudRain },
  { id: "wind", label: "Vento", icon: Wind },
  { id: "aqi", label: "IQA", icon: Gauge },
]

export default function WeatherDashboard() {
  const [activeTab, setActiveTab] = useState("aqi")
  const [searchCity, setSearchCity] = useState("")
  const [currentCity, setCurrentCity] = useState("São Paulo, São Paulo")
  const [weatherData, setWeatherData] = useState({
    current: {
      time: "",
      temperature: "",
      humidity: "",
      precipitation: "",
      rain: "",
      wind_speed: "",
      aqi: "",
    },
    forecast: {
      day: [],
      temp_max: "",
      temp_min: "",
      precipitation: "",
      wind_speed: "",
    },
    aqiDetails: {
      value: "",
      status: "",
      description:
        "",
    },
  })

  const handleSearch = async (e) => {
    e.preventDefault()

    if (searchCity.trim()) {
      const { location, state, latitude, longitude } = await geoCoding(searchCity.trim())
      weather(latitude, longitude)

      setCurrentCity(`${location}, ${state}`)
      setSearchCity("")
    }
  }

  const getAQIPosition = (value) => {
    return Math.min((value / 400) * 100, 100)
  }

  const url = "https://api.open-meteo.com/v1/forecast";

  const weather = async (latitude, longitude) => {
    const params = {
      "latitude": latitude,
      "longitude": longitude,
      "daily": ["temperature_2m_max", "temperature_2m_min", "precipitation_probability_max", "wind_speed_10m_max", "rain_sum"],
      "current": ["temperature_2m", "relative_humidity_2m", "precipitation", "rain", "wind_speed_10m"],
      "timezone": "America/Sao_Paulo",
    };

    const responses = await fetchWeatherApi(url, params);
    const response = responses[0]

    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current();
    const daily = response.daily();

    const dateTime = () => {
      const date = new Date((Number(current.time()) + utcOffsetSeconds) * 1000)
      return new Intl.DateTimeFormat("pt-BR", { weekday: "long", hour: "2-digit", hour12: true }).format(date)
    }

    setWeatherData({
      current: {
        time: dateTime(),
        temperature: parseFloat(current.variables(0).value()).toFixed(1),
        humidity: parseFloat(current.variables(1).value()).toFixed(1),
        precipitation: parseFloat(current.variables(2).value()).toFixed(1),
        rain: parseFloat(current.variables(3).value()).toFixed(1),
        wind_speed: parseFloat(current.variables(4).value()).toFixed(1),
        aqi: 67,
      },
      forecast: {
        day: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
          (_, i) => {
            const date = new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
            return new Intl.DateTimeFormat("pt-BR", { weekday: 'short', day: "2-digit" }).format(date).replace(".", "")
          }
        ),
        temp_max: daily.variables(0).valuesArray(),
        temp_min: daily.variables(1).valuesArray(),
        precipitation: daily.variables(2).valuesArray(),
        wind_speed: daily.variables(3).valuesArray(),
        rain: daily.variables(4).valuesArray(),
      },
      aqiDetails: {
        value: 120,
        status: "Ruim",
        description:
          "O ar atingiu um alto nível de poluição e não é saudável para grupos sensíveis. Reduza o tempo gasto ao ar livre se estiver sentindo sintomas como dificuldade para respirar ou irritação na garganta",
      },
    })
  }

  const geoCoding = async (city) => {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}+&count=1&language=en&format=json&countryCode=BR`)

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const data = await response.json()

      const state = data.results[0].admin1
      const location = data.results[0].name
      const latitude = data.results[0].latitude
      const longitude = data.results[0].longitude

      return { location, state, latitude, longitude }
    } catch (error) {
      alert("Não foi possivel realizar pesquisa por cidade.")
    }
  }

  useEffect(() => {
    weather(-23.5475, -46.63611)
  }, [])

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="weather-content">

          {/* Search city */}
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-wrapper">
                <Search className="search-icon" />
                <input
                  type="text"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  placeholder="Pesquisar cidade..."
                  className="search-input"
                />
                <button type="submit" className="search-button">
                  Buscar
                </button>
              </div>
            </form>
          </div>

          {/* Header */}
          <div className="weather-header">
            <div className="weather-location">
              <h1>{currentCity}</h1>
              <p>{weatherData.current.time}</p>
            </div>
            <div className="weather-metrics">
              <div className="metric-item">
                <Gauge className="metric-icon" />
                <span>IQA: {weatherData.current.aqi}</span>
              </div>
              <div className="metric-item">
                <Droplets className="metric-icon" />
                <span>Umidade: {weatherData.current.humidity}%</span>
              </div>
              <div className="metric-item">
                <CloudRain className="metric-icon" />
                <span>Precipitação: {weatherData.current.precipitation}%</span>
              </div>
              <div className="metric-item">
                <Wind className="metric-icon" />
                <span>Vento: {weatherData.current.wind_speed} mph</span>
              </div>
            </div>
          </div>

          {/* Current Weather */}
          <div className="current-weather">
            {weatherData.current.precipitation > 0.2 ? (
              <CloudRain className="weather-icon cloudRain" />
            ) : (
              <Sun className="weather-icon" />
            )
            }
            <div className="temperature-display">
              <span className="temperature-main">{weatherData.current.temperature}</span>
              <div className="temperature-units">
                <span className="celsius">°C</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="weather-tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                >
                  <Icon className="tab-icon" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* AQI Content */}
          {activeTab === "aqi" && (
            <div className="aqi-content">
              <div className="aqi-value">
                <span className="aqi-number">{weatherData.aqiDetails.value}</span>
                <span className="aqi-status">{weatherData.aqiDetails.status}</span>
              </div>

              <p className="aqi-description">{weatherData.aqiDetails.description}</p>

              {/* AQI Progress Bar */}
              <div className="aqi-progress-container">
                <div className="aqi-progress-bar">
                  <div
                    className="aqi-indicator"
                    style={{
                      left: `${getAQIPosition(weatherData.aqiDetails.value)}%`,
                    }}
                  />
                </div>
                <div className="aqi-scale">
                  <span>0</span>
                  <span>100</span>
                  <span>200</span>
                  <span>300</span>
                  <span>400+</span>
                </div>
              </div>
            </div>
          )}

          {/* 7-Day Forecast */}
          <div className="forecast-grid">
            {weatherData.forecast.day.map((day, index) => {
              const temp_max = parseFloat(weatherData.forecast.temp_max[index]).toFixed(1)
              const temp_min = parseFloat(weatherData.forecast.temp_min[index]).toFixed(1)

              let Icon = Sun
              let styleIcon = "sun"

              if (weatherData.forecast.precipitation[index] > 0.2) {
                Icon = CloudRain
                styleIcon = "cloud"
              } else if (weatherData.forecast.temp_max[index] < 20) {
                Icon = CloudSun
                styleIcon = "cloudSun"
              }

              return (
                <div key={index} className="forecast-day">
                  <div className="forecast-date">
                    {day}
                  </div>
                  <Icon className={`forecast-icon ${styleIcon}`} />
                  <div className="forecast-temps">
                    <div className="forecast-temp-high">{temp_max}°</div>
                    <div className="forecast-temp-low">{temp_min}°</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
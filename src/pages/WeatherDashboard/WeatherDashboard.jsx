import { useState } from "react"
import "./WeatherDashboard.css"

import { Sun, Cloud, CloudRain, Zap, CloudSnow, Droplets, Wind, Gauge, Search } from "lucide-react"

const weatherData = {
  location: "Cortes, Madrid, Spain",
  date: "Terça-feira, 3:00 PM",
  temperature: 49,
  metrics: {
    aqi: 67,
    humidity: 41,
    precipitation: 7,
    wind: 23,
  },
  aqiDetails: {
    value: 120,
    status: "Ruim",
    description:
      "O ar atingiu um alto nível de poluição e não é saudável para grupos sensíveis. Reduza o tempo gasto ao ar livre se estiver sentindo sintomas como dificuldade para respirar ou irritação na garganta",
  },
  forecast: [
    { day: "Sex", date: 27, icon: Sun, temp: 49, low: 28 },
    { day: "Sáb", date: 27, icon: Cloud, temp: 49, low: 28 },
    { day: "Dom", date: 27, icon: Zap, temp: 49, low: 28 },
    { day: "Seg", date: 27, icon: Sun, temp: 49, low: 28 },
    { day: "Ter", date: 27, icon: Sun, temp: 49, low: 28 },
    { day: "Qua", date: 27, icon: Sun, temp: 49, low: 28 },
    { day: "Qui", date: 27, icon: CloudSnow, temp: 49, low: 28 },
  ],
}


const tabs = [
  { id: "temperature", label: "Temperatura", icon: Sun },
  { id: "precipitation", label: "Precipitação", icon: CloudRain },
  { id: "wind", label: "Vento", icon: Wind },
  { id: "aqi", label: "IQA", icon: Gauge },
]

export default function WeatherDashboard() {

  const [activeTab, setActiveTab] = useState("aqi")
  const [searchCity, setSearchCity] = useState("")
  const [currentCity, setCurrentCity] = useState("Cortes, Madrid, Espanha")

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchCity.trim()) {
      setCurrentCity(searchCity.trim())
      setSearchCity("")
    }
  }

  const getAQIPosition = (value) => {
    return Math.min((value / 400) * 100, 100)
  }

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
              <h1>{weatherData.location}</h1>
              <p>{weatherData.date}</p>
            </div>
            <div className="weather-metrics">
              <div className="metric-item">
                <Gauge className="metric-icon" />
                <span>IQA: {weatherData.metrics.aqi}</span>
              </div>
              <div className="metric-item">
                <Droplets className="metric-icon" />
                <span>Umidade: {weatherData.metrics.humidity}%</span>
              </div>
              <div className="metric-item">
                <CloudRain className="metric-icon" />
                <span>Precipitação: {weatherData.metrics.precipitation}%</span>
              </div>
              <div className="metric-item">
                <Wind className="metric-icon" />
                <span>Vento: {weatherData.metrics.wind} mph</span>
              </div>
            </div>
          </div>

          {/* Current Weather */}
          <div className="current-weather">
            <Sun className="weather-icon" />
            <div className="temperature-display">
              <span className="temperature-main">{weatherData.temperature}</span>
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
            {weatherData.forecast.map((day, index) => {
              const Icon = day.icon
              return (
                <div key={index} className="forecast-day">
                  <div className="forecast-date">
                    {day.day} {day.date}
                  </div>
                  <Icon className="forecast-icon" />
                  <div className="forecast-temps">
                    <div className="forecast-temp-high">{day.temp}°</div>
                    <div className="forecast-temp-low">{day.low}°</div>
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
// This component is responsible for rendering the weather data for a given city
import React from 'react'
import { useEffect, useState } from 'react'



const Card = () => {
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState(0)
  const [input, setInput] = useState('London')
  const [descritpion, setDescription] = useState('')
  const [icon, setIcon] = useState('')
  const [wind, setWind] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [pressure, setPressure] = useState(0)
  const [sunrise, setSunrise] = useState(0)
  const [sunset, setSunset] = useState(0)

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7b208aaa4d97d289fc48b418ed4019a4`)
      const data = await response.json()
      setCity(data.name)  
      setTemp(data.main.temp)
      setDescription(data.weather[0].description)
      setIcon(data.weather[0].icon)
      setWind(data.wind.speed)
      setHumidity(data.main.humidity)
      setPressure(data.main.pressure)
      setSunrise(data.sys.sunrise)
      setSunset(data.sys.sunset)
    }
    getWeather()
  
  }, [input])

  function handleInput(e) {
    setInput(e.target.value)
  }

  return (
    <div className="card">
      <div className="card__header">
        <h1 className="card__title">{city}</h1>
        <input className="card__input" type="text" onChange={handleInput} />
      </div>
      <div className="card__body">
        <div className="card__temp">
          <h2 className="card__temp--title">Temperature</h2>
          <p className="card__temp--value">{temp}°C</p>
        </div>
        <div className="card__description">
          <h2 className="card__description--title">Description</h2>
          <p className="card__description--value">{descritpion}</p>
        </div>
        <div className="card__icon">
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
        </div>
        <div className="card__wind">
          <h2 className="card__wind--title">Wind</h2>
          <p className="card__wind--value">{wind} m/s</p>
        </div>
        <div className="card__humidity">
          <h2 className="card__humidity--title">Humidity</h2>
          <p className="card__humidity--value">{humidity}%</p>
        </div>
        <div className="card__pressure">
          <h2 className="card__pressure--title">Pressure</h2>
          <p className="card__pressure--value">{pressure} hPa</p>
        </div>
        <div className="card__sunrise">
          <h2 className="card__sunrise--title">Sunrise</h2>
          <p className="card__sunrise--value">{sunrise}</p>
        </div>
        <div className="card__sunset">
          <h2 className="card__sunset--title">Sunset</h2>
          <p className="card__sunset--value">{sunset}</p>
        </div>
      </div>
    </div>
  )
  

}
export default Card


// DOM
const input = document.querySelector("input")
const buttonShow = document.querySelector("button");
const cityName = document.querySelector(".w-card h3")
const tempH1 = document.querySelector(".temp h1")
const img = document.querySelector(".temp img")
const p = document.querySelectorAll(".w-card p")
const p1 = p[0]
const p2 = p[1]
const p3 = p[2]
// REST API
const apiKey = "&appid=6511e14723ad8cb6f243ece1366c5deb"
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q="

buttonShow.onclick = () => {
  fetchWeather(input.value)
}

function fetchWeather(city_name = "USA") {
  fetch(baseURL + city_name + apiKey)
    .then(res => res.json())
    .then(data => {
      console.log(data, '----data----');
      const { name, sys, main, weather, wind } = data
      cityName.innerHTML = `${name} <span>${sys.country}</span>`;
      tempH1.innerHTML = `${~~(main.temp - 273.15)} <span>°c</span>`
      p1.innerHTML = `${weather[0].main}`
      img.src = setImg(weather[0].main)
    })
    .catch()
}

fetchWeather()

function setImg(text) {
  switch (text) {
    case "Rain":
      return "./images/rain2.png"
    case "Clouds":
      return "./images/rain.png"
  }
}
// Поиск
// Картинки погоды
// Перевод
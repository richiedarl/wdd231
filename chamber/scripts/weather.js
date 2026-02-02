const weatherContainer = document.querySelector("#current-weather");
const forecastContainer = document.querySelector("#forecast");

const lat = 6.2104;   // Awka latitude
const lon = 7.0741;   // Awka longitude
const apiKey = "0ed929b7670b7afc2e5649cc96f255cb";

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    weatherContainer.innerHTML = `
      <p><strong>${Math.round(data.main.temp)}°C</strong></p>
      <p>${data.weather[0].description}</p>
    `;
  } catch (error) {
    console.error("Weather error:", error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastURL);
    const data = await response.json();

    const days = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    forecastContainer.innerHTML = "";
    days.forEach(day => {
      const date = new Date(day.dt_txt);
      forecastContainer.innerHTML += `
        <p>${date.toLocaleDateString("en-US", { weekday: "long" })}: 
        <strong>${Math.round(day.main.temp)}°C</strong></p>
      `;
    });
  } catch (error) {
    console.error("Forecast error:", error);
  }
}

getWeather();
getForecast();

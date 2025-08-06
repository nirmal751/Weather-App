async function getWeather() {
  const city = document.getElementById("city-input").value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "d9af099bc8f49d5b907c6effbd041d30"; // 🔑 Replace with your real API key from OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("temperature").textContent = `🌡️ ${data.main.temp}°C`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weather-card").style.display = "block";
  } catch (error) {
    alert("Error: " + error.message);
    document.getElementById("weather-card").style.display = "none";
  }
}

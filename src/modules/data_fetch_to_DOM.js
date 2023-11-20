async function fetchDataAndEditDom(locationName) {
    const location = document.getElementById('location');
    const localTime = document.getElementById('local-time');
    const temp = document.getElementById('temp');
    const condition = document.getElementById('condition');
    const weatherIcon = document.getElementById('weather-icon');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const rainRate = document.getElementById('rain-rate');
    const windSpeed = document.getElementById('wind-speed');

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=76777b5c36eb4241bab173914231411&q=${locationName}`, {
        mode: 'cors'
    });
   const data = await response.json();

   location.innerHTML = data.location.name;
   localTime.innerHTML = data.location.localtime;
   temp.innerHTML = `${data.current.temp_c} °C`;
   condition.innerHTML = data.current.condition.text;
   weatherIcon.src = data.current.condition.icon;
   feelsLike.innerHTML = `${data.current.feelslike_c} °C`
   humidity.innerHTML = `${data.current.humidity} %`
   rainRate.innerHTML = `${data.current.precip_mm} mm`
   windSpeed.innerHTML = `${data.current.wind_kph} km/hr`

    for (const obj of data.forecast.forecastday[0].hour) {
        const values = document.createElement("div");
        const forecastTime = document.createElement("div");
        const forecastTemp = document.createElement("div");
        const forecastWeatherIcon = document.createElement("img");
        const forecastWeather = document.createElement("div");

        values.className = "forecast-container";

        const time = obj.time.split("").slice(10).join("")

        forecastTime.innerHTML = time;
        forecastTemp.innerHTML = `${obj.temp_c} °C`
        forecastWeatherIcon.src = obj.condition.icon;
        forecastWeather.innerHTML = obj.condition.text;

        values.appendChild(forecastTime);
        values.appendChild(forecastTemp);
        values.appendChild(forecastWeatherIcon);
        values.appendChild(forecastWeather)

        const forecastValues = document.getElementById("forecast-values")
        forecastValues.appendChild(values);
    }
}

export default fetchDataAndEditDom;
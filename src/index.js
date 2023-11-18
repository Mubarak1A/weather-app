

async function getWeatherData(){
    const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=76777b5c36eb4241bab173914231411&q=minna", {
        mode: 'cors'
    });
   const data = await response.json();
   console.log(data)
}

getWeatherData();
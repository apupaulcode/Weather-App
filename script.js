const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');



async function checkWeather(city){
    const API_KEY = '0a1868d83a33dcbe2c63fedbe64f0681';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const weatherData = await fetch(`${URL}`).then( response => response.json());

    temperature.innerHTML =  `${Math.round(weatherData.main.temp - 273.15)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/hr`;


    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImg.src = '/images/cloud.png'
        case 'Clear':
            weatherImg.src = '/images/clear.png'
        case 'Rain':
            weatherImg.src = '/images/rain.png'
        case 'Mist':
            weatherImg.src = '/images/mist.png'
        case 'Snow':
            weatherImg.src = '/images/snow.png'    
        default:
            break;
    }

    console.log(weatherData);
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})
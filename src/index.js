import './sass/styles.scss';
import apiService from './js/apiService';


const weatherBox = document.querySelector('.weather-box');

apiService.fetchWeather()
.then(data => {console.log(data),
    render(data)
})



function render (data) {
   const temp = roundTemp(data.main.temp);
    weatherBox.innerHTML = `<h2>${data.name}</h2>
    <p>Температура: ${temp}°</p>
    <p>${data.weather[0].description}</p>
    <p><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" width="100" height="100"></p>`
}

function roundTemp (temp) {
    return Math.round(+temp);
}

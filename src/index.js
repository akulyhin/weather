import './sass/styles.scss';
import apiService from './js/apiService';
import refs from './js/refs';
import debounce from 'lodash.debounce'


refs.searchCity.addEventListener('input', debounce((e) => {
    localStorage.removeItem("city");
    localStorage.setItem("city", e.target.value);
    location.href = location.href;
  }, 500));


  if (localStorage.getItem('city')) {

apiService.fetchWeather()
.then(data => {console.log(data),
    render(data)
})

} else {
    alert('Введите город')
}

function render (data) {
   const temp = roundTemp(data.main.temp);
   const feels = roundTemp(data.main.feels_like);
    refs.weatherBox.innerHTML = `<h2>${data.name}</h2>
    <p>Температура: ${temp}°</p>
    <p>Ощущается: ${feels}°</p>
    <p>${data.weather[0].description}</p>
    <p><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" width="100" height="100"></p>`
}

function roundTemp (temp) {
    return Math.round(+temp);
}

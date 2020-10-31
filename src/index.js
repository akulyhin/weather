import './sass/styles.scss';
import apiService from './js/apiService';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import templateCurrentWeather from './templates/templateCurrentWeather.hbs';


refs.searchBtn.addEventListener('click', () => {
    localStorage.removeItem("city");
    localStorage.setItem("city", refs.searchCity.value);
    location.href = location.href;
  });


  if (localStorage.getItem('city')) {

apiService.fetchWeather()
.then(data => {console.log(data),
    render({ data })
})

} else {
    alert('Введите город')
}

function render (data) {
   refs.weatherBox.innerHTML = `${templateCurrentWeather(data)}`;
    const jsTemp = document.querySelectorAll('.js_temp');
    console.log(jsTemp);
    jsTemp.forEach(el => {
        roundTemp(el.textContent)
    })
}

function roundTemp (temp) {
    console.log(Math.round(+temp));
    
}


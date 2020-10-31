import './sass/styles.scss';
import apiService from './js/apiService';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import templateCurrentWeather from './templates/templateCurrentWeather.hbs';


refs.locationBtn.addEventListener('click', () => {
    apiService.geoLocation();
    location.href = location.href;
})


refs.searchBtn.addEventListener('click', () => {
    localStorage.removeItem("city");
    localStorage.setItem("city", refs.searchCity.value);
    location.href = location.href;
  });

  if (localStorage.getItem("city")) {
        apiService.fetchWeatherByCity()
         .then(data => {console.log(data),
            render({ data })
        })
    }

    else if (localStorage.getItem("latitude")) {
        apiService.fetchWeather()
            .then(data => {console.log(data),
            render({ data })
        })
    }

    else {
        console.log('Нет города')
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
    Math.round(+temp);
    
}


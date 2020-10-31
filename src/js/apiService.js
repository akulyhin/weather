import refs from './refs'



  let city = localStorage.getItem("city");


export default {

    query: `${city}`,
    apiKey: 'ff8084d11c7279450a985d59a31a6700',

    
    geoLocation() {
      const onGetPosition = location => {
        console.log(location)
        let latitude = location.coords.latitude;
        let longitude = location.coords.longitude;
        // console.log(latitude);
      }
      navigator.geolocation.getCurrentPosition(onGetPosition)
    },


    async fetchWeather() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&lang=ru&appid=${this.apiKey}`;
        const response = await fetch(url);
        
        return response.json();
      }
}
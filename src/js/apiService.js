export default {
    query: 'Kiev',
    // apiKey: 'ff8084d11c7279450a985d59a31a6700',
    apiKey: '090fc987cd5621140b25360d9b4c89d1',


    async fetchWeather() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&lang=ru&appid=${this.apiKey}`;
        const response = await fetch(url);
        
        return response.json();
      }
}
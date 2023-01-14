import buildCurrentWeather from "./buildCurrentWeather.js";

const body = document.querySelector('body');
body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';

const apiKey = 'd8033e3ce4b474f0551c060ad1faea40';
const sampleQuery = 'http://api.openweathermap.org/data/2.5/find?q=Palo+Alto&units=imperial&type=accurate&mode=xml&APPID=api-key'

async function fetchCity(city){
    let citySearch = city.replace(' ', '+')
    const response = await fetch('https://api.openweathermap.org/data/2.5/find?q=' + citySearch + '&units=metric&type=accurate&APPID=' + apiKey);
    const cityData = await response.json();
    console.log(cityData.list)
    buildCurrentWeather(cityData.list[0]);
    fetchForecast(cityData.list[0].id);
}

fetchCity('london');

async function fetchForecast(cityID){
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=metric&appid=" + apiKey);
    const forecastData = await response.json();
    console.log(forecastData)
}

function buildLongForecast(cityData) {}
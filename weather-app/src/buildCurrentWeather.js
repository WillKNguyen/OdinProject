import insertSVG from "./insertSVG.js";

export default function buildCurrentWeather(cityCurrentData){
    const content = document.querySelector('.content');
    content.innerHTML = "";

    const currentWeather = document.createElement('div');
    currentWeather.className = 'currentWeather';
    const city = document.createElement('div');
    city.innerHTML = cityCurrentData.name;
    city.className = 'city'
    const country = document.createElement('div');
    country.innerHTML = cityCurrentData.sys.country;
    const time = document.createElement('div');

    time.innerHTML = new Date().toUTCString(cityCurrentData.main.temp)

    const temp = document.createElement('div');
    temp.innerHTML = Math.round(cityCurrentData.main.temp) + ' °C';
    temp.className = 'temp';

    const pic = document.createElement('div');
    pic.innerHTML = insertSVG(cityCurrentData.weather[0].main);
    
    currentWeather.appendChild(city);
    currentWeather.appendChild(country);
    currentWeather.appendChild(time);
    currentWeather.appendChild(temp);
    currentWeather.appendChild(pic);
    
    content.appendChild(currentWeather);
}
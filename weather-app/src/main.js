import buildCurrentWeather from "./buildCurrentWeather.js";
import miscDataGenerator from "./miscDataGenerator.js";
import './style.css';

const body = document.querySelector('body');
body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';
const content = document.createElement('div');
content.className = 'content';
search();
body.appendChild(content);

const apiKey = 'd8033e3ce4b474f0551c060ad1faea40';
const sampleQuery = 'http://api.openweathermap.org/data/2.5/find?q=Palo+Alto&units=imperial&type=accurate&mode=xml&APPID=api-key'

async function fetchCity(city){
    let citySearch = city.replace(' ', '+')
    const response = await fetch('https://api.openweathermap.org/data/2.5/find?q=' + citySearch + '&units=metric&type=accurate&APPID=' + apiKey);
    const cityData = await response.json();
    try {
        console.log(cityData.list[0])
        if (cityData.list[0] ==undefined){
            throw console.error();
        }
    } catch (error) {
        alert("Cannot find location");
        return;
    }
    buildCurrentWeather(cityData.list[0])
    miscDataGenerator('Feels Like', cityData.list[0].main.feels_like)
    miscDataGenerator('Humidity', cityData.list[0].main.humidity)
}
fetchCity('Calgary');

function search(){
    const searchBar = document.createElement('div');

    const input = document.createElement('input');
    input.placeholder = 'Search Location...';
    const searchBtn = document.createElement('button');
    searchBtn.innerHTML = 'Search';

    searchBtn.addEventListener('click', function(){
        fetchCity(input.value);
    })

    searchBar.appendChild(input);
    searchBar.appendChild(searchBtn);
    document.body.appendChild(searchBar);
}
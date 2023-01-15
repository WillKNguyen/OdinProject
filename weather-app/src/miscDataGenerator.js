import insertSVG from "./insertSVG.js";

export default function miscDataGenerator(title, data) {
    const miscContainer = document.createElement('div');
    miscContainer.className = 'miscContainer';

    const textContainer = document.createElement('div');

    const top = document.createElement('div');
    top.innerHTML = title;
    
    function unit(title){
        if (title === "Humidity"){
            return "%";
        }
        return "°C"
    }

    const bottom = document.createElement('div');
    bottom.innerHTML = Math.round(data) + ' ' + unit(title);

    const pic = document.createElement('div');
    pic.innerHTML = insertSVG(title);

    textContainer.appendChild(top);
    textContainer.appendChild(bottom);
    miscContainer.appendChild(pic);
    miscContainer.appendChild(textContainer)

    const currentWeather = document.querySelector('.currentWeather');
    currentWeather.appendChild(miscContainer);
}
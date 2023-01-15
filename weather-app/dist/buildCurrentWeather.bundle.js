/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/insertSVG.js":
/*!**************************!*\
  !*** ./src/insertSVG.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertSVG)
/* harmony export */ });
function insertSVG(description){
    let weather = ['clouds', 'clear', 'rain', 'snow']
    let rain = "<svg viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59\" /></svg>";
    let clear = "<svg  viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z\" /></svg>"
    let snow = "<svg  viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14M7.88,18.07L10.07,17.5L8.46,15.88C8.07,15.5 8.07,14.86 8.46,14.46C8.85,14.07 9.5,14.07 9.88,14.46L11.5,16.07L12.07,13.88C12.21,13.34 12.76,13.03 13.29,13.17C13.83,13.31 14.14,13.86 14,14.4L13.41,16.59L15.6,16C16.14,15.86 16.69,16.17 16.83,16.71C16.97,17.24 16.66,17.79 16.12,17.93L13.93,18.5L15.54,20.12C15.93,20.5 15.93,21.15 15.54,21.54C15.15,21.93 14.5,21.93 14.12,21.54L12.5,19.93L11.93,22.12C11.79,22.66 11.24,22.97 10.71,22.83C10.17,22.69 9.86,22.14 10,21.6L10.59,19.41L8.4,20C7.86,20.14 7.31,19.83 7.17,19.29C7.03,18.76 7.34,18.21 7.88,18.07Z\" /></svg>"
    let clouds = "<svg  viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M6,19A5,5 0 0,1 1,14A5,5 0 0,1 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11A4,4 0 0,1 23,15A4,4 0 0,1 19,19H6M19,13H17V12A5,5 0 0,0 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11A3,3 0 0,0 3,14A3,3 0 0,0 6,17H19A2,2 0 0,0 21,15A2,2 0 0,0 19,13Z\" /></svg>"
    let feelsLikeSVG = "<svg  viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z\" /></svg>"
    let humiditySVG = "<svg  viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M19 5C17.89 5 17 5.89 17 7V13.76C16.36 14.33 16 15.15 16 16C16 17.66 17.34 19 19 19S22 17.66 22 16C22 15.15 21.64 14.33 21 13.77V7C21 5.89 20.11 5 19 5M19 6C19.55 6 20 6.45 20 7V8H18V7C18 6.45 18.45 6 19 6M8 3.54L7.25 4.38C7.25 4.38 5.97 5.83 4.68 7.71S2 11.84 2 14C2 17.31 4.69 20 8 20S14 17.31 14 14C14 11.84 12.61 9.59 11.32 7.71S8.75 4.38 8.75 4.38L8 3.54M8 6.67C8.44 7.19 8.84 7.62 9.68 8.84C10.89 10.6 12 12.84 12 14C12 16.22 10.22 18 8 18S4 16.22 4 14C4 12.84 5.11 10.6 6.32 8.84C7.16 7.62 7.56 7.19 8 6.67Z\" /></svg>";
    
    if (description.toLowerCase() === weather[0]){
        return clouds;
    }
    if (description.toLowerCase() === weather[1]){
        return clear;
    }
    if (description.toLowerCase() === weather[2]){
        return rain;
    }
    if (description.toLowerCase() === weather[3]){
        return snow;
    }
    if(description.toLowerCase() === "humidity"){
        return humiditySVG;
    }
    if(description.toLowerCase() === "feels like"){
        return feelsLikeSVG;
    }
    return clouds;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/buildCurrentWeather.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildCurrentWeather)
/* harmony export */ });
/* harmony import */ var _insertSVG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertSVG.js */ "./src/insertSVG.js");


function buildCurrentWeather(cityCurrentData){
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
    pic.innerHTML = (0,_insertSVG_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cityCurrentData.weather[0].main);
    
    currentWeather.appendChild(city);
    currentWeather.appendChild(country);
    currentWeather.appendChild(time);
    currentWeather.appendChild(temp);
    currentWeather.appendChild(pic);
    
    content.appendChild(currentWeather);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRDdXJyZW50V2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUN2QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbnNlcnRTVkcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9idWlsZEN1cnJlbnRXZWF0aGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydFNWRyhkZXNjcmlwdGlvbil7XHJcbiAgICBsZXQgd2VhdGhlciA9IFsnY2xvdWRzJywgJ2NsZWFyJywgJ3JhaW4nLCAnc25vdyddXHJcbiAgICBsZXQgcmFpbiA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTYsMTQuMDNBMSwxIDAgMCwxIDcsMTUuMDNDNywxNS41OCA2LjU1LDE2LjAzIDYsMTYuMDNDMy4yNCwxNi4wMyAxLDEzLjc5IDEsMTEuMDNDMSw4LjI3IDMuMjQsNi4wMyA2LDYuMDNDNywzLjY4IDkuMywyLjAzIDEyLDIuMDNDMTUuNDMsMi4wMyAxOC4yNCw0LjY5IDE4LjUsOC4wNkwxOSw4LjAzQTQsNCAwIDAsMSAyMywxMi4wM0MyMywxNC4yMyAyMS4yMSwxNi4wMyAxOSwxNi4wM0gxOEMxNy40NSwxNi4wMyAxNywxNS41OCAxNywxNS4wM0MxNywxNC40NyAxNy40NSwxNC4wMyAxOCwxNC4wM0gxOUEyLDIgMCAwLDAgMjEsMTIuMDNBMiwyIDAgMCwwIDE5LDEwLjAzSDE3VjkuMDNDMTcsNi4yNyAxNC43Niw0LjAzIDEyLDQuMDNDOS41LDQuMDMgNy40NSw1Ljg0IDcuMDYsOC4yMUM2LjczLDguMDkgNi4zNyw4LjAzIDYsOC4wM0EzLDMgMCAwLDAgMywxMS4wM0EzLDMgMCAwLDAgNiwxNC4wM00xMiwxNC4xNUMxMi4xOCwxNC4zOSAxMi4zNywxNC42NiAxMi41NiwxNC45NEMxMywxNS41NiAxNCwxNy4wMyAxNCwxOEMxNCwxOS4xMSAxMy4xLDIwIDEyLDIwQTIsMiAwIDAsMSAxMCwxOEMxMCwxNy4wMyAxMSwxNS41NiAxMS40NCwxNC45NEMxMS42MywxNC42NiAxMS44MiwxNC40IDEyLDE0LjE1TTEyLDExLjAzTDExLjUsMTEuNTlDMTEuNSwxMS41OSAxMC42NSwxMi41NSA5Ljc5LDEzLjgxQzguOTMsMTUuMDYgOCwxNi41NiA4LDE4QTQsNCAwIDAsMCAxMiwyMkE0LDQgMCAwLDAgMTYsMThDMTYsMTYuNTYgMTUuMDcsMTUuMDYgMTQuMjEsMTMuODFDMTMuMzUsMTIuNTUgMTIuNSwxMS41OSAxMi41LDExLjU5XFxcIiAvPjwvc3ZnPlwiO1xyXG4gICAgbGV0IGNsZWFyID0gXCI8c3ZnICB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTEyLDdBNSw1IDAgMCwxIDE3LDEyQTUsNSAwIDAsMSAxMiwxN0E1LDUgMCAwLDEgNywxMkE1LDUgMCAwLDEgMTIsN00xMiw5QTMsMyAwIDAsMCA5LDEyQTMsMyAwIDAsMCAxMiwxNUEzLDMgMCAwLDAgMTUsMTJBMywzIDAgMCwwIDEyLDlNMTIsMkwxNC4zOSw1LjQyQzEzLjY1LDUuMTUgMTIuODQsNSAxMiw1QzExLjE2LDUgMTAuMzUsNS4xNSA5LjYxLDUuNDJMMTIsMk0zLjM0LDdMNy41LDYuNjVDNi45LDcuMTYgNi4zNiw3Ljc4IDUuOTQsOC41QzUuNSw5LjI0IDUuMjUsMTAgNS4xMSwxMC43OUwzLjM0LDdNMy4zNiwxN0w1LjEyLDEzLjIzQzUuMjYsMTQgNS41MywxNC43OCA1Ljk1LDE1LjVDNi4zNywxNi4yNCA2LjkxLDE2Ljg2IDcuNSwxNy4zN0wzLjM2LDE3TTIwLjY1LDdMMTguODgsMTAuNzlDMTguNzQsMTAgMTguNDcsOS4yMyAxOC4wNSw4LjVDMTcuNjMsNy43OCAxNy4xLDcuMTUgMTYuNSw2LjY0TDIwLjY1LDdNMjAuNjQsMTdMMTYuNSwxNy4zNkMxNy4wOSwxNi44NSAxNy42MiwxNi4yMiAxOC4wNCwxNS41QzE4LjQ2LDE0Ljc3IDE4LjczLDE0IDE4Ljg3LDEzLjIxTDIwLjY0LDE3TTEyLDIyTDkuNTksMTguNTZDMTAuMzMsMTguODMgMTEuMTQsMTkgMTIsMTlDMTIuODIsMTkgMTMuNjMsMTguODMgMTQuMzcsMTguNTZMMTIsMjJaXFxcIiAvPjwvc3ZnPlwiXHJcbiAgICBsZXQgc25vdyA9IFwiPHN2ZyAgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIGQ9XFxcIk02LDE0QTEsMSAwIDAsMSA3LDE1QTEsMSAwIDAsMSA2LDE2QTUsNSAwIDAsMSAxLDExQTUsNSAwIDAsMSA2LDZDNywzLjY1IDkuMywyIDEyLDJDMTUuNDMsMiAxOC4yNCw0LjY2IDE4LjUsOC4wM0wxOSw4QTQsNCAwIDAsMSAyMywxMkE0LDQgMCAwLDEgMTksMTZIMThBMSwxIDAgMCwxIDE3LDE1QTEsMSAwIDAsMSAxOCwxNEgxOUEyLDIgMCAwLDAgMjEsMTJBMiwyIDAgMCwwIDE5LDEwSDE3VjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUEzLDMgMCAwLDAgNiwxNE03Ljg4LDE4LjA3TDEwLjA3LDE3LjVMOC40NiwxNS44OEM4LjA3LDE1LjUgOC4wNywxNC44NiA4LjQ2LDE0LjQ2QzguODUsMTQuMDcgOS41LDE0LjA3IDkuODgsMTQuNDZMMTEuNSwxNi4wN0wxMi4wNywxMy44OEMxMi4yMSwxMy4zNCAxMi43NiwxMy4wMyAxMy4yOSwxMy4xN0MxMy44MywxMy4zMSAxNC4xNCwxMy44NiAxNCwxNC40TDEzLjQxLDE2LjU5TDE1LjYsMTZDMTYuMTQsMTUuODYgMTYuNjksMTYuMTcgMTYuODMsMTYuNzFDMTYuOTcsMTcuMjQgMTYuNjYsMTcuNzkgMTYuMTIsMTcuOTNMMTMuOTMsMTguNUwxNS41NCwyMC4xMkMxNS45MywyMC41IDE1LjkzLDIxLjE1IDE1LjU0LDIxLjU0QzE1LjE1LDIxLjkzIDE0LjUsMjEuOTMgMTQuMTIsMjEuNTRMMTIuNSwxOS45M0wxMS45MywyMi4xMkMxMS43OSwyMi42NiAxMS4yNCwyMi45NyAxMC43MSwyMi44M0MxMC4xNywyMi42OSA5Ljg2LDIyLjE0IDEwLDIxLjZMMTAuNTksMTkuNDFMOC40LDIwQzcuODYsMjAuMTQgNy4zMSwxOS44MyA3LjE3LDE5LjI5QzcuMDMsMTguNzYgNy4zNCwxOC4yMSA3Ljg4LDE4LjA3WlxcXCIgLz48L3N2Zz5cIlxyXG4gICAgbGV0IGNsb3VkcyA9IFwiPHN2ZyAgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIGQ9XFxcIk02LDE5QTUsNSAwIDAsMSAxLDE0QTUsNSAwIDAsMSA2LDlDNyw2LjY1IDkuMyw1IDEyLDVDMTUuNDMsNSAxOC4yNCw3LjY2IDE4LjUsMTEuMDNMMTksMTFBNCw0IDAgMCwxIDIzLDE1QTQsNCAwIDAsMSAxOSwxOUg2TTE5LDEzSDE3VjEyQTUsNSAwIDAsMCAxMiw3QzkuNSw3IDcuNDUsOC44MiA3LjA2LDExLjE5QzYuNzMsMTEuMDcgNi4zNywxMSA2LDExQTMsMyAwIDAsMCAzLDE0QTMsMyAwIDAsMCA2LDE3SDE5QTIsMiAwIDAsMCAyMSwxNUEyLDIgMCAwLDAgMTksMTNaXFxcIiAvPjwvc3ZnPlwiXHJcbiAgICBsZXQgZmVlbHNMaWtlU1ZHID0gXCI8c3ZnICB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTE1IDEzVjVBMyAzIDAgMCAwIDkgNVYxM0E1IDUgMCAxIDAgMTUgMTNNMTIgNEExIDEgMCAwIDEgMTMgNVY4SDExVjVBMSAxIDAgMCAxIDEyIDRaXFxcIiAvPjwvc3ZnPlwiXHJcbiAgICBsZXQgaHVtaWRpdHlTVkcgPSBcIjxzdmcgIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiBkPVxcXCJNMTkgNUMxNy44OSA1IDE3IDUuODkgMTcgN1YxMy43NkMxNi4zNiAxNC4zMyAxNiAxNS4xNSAxNiAxNkMxNiAxNy42NiAxNy4zNCAxOSAxOSAxOVMyMiAxNy42NiAyMiAxNkMyMiAxNS4xNSAyMS42NCAxNC4zMyAyMSAxMy43N1Y3QzIxIDUuODkgMjAuMTEgNSAxOSA1TTE5IDZDMTkuNTUgNiAyMCA2LjQ1IDIwIDdWOEgxOFY3QzE4IDYuNDUgMTguNDUgNiAxOSA2TTggMy41NEw3LjI1IDQuMzhDNy4yNSA0LjM4IDUuOTcgNS44MyA0LjY4IDcuNzFTMiAxMS44NCAyIDE0QzIgMTcuMzEgNC42OSAyMCA4IDIwUzE0IDE3LjMxIDE0IDE0QzE0IDExLjg0IDEyLjYxIDkuNTkgMTEuMzIgNy43MVM4Ljc1IDQuMzggOC43NSA0LjM4TDggMy41NE04IDYuNjdDOC40NCA3LjE5IDguODQgNy42MiA5LjY4IDguODRDMTAuODkgMTAuNiAxMiAxMi44NCAxMiAxNEMxMiAxNi4yMiAxMC4yMiAxOCA4IDE4UzQgMTYuMjIgNCAxNEM0IDEyLjg0IDUuMTEgMTAuNiA2LjMyIDguODRDNy4xNiA3LjYyIDcuNTYgNy4xOSA4IDYuNjdaXFxcIiAvPjwvc3ZnPlwiO1xyXG4gICAgXHJcbiAgICBpZiAoZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKSA9PT0gd2VhdGhlclswXSl7XHJcbiAgICAgICAgcmV0dXJuIGNsb3VkcztcclxuICAgIH1cclxuICAgIGlmIChkZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpID09PSB3ZWF0aGVyWzFdKXtcclxuICAgICAgICByZXR1cm4gY2xlYXI7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKSA9PT0gd2VhdGhlclsyXSl7XHJcbiAgICAgICAgcmV0dXJuIHJhaW47XHJcbiAgICB9XHJcbiAgICBpZiAoZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKSA9PT0gd2VhdGhlclszXSl7XHJcbiAgICAgICAgcmV0dXJuIHNub3c7XHJcbiAgICB9XHJcbiAgICBpZihkZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpID09PSBcImh1bWlkaXR5XCIpe1xyXG4gICAgICAgIHJldHVybiBodW1pZGl0eVNWRztcclxuICAgIH1cclxuICAgIGlmKGRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkgPT09IFwiZmVlbHMgbGlrZVwiKXtcclxuICAgICAgICByZXR1cm4gZmVlbHNMaWtlU1ZHO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb3VkcztcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluc2VydFNWRyBmcm9tIFwiLi9pbnNlcnRTVkcuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQ3VycmVudFdlYXRoZXIoY2l0eUN1cnJlbnREYXRhKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjdXJyZW50V2VhdGhlci5jbGFzc05hbWUgPSAnY3VycmVudFdlYXRoZXInO1xyXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2l0eS5pbm5lckhUTUwgPSBjaXR5Q3VycmVudERhdGEubmFtZTtcclxuICAgIGNpdHkuY2xhc3NOYW1lID0gJ2NpdHknXHJcbiAgICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb3VudHJ5LmlubmVySFRNTCA9IGNpdHlDdXJyZW50RGF0YS5zeXMuY291bnRyeTtcclxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICB0aW1lLmlubmVySFRNTCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoY2l0eUN1cnJlbnREYXRhLm1haW4udGVtcClcclxuXHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZW1wLmlubmVySFRNTCA9IE1hdGgucm91bmQoY2l0eUN1cnJlbnREYXRhLm1haW4udGVtcCkgKyAnIMKwQyc7XHJcbiAgICB0ZW1wLmNsYXNzTmFtZSA9ICd0ZW1wJztcclxuXHJcbiAgICBjb25zdCBwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBpYy5pbm5lckhUTUwgPSBpbnNlcnRTVkcoY2l0eUN1cnJlbnREYXRhLndlYXRoZXJbMF0ubWFpbik7XHJcbiAgICBcclxuICAgIGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKGNpdHkpO1xyXG4gICAgY3VycmVudFdlYXRoZXIuYXBwZW5kQ2hpbGQoY291bnRyeSk7XHJcbiAgICBjdXJyZW50V2VhdGhlci5hcHBlbmRDaGlsZCh0aW1lKTtcclxuICAgIGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKHRlbXApO1xyXG4gICAgY3VycmVudFdlYXRoZXIuYXBwZW5kQ2hpbGQocGljKTtcclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcik7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
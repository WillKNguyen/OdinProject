/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hotdog1.jpeg":
/*!**************************!*\
  !*** ./src/hotdog1.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01ade2f0e17ba70860d7.jpeg";

/***/ }),

/***/ "./src/hotdog2.jpg":
/*!*************************!*\
  !*** ./src/hotdog2.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63ebc35b399eedcecd91.jpg";

/***/ }),

/***/ "./src/hotdog3.jpg":
/*!*************************!*\
  !*** ./src/hotdog3.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1526d0dfd86126b31225.jpg";

/***/ }),

/***/ "./src/hotdog4.jpg":
/*!*************************!*\
  !*** ./src/hotdog4.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7d382edbb45fe956095.jpg";

/***/ }),

/***/ "./src/hotdog5.jpg":
/*!*************************!*\
  !*** ./src/hotdog5.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d2af0deb4b10e1188ce.jpg";

/***/ }),

/***/ "./src/hotdog6.jpg":
/*!*************************!*\
  !*** ./src/hotdog6.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab26bd94b9482515ae4f.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _hotdog1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotdog1.jpeg */ "./src/hotdog1.jpeg");
/* harmony import */ var _hotdog2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotdog2.jpg */ "./src/hotdog2.jpg");
/* harmony import */ var _hotdog3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotdog3.jpg */ "./src/hotdog3.jpg");
/* harmony import */ var _hotdog4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotdog4.jpg */ "./src/hotdog4.jpg");
/* harmony import */ var _hotdog5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotdog5.jpg */ "./src/hotdog5.jpg");
/* harmony import */ var _hotdog6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotdog6.jpg */ "./src/hotdog6.jpg");







function createMenu(){
    const menu = document.createElement('div');
    menu.className ='menu';

    const item1 = document.createElement('div');
    const item1IMG = new Image();
    item1IMG.className = 'menupic';
    const item1Desc = document.createElement('div');
    item1IMG.src = _hotdog1_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    item1Desc.innerHTML = 'Hot dog and bun'
    item1.appendChild(item1IMG);
    item1.appendChild(item1Desc);

    const item2 = document.createElement('div');
    const item2IMG = new Image();
    item2IMG.className = 'menupic';
    const item2Desc = document.createElement('div');
    item2IMG.src = _hotdog2_jpg__WEBPACK_IMPORTED_MODULE_1__;
    item2Desc.innerHTML = 'Yup, more hot dog and bun';
    item2.appendChild(item2IMG);
    item2.appendChild(item2Desc);

    const item3 = document.createElement('div');
    const item3IMG = new Image();
    item3IMG.className = 'menupic';
    const item3Desc = document.createElement('div');
    item3IMG.src = _hotdog3_jpg__WEBPACK_IMPORTED_MODULE_2__;
    item3Desc.innerHTML = 'The same hot dog and bun';
    item3.appendChild(item3IMG);
    item3.appendChild(item3Desc);

    const item4 = document.createElement('div');
    const item4IMG = new Image();
    item4IMG.className = 'menupic';
    const item4Desc = document.createElement('div');
    item4IMG.src = _hotdog4_jpg__WEBPACK_IMPORTED_MODULE_3__;
    item4Desc.innerHTML = 'hot dog and bun 2';
    item4.appendChild(item4IMG);
    item4.appendChild(item4Desc);

    const item5 = document.createElement('div');
    const item5IMG = new Image();
    item5IMG.className = 'menupic';
    const item5Desc = document.createElement('div');
    item5IMG.src = _hotdog5_jpg__WEBPACK_IMPORTED_MODULE_4__;
    item5Desc.innerHTML = 'Yup, more hot dog and bun x2';
    item5.appendChild(item5IMG);
    item5.appendChild(item5Desc);

    const item6 = document.createElement('div');
    const item6IMG = new Image();
    item6IMG.className = 'menupic';
    const item6Desc = document.createElement('div');
    item6IMG.src = _hotdog6_jpg__WEBPACK_IMPORTED_MODULE_5__;
    item6Desc.innerHTML = 'You know what it is';
    item6.appendChild(item6IMG);
    item6.appendChild(item6Desc);

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menu.appendChild(item6);

    return menu;
}   
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm1DO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNsQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUNBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpY29uMSBmcm9tICcuL2hvdGRvZzEuanBlZyc7XHJcbmltcG9ydCBpY29uMiBmcm9tICcuL2hvdGRvZzIuanBnJztcclxuaW1wb3J0IGljb24zIGZyb20gJy4vaG90ZG9nMy5qcGcnO1xyXG5pbXBvcnQgaWNvbjQgZnJvbSAnLi9ob3Rkb2c0LmpwZyc7XHJcbmltcG9ydCBpY29uNSBmcm9tICcuL2hvdGRvZzUuanBnJztcclxuaW1wb3J0IGljb242IGZyb20gJy4vaG90ZG9nNi5qcGcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc05hbWUgPSdtZW51JztcclxuXHJcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaXRlbTFJTUcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGl0ZW0xSU1HLmNsYXNzTmFtZSA9ICdtZW51cGljJztcclxuICAgIGNvbnN0IGl0ZW0xRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbTFJTUcuc3JjID0gaWNvbjE7XHJcbiAgICBpdGVtMURlc2MuaW5uZXJIVE1MID0gJ0hvdCBkb2cgYW5kIGJ1bidcclxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW0xSU1HKTtcclxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW0xRGVzYyk7XHJcblxyXG4gICAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGl0ZW0ySU1HID0gbmV3IEltYWdlKCk7XHJcbiAgICBpdGVtMklNRy5jbGFzc05hbWUgPSAnbWVudXBpYyc7XHJcbiAgICBjb25zdCBpdGVtMkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW0ySU1HLnNyYyA9IGljb24yO1xyXG4gICAgaXRlbTJEZXNjLmlubmVySFRNTCA9ICdZdXAsIG1vcmUgaG90IGRvZyBhbmQgYnVuJztcclxuICAgIGl0ZW0yLmFwcGVuZENoaWxkKGl0ZW0ySU1HKTtcclxuICAgIGl0ZW0yLmFwcGVuZENoaWxkKGl0ZW0yRGVzYyk7XHJcblxyXG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGl0ZW0zSU1HID0gbmV3IEltYWdlKCk7XHJcbiAgICBpdGVtM0lNRy5jbGFzc05hbWUgPSAnbWVudXBpYyc7XHJcbiAgICBjb25zdCBpdGVtM0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW0zSU1HLnNyYyA9IGljb24zO1xyXG4gICAgaXRlbTNEZXNjLmlubmVySFRNTCA9ICdUaGUgc2FtZSBob3QgZG9nIGFuZCBidW4nO1xyXG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNJTUcpO1xyXG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNEZXNjKTtcclxuXHJcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaXRlbTRJTUcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGl0ZW00SU1HLmNsYXNzTmFtZSA9ICdtZW51cGljJztcclxuICAgIGNvbnN0IGl0ZW00RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbTRJTUcuc3JjID0gaWNvbjQ7XHJcbiAgICBpdGVtNERlc2MuaW5uZXJIVE1MID0gJ2hvdCBkb2cgYW5kIGJ1biAyJztcclxuICAgIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00SU1HKTtcclxuICAgIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00RGVzYyk7XHJcblxyXG4gICAgY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGl0ZW01SU1HID0gbmV3IEltYWdlKCk7XHJcbiAgICBpdGVtNUlNRy5jbGFzc05hbWUgPSAnbWVudXBpYyc7XHJcbiAgICBjb25zdCBpdGVtNURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW01SU1HLnNyYyA9IGljb241O1xyXG4gICAgaXRlbTVEZXNjLmlubmVySFRNTCA9ICdZdXAsIG1vcmUgaG90IGRvZyBhbmQgYnVuIHgyJztcclxuICAgIGl0ZW01LmFwcGVuZENoaWxkKGl0ZW01SU1HKTtcclxuICAgIGl0ZW01LmFwcGVuZENoaWxkKGl0ZW01RGVzYyk7XHJcblxyXG4gICAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGl0ZW02SU1HID0gbmV3IEltYWdlKCk7XHJcbiAgICBpdGVtNklNRy5jbGFzc05hbWUgPSAnbWVudXBpYyc7XHJcbiAgICBjb25zdCBpdGVtNkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW02SU1HLnNyYyA9IGljb242O1xyXG4gICAgaXRlbTZEZXNjLmlubmVySFRNTCA9ICdZb3Uga25vdyB3aGF0IGl0IGlzJztcclxuICAgIGl0ZW02LmFwcGVuZENoaWxkKGl0ZW02SU1HKTtcclxuICAgIGl0ZW02LmFwcGVuZENoaWxkKGl0ZW02RGVzYyk7XHJcblxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtMSk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW0yKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTMpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtNCk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW01KTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTYpO1xyXG5cclxuICAgIHJldHVybiBtZW51O1xyXG59ICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
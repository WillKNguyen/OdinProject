/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(task, currentProject, projectList){
    const tasklist = document.querySelector('.tasklist');
    
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
  
    //option to change task name
    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.value = task.name;
    taskName.addEventListener('change', function(e){
        task.name = taskName.value;
        localStorage.setItem('projectList', JSON.stringify(projectList));
    })

    //option to change priority
    const taskPriority = document.createElement('select');
    let priorities =['Low', 'Medium', 'High'];
    for (let i = 0; i < priorities.length; i++){
        let option = document.createElement('option');
        option.value = priorities[i];
        option.innerText = priorities[i];
        taskPriority.appendChild(option);
    }
    taskPriority.value = task.priority;


    taskPriority.addEventListener('change', function(e){
        task.priority = taskPriority.value;
        localStorage.setItem('projectList', JSON.stringify(projectList));
    })

    //option to change task deadline
    const taskDate = document.createElement('input');
    taskDate.type = 'date';
    taskDate.value = task.date;
    taskDate.addEventListener('change', function(e){
        task.date = taskDate.value;   
        localStorage.setItem('projectList', JSON.stringify(projectList));
    })

    const taskProject = document.createElement('div');
    taskProject.innerHTML = currentProject.name;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.style.backgroundColor = 'inherit';
    deleteBtn.style.border = 'none';
    deleteBtn.style.fontSize = 'inherit';
    deleteBtn.addEventListener('click', function(e){
        taskElement.innerHTML = "";
        currentProject.removeTaskFromProject(task);
        localStorage.setItem('projectList', JSON.stringify(projectList));
    });

    taskElement.appendChild(taskName);
    taskElement.appendChild(taskPriority);
    taskElement.appendChild(taskProject);
    taskElement.appendChild(taskDate);
    taskElement.appendChild(deleteBtn);
    tasklist.appendChild(taskElement);
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
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ "./src/createTask.js");


function createProject(project,container, projectList){
    const projectlist = document.querySelector('.projectlist');
    const projectContainer = document.createElement('div');
    const projectElement = document.createElement('div');
    projectElement.innerHTML = project.name;
    projectElement.addEventListener('click', function(e){
        const tasklist = document.querySelector('.tasklist');
        tasklist.innerHTML = "";

        const projectName = document.createElement('h3');
        projectName.innerHTML = project.name;

        
        tasklist.appendChild(projectName);

        let list = project.taskList;
        for (let i = 0; i < list.length; i++) {
            (0,_createTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list[i], project, projectList);
        }
        container.newProject = project; 
        container.currentProject = container.newProject;
    });
    projectElement.click();
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.style.backgroundColor = 'inherit';
    deleteBtn.style.border = 'none';
    deleteBtn.style.fontSize = 'inherit';

    deleteBtn.addEventListener('click', function(e){
        let index = projectList.indexOf(project);
        if (index > -1){
            projectList.splice(index, 1);
        }
        projectContainer.innerHTML = "";
        localStorage.setItem('projectList', JSON.stringify(projectList));
    })

    projectContainer.appendChild(projectElement);
    projectContainer.appendChild(deleteBtn);

    projectContainer.style.display = 'flex';
    projectContainer.style.justifyContent = 'space-between';
    projectContainer.style.alignItems = 'center';

    projectlist.appendChild(projectContainer);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzdEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ3pDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDLFlBQVksMERBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZVByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBjdXJyZW50UHJvamVjdCwgcHJvamVjdExpc3Qpe1xyXG4gICAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2xpc3QnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tFbGVtZW50LmNsYXNzTmFtZSA9ICd0YXNrJztcclxuICBcclxuICAgIC8vb3B0aW9uIHRvIGNoYW5nZSB0YXNrIG5hbWVcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRhc2tOYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICB0YXNrTmFtZS52YWx1ZSA9IHRhc2submFtZTtcclxuICAgIHRhc2tOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHRhc2submFtZSA9IHRhc2tOYW1lLnZhbHVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vb3B0aW9uIHRvIGNoYW5nZSBwcmlvcml0eVxyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBsZXQgcHJpb3JpdGllcyA9WydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdGllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXRpZXNbaV07XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHByaW9yaXRpZXNbaV07XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9XHJcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xyXG5cclxuXHJcbiAgICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eS52YWx1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL29wdGlvbiB0byBjaGFuZ2UgdGFzayBkZWFkbGluZVxyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGFza0RhdGUudHlwZSA9ICdkYXRlJztcclxuICAgIHRhc2tEYXRlLnZhbHVlID0gdGFzay5kYXRlO1xyXG4gICAgdGFza0RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGFzay5kYXRlID0gdGFza0RhdGUudmFsdWU7ICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tQcm9qZWN0LmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ1gnO1xyXG4gICAgZGVsZXRlQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICAgIGRlbGV0ZUJ0bi5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICBkZWxldGVCdG4uc3R5bGUuZm9udFNpemUgPSAnaW5oZXJpdCc7XHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICB0YXNrRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnJlbW92ZVRhc2tGcm9tUHJvamVjdCh0YXNrKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0KTtcclxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2suanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCxjb250YWluZXIsIHByb2plY3RMaXN0KXtcclxuICAgIGNvbnN0IHByb2plY3RsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RsaXN0Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBjb25zdCB0YXNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrbGlzdCcpO1xyXG4gICAgICAgIHRhc2tsaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBwcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSBwcm9qZWN0LnRhc2tMaXN0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjcmVhdGVUYXNrKGxpc3RbaV0sIHByb2plY3QsIHByb2plY3RMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLm5ld1Byb2plY3QgPSBwcm9qZWN0OyBcclxuICAgICAgICBjb250YWluZXIuY3VycmVudFByb2plY3QgPSBjb250YWluZXIubmV3UHJvamVjdDtcclxuICAgIH0pO1xyXG4gICAgcHJvamVjdEVsZW1lbnQuY2xpY2soKTtcclxuICAgIFxyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ1gnO1xyXG4gICAgZGVsZXRlQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICAgIGRlbGV0ZUJ0bi5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICBkZWxldGVCdG4uc3R5bGUuZm9udFNpemUgPSAnaW5oZXJpdCc7XHJcblxyXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSl7XHJcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcclxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcblxyXG4gICAgcHJvamVjdGxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
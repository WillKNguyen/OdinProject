/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9jcmVhdGVUYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBjdXJyZW50UHJvamVjdCwgcHJvamVjdExpc3Qpe1xyXG4gICAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza2xpc3QnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tFbGVtZW50LmNsYXNzTmFtZSA9ICd0YXNrJztcclxuICBcclxuICAgIC8vb3B0aW9uIHRvIGNoYW5nZSB0YXNrIG5hbWVcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRhc2tOYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICB0YXNrTmFtZS52YWx1ZSA9IHRhc2submFtZTtcclxuICAgIHRhc2tOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHRhc2submFtZSA9IHRhc2tOYW1lLnZhbHVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vb3B0aW9uIHRvIGNoYW5nZSBwcmlvcml0eVxyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBsZXQgcHJpb3JpdGllcyA9WydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdGllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXRpZXNbaV07XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHByaW9yaXRpZXNbaV07XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9XHJcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xyXG5cclxuXHJcbiAgICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHRhc2tQcmlvcml0eS52YWx1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL29wdGlvbiB0byBjaGFuZ2UgdGFzayBkZWFkbGluZVxyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGFza0RhdGUudHlwZSA9ICdkYXRlJztcclxuICAgIHRhc2tEYXRlLnZhbHVlID0gdGFzay5kYXRlO1xyXG4gICAgdGFza0RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGFzay5kYXRlID0gdGFza0RhdGUudmFsdWU7ICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tQcm9qZWN0LmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ1gnO1xyXG4gICAgZGVsZXRlQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdpbmhlcml0JztcclxuICAgIGRlbGV0ZUJ0bi5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICBkZWxldGVCdG4uc3R5bGUuZm9udFNpemUgPSAnaW5oZXJpdCc7XHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICB0YXNrRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnJlbW92ZVRhc2tGcm9tUHJvamVjdCh0YXNrKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0KTtcclxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcclxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
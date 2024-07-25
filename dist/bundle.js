/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment.ts":
/*!************************!*\
  !*** ./src/comment.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentClass = void 0;
class CommentClass {
    constructor(id, text, date, rating, autor) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.rating = rating;
        this.autor = autor;
    }
}
exports.CommentClass = CommentClass;


/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
class User {
    constructor(name, photo) {
        this.name = name;
        this.photo = photo;
    }
}
exports.User = User;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const comment_1 = __webpack_require__(/*! ./comment */ "./src/comment.ts");
const user_1 = __webpack_require__(/*! ./user */ "./src/user.ts");
class Main {
    constructor() {
        this.comments = [];
        this.user = new user_1.User("Максим Авдеенко", "https://picsum.photos/id/239/61");
        this.render();
    }
    render() {
        this.displayComments();
        this.setupCommentForm();
    }
    setupCommentForm() {
        const commentInput = document.getElementById('commentInput');
        const submitButton = document.querySelector('.comment-input__btn'); // Исправлено
        submitButton.addEventListener('click', () => {
            const text = commentInput.value.trim();
            if (text.length > 0 && text.length <= 1000) {
                const newComment = new comment_1.CommentClass(this.comments.length + 1, text, new Date(), 0, this.user.name);
                this.comments.push(newComment);
                commentInput.value = '';
                this.displayComments();
            }
            else {
                alert('Комментарий должен быть не длиннее 1000 символов.');
            }
        });
    }
    displayComments() {
        const commentsContainer = document.querySelector('.comments');
        commentsContainer.innerHTML = `
            <div class="comments-header">
                <h3 class="comments-header__subtitle">
                    <span class="comments-header__subtitle--black">Комментарии</span>
                    <span class="comments-header__subtitle--grey">(${this.comments.length})</span>
                </h3>
                <div class="sorting-comments">
                    <span class="sorting-comments__crit">По количеству оценок</span>
                    <span class="sorting-comments__select">Избранное</span>
                </div>
            </div>
            <div class="comment-input">
                <img class="photo" src="${this.user.photo}" alt="Аватар">
                <p class="name">${this.user.name}</p>
                <textarea id="commentInput" class="comment-input__text-area" placeholder="Введите текст сообщения..." maxlength="1000"></textarea>
                <button class="comment-input__btn">Отправить</button>
            </div>
            <div class="comments-list">
                ${this.comments.map(comment => `
                    <div class="comment">
                        <div class="comment-header">
                            <img class="photo" src="https://picsum.photos/id/239/61" alt="Аватар">
                            <p class="name">${comment.autor}</p>
                            <span class="date">${comment.date.toLocaleString()}</span>
                        </div>
                        <p class="comment-text">${comment.text}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
}
const main = new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQ1pQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7O1VDVFo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUscUJBQXFCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRCxrQ0FBa0MsZUFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpREFBaUQsOEJBQThCO0FBQy9FO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXN0ZW0tb2YtY29tbWVudHMtdHMvLi9zcmMvY29tbWVudC50cyIsIndlYnBhY2s6Ly9zaXN0ZW0tb2YtY29tbWVudHMtdHMvLi9zcmMvdXNlci50cyIsIndlYnBhY2s6Ly9zaXN0ZW0tb2YtY29tbWVudHMtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2lzdGVtLW9mLWNvbW1lbnRzLXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21tZW50Q2xhc3MgPSB2b2lkIDA7XG5jbGFzcyBDb21tZW50Q2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0ZXh0LCBkYXRlLCByYXRpbmcsIGF1dG9yKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XG4gICAgICAgIHRoaXMuYXV0b3IgPSBhdXRvcjtcbiAgICB9XG59XG5leHBvcnRzLkNvbW1lbnRDbGFzcyA9IENvbW1lbnRDbGFzcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vc2VyID0gdm9pZCAwO1xuY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcGhvdG8pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5waG90byA9IHBob3RvO1xuICAgIH1cbn1cbmV4cG9ydHMuVXNlciA9IFVzZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb21tZW50XzEgPSByZXF1aXJlKFwiLi9jb21tZW50XCIpO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyB1c2VyXzEuVXNlcihcItCc0LDQutGB0LjQvCDQkNCy0LTQtdC10L3QutC+XCIsIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzOS82MVwiKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlDb21tZW50cygpO1xuICAgICAgICB0aGlzLnNldHVwQ29tbWVudEZvcm0oKTtcbiAgICB9XG4gICAgc2V0dXBDb21tZW50Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRJbnB1dCcpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1pbnB1dF9fYnRuJyk7IC8vINCY0YHQv9GA0LDQstC70LXQvdC+XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBjb21tZW50SW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCAmJiB0ZXh0Lmxlbmd0aCA8PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29tbWVudCA9IG5ldyBjb21tZW50XzEuQ29tbWVudENsYXNzKHRoaXMuY29tbWVudHMubGVuZ3RoICsgMSwgdGV4dCwgbmV3IERhdGUoKSwgMCwgdGhpcy51c2VyLm5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMucHVzaChuZXdDb21tZW50KTtcbiAgICAgICAgICAgICAgICBjb21tZW50SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlDb21tZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ9Ca0L7QvNC80LXQvdGC0LDRgNC40Lkg0LTQvtC70LbQtdC9INCx0YvRgtGMINC90LUg0LTQu9C40L3QvdC10LUgMTAwMCDRgdC40LzQstC+0LvQvtCyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzcGxheUNvbW1lbnRzKCkge1xuICAgICAgICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xuICAgICAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnRzLWhlYWRlcl9fc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnRzLWhlYWRlcl9fc3VidGl0bGUtLWJsYWNrXCI+0JrQvtC80LzQtdC90YLQsNGA0LjQuDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnRzLWhlYWRlcl9fc3VidGl0bGUtLWdyZXlcIj4oJHt0aGlzLmNvbW1lbnRzLmxlbmd0aH0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb3J0aW5nLWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzb3J0aW5nLWNvbW1lbnRzX19jcml0XCI+0J/QviDQutC+0LvQuNGH0LXRgdGC0LLRgyDQvtGG0LXQvdC+0Lo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzb3J0aW5nLWNvbW1lbnRzX19zZWxlY3RcIj7QmNC30LHRgNCw0L3QvdC+0LU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicGhvdG9cIiBzcmM9XCIke3RoaXMudXNlci5waG90b31cIiBhbHQ9XCLQkNCy0LDRgtCw0YBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7dGhpcy51c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudElucHV0XCIgY2xhc3M9XCJjb21tZW50LWlucHV0X190ZXh0LWFyZWFcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INGC0LXQutGB0YIg0YHQvtC+0LHRidC10L3QuNGPLi4uXCIgbWF4bGVuZ3RoPVwiMTAwMFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1pbnB1dF9fYnRuXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLmNvbW1lbnRzLm1hcChjb21tZW50ID0+IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwaG90b1wiIHNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8yMzkvNjFcIiBhbHQ9XCLQkNCy0LDRgtCw0YBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7Y29tbWVudC5hdXRvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRhdGVcIj4ke2NvbW1lbnQuZGF0ZS50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tbWVudC10ZXh0XCI+JHtjb21tZW50LnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYCkuam9pbignJyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XG4gICAgfVxufVxuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment.ts":
/*!************************!*\
  !*** ./src/comment.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const user_1 = __webpack_require__(/*! ./user */ "./src/user.ts");
class CommentClass {
    constructor() {
        this.insertCommentInput();
    }
    insertCommentInput() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.createUserFromApi();
            const commentInputContainer = document.createElement('div');
            commentInputContainer.className = 'comment-input';
            const photo = document.createElement('img');
            photo.className = 'photo';
            photo.src = user.photoUrl;
            photo.alt = 'Аватар';
            const name = document.createElement('p');
            name.className = 'name';
            name.textContent = user.fullName;
            const textArea = document.createElement('textarea');
            textArea.id = 'commentInput';
            textArea.className = 'comment-input__text-area';
            textArea.placeholder = 'Введите текст сообщения...';
            textArea.maxLength = 1000;
            const button = document.createElement('button');
            button.className = 'comment-input__btn';
            button.textContent = 'Отправить';
            commentInputContainer.appendChild(photo);
            commentInputContainer.appendChild(name);
            commentInputContainer.appendChild(textArea);
            commentInputContainer.appendChild(button);
            const commentsHeader = document.querySelector('.comments-header');
            if (commentsHeader) {
                commentsHeader.after(commentInputContainer);
            }
            else {
                console.error('Element with class "comments-header" not found.');
            }
        });
    }
}
exports["default"] = CommentClass;


/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
class User {
    constructor(fullName, photoUrl) {
        this.fullName = fullName;
        this.photoUrl = photoUrl;
    }
    static createUserFromApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('https://randomuser.me/api/');
            const person = yield response.json();
            const firstName = person.results[0].name.first;
            const lastName = person.results[0].name.last;
            const fullName = `${firstName} ${lastName}`;
            const photoUrl = person.results[0].picture.medium;
            return new User(fullName, photoUrl);
        });
    }
}
exports["default"] = User;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
class Main {
    constructor() {
        this.init();
    }
    init() {
        new comment_1.default();
    }
}
new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ2xERjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXLEVBQUUsU0FBUztBQUN0RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7OztVQzVCZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Npc3RlbS1vZi1jb21tZW50cy10cy8uL3NyYy9jb21tZW50LnRzIiwid2VicGFjazovL3Npc3RlbS1vZi1jb21tZW50cy10cy8uL3NyYy91c2VyLnRzIiwid2VicGFjazovL3Npc3RlbS1vZi1jb21tZW50cy10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaXN0ZW0tb2YtY29tbWVudHMtdHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVzZXJfMSA9IHJlcXVpcmUoXCIuL3VzZXJcIik7XG5jbGFzcyBDb21tZW50Q2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluc2VydENvbW1lbnRJbnB1dCgpO1xuICAgIH1cbiAgICBpbnNlcnRDb21tZW50SW5wdXQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0geWllbGQgdXNlcl8xLmRlZmF1bHQuY3JlYXRlVXNlckZyb21BcGkoKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29tbWVudElucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb21tZW50LWlucHV0JztcbiAgICAgICAgICAgIGNvbnN0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBwaG90by5jbGFzc05hbWUgPSAncGhvdG8nO1xuICAgICAgICAgICAgcGhvdG8uc3JjID0gdXNlci5waG90b1VybDtcbiAgICAgICAgICAgIHBob3RvLmFsdCA9ICfQkNCy0LDRgtCw0YAnO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG5hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHVzZXIuZnVsbE5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICB0ZXh0QXJlYS5pZCA9ICdjb21tZW50SW5wdXQnO1xuICAgICAgICAgICAgdGV4dEFyZWEuY2xhc3NOYW1lID0gJ2NvbW1lbnQtaW5wdXRfX3RleHQtYXJlYSc7XG4gICAgICAgICAgICB0ZXh0QXJlYS5wbGFjZWhvbGRlciA9ICfQktCy0LXQtNC40YLQtSDRgtC10LrRgdGCINGB0L7QvtCx0YnQtdC90LjRjy4uLic7XG4gICAgICAgICAgICB0ZXh0QXJlYS5tYXhMZW5ndGggPSAxMDAwO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2NvbW1lbnQtaW5wdXRfX2J0bic7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAn0J7RgtC/0YDQsNCy0LjRgtGMJztcbiAgICAgICAgICAgIGNvbW1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG90byk7XG4gICAgICAgICAgICBjb21tZW50SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBjb21tZW50SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgICAgICAgY29tbWVudElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50c0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1oZWFkZXInKTtcbiAgICAgICAgICAgIGlmIChjb21tZW50c0hlYWRlcikge1xuICAgICAgICAgICAgICAgIGNvbW1lbnRzSGVhZGVyLmFmdGVyKGNvbW1lbnRJbnB1dENvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IHdpdGggY2xhc3MgXCJjb21tZW50cy1oZWFkZXJcIiBub3QgZm91bmQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENvbW1lbnRDbGFzcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihmdWxsTmFtZSwgcGhvdG9VcmwpIHtcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgICAgICB0aGlzLnBob3RvVXJsID0gcGhvdG9Vcmw7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVVc2VyRnJvbUFwaSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyk7XG4gICAgICAgICAgICBjb25zdCBwZXJzb24gPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBwZXJzb24ucmVzdWx0c1swXS5uYW1lLmZpcnN0O1xuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSBwZXJzb24ucmVzdWx0c1swXS5uYW1lLmxhc3Q7XG4gICAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gO1xuICAgICAgICAgICAgY29uc3QgcGhvdG9VcmwgPSBwZXJzb24ucmVzdWx0c1swXS5waWN0dXJlLm1lZGl1bTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlcihmdWxsTmFtZSwgcGhvdG9VcmwpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBVc2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29tbWVudF8xID0gcmVxdWlyZShcIi4vY29tbWVudFwiKTtcbmNsYXNzIE1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgbmV3IGNvbW1lbnRfMS5kZWZhdWx0KCk7XG4gICAgfVxufVxubmV3IE1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
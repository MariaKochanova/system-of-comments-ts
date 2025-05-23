/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment-form.ts":
/*!*****************************!*\
  !*** ./src/comment-form.ts ***!
  \*****************************/
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
class CommentForm {
    constructor(user) {
        this.user = user;
        this.insertCommentInput();
    }
    insertCommentInput() {
        return __awaiter(this, void 0, void 0, function* () {
            const commentInputContainer = document.createElement('div');
            commentInputContainer.className = 'comment-input';
            const photo = document.createElement('img');
            photo.className = 'photo';
            photo.src = this.user.photoUrl;
            photo.alt = 'Аватар';
            const name = document.createElement('p');
            name.className = 'name';
            name.textContent = this.user.fullName;
            const textArea = document.createElement('textarea');
            textArea.id = 'commentInput';
            textArea.className = 'comment-input__text-area';
            textArea.placeholder = 'Введите текст сообщения...';
            textArea.maxLength = 1000;
            const button = document.createElement('button');
            button.id = 'commentInputBtn';
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
exports["default"] = CommentForm;


/***/ }),

/***/ "./src/comments-section.ts":
/*!*********************************!*\
  !*** ./src/comments-section.ts ***!
  \*********************************/
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
exports["default"] = commentsSection;
const comment_form_1 = __webpack_require__(/*! ./comment-form */ "./src/comment-form.ts");
const user_1 = __webpack_require__(/*! ./user */ "./src/user.ts");
function commentsSection() {
    return __awaiter(this, void 0, void 0, function* () {
        const userInstance = new user_1.default();
        yield userInstance.createUserFromApi();
        const user = userInstance.getUser();
        if (user) {
            new comment_form_1.default(user);
        }
        else {
            console.error('User not created');
        }
        const sectionComments = document.getElementById('comments');
        const btn = document.getElementById('commentInputBtn');
        const textarea = document.getElementById('commentInput');
        function postComment() {
            const text = textarea.value.trim();
            if (!text)
                return;
            const commentOutputContainer = document.createElement('div');
            commentOutputContainer.className = 'comment-output';
            const photo = document.createElement('img');
            photo.className = 'photo';
            photo.src = user.photoUrl;
            photo.alt = 'Аватар';
            const name = document.createElement('p');
            name.className = 'name';
            name.textContent = user.fullName;
            const commentOutput = document.createElement('div');
            commentOutput.className = 'commentOutput';
            commentOutput.textContent = text;
            commentOutputContainer.appendChild(photo);
            commentOutputContainer.appendChild(name);
            commentOutputContainer.appendChild(commentOutput);
            sectionComments.appendChild(commentOutputContainer);
            textarea.value = '';
        }
        btn.addEventListener('click', postComment);
        textarea.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault(); // Чтобы не было переноса строки
                postComment();
            }
        });
    });
}


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
    constructor() {
        this.user = null;
    }
    createUserFromApi() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('https://randomuser.me/api/');
            const person = yield response.json();
            const firstName = person.results[0].name.first;
            const lastName = person.results[0].name.last;
            const fullName = `${firstName} ${lastName}`;
            const photoUrl = person.results[0].picture.medium;
            this.user = {
                fullName,
                photoUrl
            };
        });
    }
    getUser() {
        return this.user;
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
const comments_section_1 = __webpack_require__(/*! ./comments-section */ "./src/comments-section.ts");
function main() {
    (0, comments_section_1.default)();
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNsREY7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFlO0FBQ2YsdUJBQXVCLG1CQUFPLENBQUMsNkNBQWdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7O0FDMURhO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXLEVBQUUsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBZTs7Ozs7OztVQ2pDZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixtQkFBTyxDQUFDLHFEQUFvQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Npc3RlbS1vZi1jb21tZW50cy10cy8uL3NyYy9jb21tZW50LWZvcm0udHMiLCJ3ZWJwYWNrOi8vc2lzdGVtLW9mLWNvbW1lbnRzLXRzLy4vc3JjL2NvbW1lbnRzLXNlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vc2lzdGVtLW9mLWNvbW1lbnRzLXRzLy4vc3JjL3VzZXIudHMiLCJ3ZWJwYWNrOi8vc2lzdGVtLW9mLWNvbW1lbnRzLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Npc3RlbS1vZi1jb21tZW50cy10cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29tbWVudEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5pbnNlcnRDb21tZW50SW5wdXQoKTtcbiAgICB9XG4gICAgaW5zZXJ0Q29tbWVudElucHV0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY29tbWVudElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb21tZW50SW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnQtaW5wdXQnO1xuICAgICAgICAgICAgY29uc3QgcGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHBob3RvLmNsYXNzTmFtZSA9ICdwaG90byc7XG4gICAgICAgICAgICBwaG90by5zcmMgPSB0aGlzLnVzZXIucGhvdG9Vcmw7XG4gICAgICAgICAgICBwaG90by5hbHQgPSAn0JDQstCw0YLQsNGAJztcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBuYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSB0aGlzLnVzZXIuZnVsbE5hbWU7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICB0ZXh0QXJlYS5pZCA9ICdjb21tZW50SW5wdXQnO1xuICAgICAgICAgICAgdGV4dEFyZWEuY2xhc3NOYW1lID0gJ2NvbW1lbnQtaW5wdXRfX3RleHQtYXJlYSc7XG4gICAgICAgICAgICB0ZXh0QXJlYS5wbGFjZWhvbGRlciA9ICfQktCy0LXQtNC40YLQtSDRgtC10LrRgdGCINGB0L7QvtCx0YnQtdC90LjRjy4uLic7XG4gICAgICAgICAgICB0ZXh0QXJlYS5tYXhMZW5ndGggPSAxMDAwO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uaWQgPSAnY29tbWVudElucHV0QnRuJztcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnY29tbWVudC1pbnB1dF9fYnRuJztcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICfQntGC0L/RgNCw0LLQuNGC0YwnO1xuICAgICAgICAgICAgY29tbWVudElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob3RvKTtcbiAgICAgICAgICAgIGNvbW1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgIGNvbW1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgICAgICAgICBjb21tZW50SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWhlYWRlcicpO1xuICAgICAgICAgICAgaWYgKGNvbW1lbnRzSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgY29tbWVudHNIZWFkZXIuYWZ0ZXIoY29tbWVudElucHV0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgd2l0aCBjbGFzcyBcImNvbW1lbnRzLWhlYWRlclwiIG5vdCBmb3VuZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29tbWVudEZvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY29tbWVudHNTZWN0aW9uO1xuY29uc3QgY29tbWVudF9mb3JtXzEgPSByZXF1aXJlKFwiLi9jb21tZW50LWZvcm1cIik7XG5jb25zdCB1c2VyXzEgPSByZXF1aXJlKFwiLi91c2VyXCIpO1xuZnVuY3Rpb24gY29tbWVudHNTZWN0aW9uKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJJbnN0YW5jZSA9IG5ldyB1c2VyXzEuZGVmYXVsdCgpO1xuICAgICAgICB5aWVsZCB1c2VySW5zdGFuY2UuY3JlYXRlVXNlckZyb21BcGkoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJJbnN0YW5jZS5nZXRVc2VyKCk7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBuZXcgY29tbWVudF9mb3JtXzEuZGVmYXVsdCh1c2VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZXIgbm90IGNyZWF0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWN0aW9uQ29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHMnKTtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRJbnB1dEJ0bicpO1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50SW5wdXQnKTtcbiAgICAgICAgZnVuY3Rpb24gcG9zdENvbW1lbnQoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dGFyZWEudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCF0ZXh0KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRPdXRwdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbW1lbnRPdXRwdXRDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnQtb3V0cHV0JztcbiAgICAgICAgICAgIGNvbnN0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBwaG90by5jbGFzc05hbWUgPSAncGhvdG8nO1xuICAgICAgICAgICAgcGhvdG8uc3JjID0gdXNlci5waG90b1VybDtcbiAgICAgICAgICAgIHBob3RvLmFsdCA9ICfQkNCy0LDRgtCw0YAnO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG5hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHVzZXIuZnVsbE5hbWU7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb21tZW50T3V0cHV0LmNsYXNzTmFtZSA9ICdjb21tZW50T3V0cHV0JztcbiAgICAgICAgICAgIGNvbW1lbnRPdXRwdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgY29tbWVudE91dHB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG90byk7XG4gICAgICAgICAgICBjb21tZW50T3V0cHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICAgICAgY29tbWVudE91dHB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50T3V0cHV0KTtcbiAgICAgICAgICAgIHNlY3Rpb25Db21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50T3V0cHV0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9zdENvbW1lbnQpO1xuICAgICAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vINCn0YLQvtCx0Ysg0L3QtSDQsdGL0LvQviDQv9C10YDQtdC90L7RgdCwINGB0YLRgNC+0LrQuFxuICAgICAgICAgICAgICAgIHBvc3RDb21tZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVzZXIgPSBudWxsO1xuICAgIH1cbiAgICBjcmVhdGVVc2VyRnJvbUFwaSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyk7XG4gICAgICAgICAgICBjb25zdCBwZXJzb24gPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBwZXJzb24ucmVzdWx0c1swXS5uYW1lLmZpcnN0O1xuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSBwZXJzb24ucmVzdWx0c1swXS5uYW1lLmxhc3Q7XG4gICAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gO1xuICAgICAgICAgICAgY29uc3QgcGhvdG9VcmwgPSBwZXJzb24ucmVzdWx0c1swXS5waWN0dXJlLm1lZGl1bTtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICAgICAgICBmdWxsTmFtZSxcbiAgICAgICAgICAgICAgICBwaG90b1VybFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXI7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gVXNlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbW1lbnRzX3NlY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2NvbW1lbnRzLXNlY3Rpb25cIik7XG5mdW5jdGlvbiBtYWluKCkge1xuICAgICgwLCBjb21tZW50c19zZWN0aW9uXzEuZGVmYXVsdCkoKTtcbn1cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
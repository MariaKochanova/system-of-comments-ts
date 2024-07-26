/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment.ts":
/*!************************!*\
  !*** ./src/comment.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CommentClass {
    constructor(id, text, date, rating, autor, photoUrl) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.rating = rating;
        this.autor = autor;
        this.photoUrl = photoUrl;
    }
}
exports["default"] = CommentClass;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
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
const comment_1 = __webpack_require__(/*! ./comment */ "./src/comment.ts");
const user_1 = __webpack_require__(/*! ./user */ "./src/user.ts");
class Main {
    constructor() {
        this.currentUser = null;
        this.comments = [];
        this.init();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateCurrentUser();
            this.render();
        });
    }
    updateCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield user_1.default.createUserFromApi();
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateCurrentUser();
            this.displayComments();
            this.setupCommentForm();
        });
    }
    setupCommentForm() {
        const commentInput = document.getElementById('commentInput');
        const submitButton = document.querySelector('.comment-input__btn');
        submitButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            const text = commentInput.value.trim();
            if (text.length > 0 && text.length <= 1000 && this.currentUser) {
                const newComment = new comment_1.default(this.comments.length + 1, text, new Date(), 0, this.currentUser.fullName, this.currentUser.photoUrl);
                this.comments.push(newComment);
                commentInput.value = '';
                this.displayComments();
                yield this.render();
            }
            else {
                alert('Комментарий должен быть не длиннее 1000 символов.');
            }
        }));
    }
    displayComments() {
        var _a, _b;
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
                <img class="photo" src="${(_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.photoUrl}" alt="Аватар">
                <p class="name">${(_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.fullName}</p>
                <textarea id="commentInput" class="comment-input__text-area" placeholder="Введите текст сообщения..." maxlength="1000"></textarea>
                <button class="comment-input__btn">Отправить</button>
            </div>
            <div class="comments-list">
                ${this.comments.map(comment => `
                    <div class="comment">
                        <div class="comment-header">
                            <img class="photo" src="${comment.photoUrl}" alt="Аватар">
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ1pGO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUscUJBQXFCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHlFQUF5RTtBQUNuSCxrQ0FBa0MseUVBQXlFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxzREFBc0QsaUJBQWlCO0FBQ3ZFLDhDQUE4QyxjQUFjO0FBQzVELGlEQUFpRCw4QkFBOEI7QUFDL0U7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6RmE7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVyxFQUFFLFNBQVM7QUFDdEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7VUM1QmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Npc3RlbS1vZi1jb21tZW50cy10cy8uL3NyYy9jb21tZW50LnRzIiwid2VicGFjazovL3Npc3RlbS1vZi1jb21tZW50cy10cy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9zaXN0ZW0tb2YtY29tbWVudHMtdHMvLi9zcmMvdXNlci50cyIsIndlYnBhY2s6Ly9zaXN0ZW0tb2YtY29tbWVudHMtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2lzdGVtLW9mLWNvbW1lbnRzLXRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2lzdGVtLW9mLWNvbW1lbnRzLXRzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zaXN0ZW0tb2YtY29tbWVudHMtdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29tbWVudENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGV4dCwgZGF0ZSwgcmF0aW5nLCBhdXRvciwgcGhvdG9VcmwpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnJhdGluZyA9IHJhdGluZztcbiAgICAgICAgdGhpcy5hdXRvciA9IGF1dG9yO1xuICAgICAgICB0aGlzLnBob3RvVXJsID0gcGhvdG9Vcmw7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ29tbWVudENsYXNzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbW1lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbW1lbnRcIik7XG5jb25zdCB1c2VyXzEgPSByZXF1aXJlKFwiLi91c2VyXCIpO1xuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy51cGRhdGVDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVwZGF0ZUN1cnJlbnRVc2VyKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHlpZWxkIHVzZXJfMS5kZWZhdWx0LmNyZWF0ZVVzZXJGcm9tQXBpKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLnVwZGF0ZUN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlDb21tZW50cygpO1xuICAgICAgICAgICAgdGhpcy5zZXR1cENvbW1lbnRGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXR1cENvbW1lbnRGb3JtKCkge1xuICAgICAgICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudElucHV0Jyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWlucHV0X19idG4nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGNvbW1lbnRJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwICYmIHRleHQubGVuZ3RoIDw9IDEwMDAgJiYgdGhpcy5jdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSBuZXcgY29tbWVudF8xLmRlZmF1bHQodGhpcy5jb21tZW50cy5sZW5ndGggKyAxLCB0ZXh0LCBuZXcgRGF0ZSgpLCAwLCB0aGlzLmN1cnJlbnRVc2VyLmZ1bGxOYW1lLCB0aGlzLmN1cnJlbnRVc2VyLnBob3RvVXJsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzLnB1c2gobmV3Q29tbWVudCk7XG4gICAgICAgICAgICAgICAgY29tbWVudElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q29tbWVudHMoKTtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ9Ca0L7QvNC80LXQvdGC0LDRgNC40Lkg0LTQvtC70LbQtdC9INCx0YvRgtGMINC90LUg0LTQu9C40L3QvdC10LUgMTAwMCDRgdC40LzQstC+0LvQvtCyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGRpc3BsYXlDb21tZW50cygpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcbiAgICAgICAgY29tbWVudHNDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjb21tZW50cy1oZWFkZXJfX3N1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50cy1oZWFkZXJfX3N1YnRpdGxlLS1ibGFja1wiPtCa0L7QvNC80LXQvdGC0LDRgNC40Lg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50cy1oZWFkZXJfX3N1YnRpdGxlLS1ncmV5XCI+KCR7dGhpcy5jb21tZW50cy5sZW5ndGh9KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29ydGluZy1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic29ydGluZy1jb21tZW50c19fY3JpdFwiPtCf0L4g0LrQvtC70LjRh9C10YHRgtCy0YMg0L7RhtC10L3QvtC6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic29ydGluZy1jb21tZW50c19fc2VsZWN0XCI+0JjQt9Cx0YDQsNC90L3QvtC1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBob3RvXCIgc3JjPVwiJHsoX2EgPSB0aGlzLmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGhvdG9Vcmx9XCIgYWx0PVwi0JDQstCw0YLQsNGAXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4keyhfYiA9IHRoaXMuY3VycmVudFVzZXIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mdWxsTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb21tZW50SW5wdXRcIiBjbGFzcz1cImNvbW1lbnQtaW5wdXRfX3RleHQtYXJlYVwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0YLQtdC60YHRgiDRgdC+0L7QsdGJ0LXQvdC40Y8uLi5cIiBtYXhsZW5ndGg9XCIxMDAwXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50LWlucHV0X19idG5cIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAke3RoaXMuY29tbWVudHMubWFwKGNvbW1lbnQgPT4gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInBob3RvXCIgc3JjPVwiJHtjb21tZW50LnBob3RvVXJsfVwiIGFsdD1cItCQ0LLQsNGC0LDRgFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtjb21tZW50LmF1dG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZVwiPiR7Y29tbWVudC5kYXRlLnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXRleHRcIj4ke2NvbW1lbnQudGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgKS5qb2luKCcnKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcbiAgICB9XG59XG5jb25zdCBtYWluID0gbmV3IE1haW4oKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihmdWxsTmFtZSwgcGhvdG9VcmwpIHtcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xuICAgICAgICB0aGlzLnBob3RvVXJsID0gcGhvdG9Vcmw7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVVc2VyRnJvbUFwaSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyk7XG4gICAgICAgICAgICBjb25zdCBwZXJzb24gPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBwZXJzb24ucmVzdWx0c1swXS5uYW1lLmZpcnN0O1xuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSBwZXJzb24ucmVzdWx0c1swXS5uYW1lLmxhc3Q7XG4gICAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGAke2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gO1xuICAgICAgICAgICAgY29uc3QgcGhvdG9VcmwgPSBwZXJzb24ucmVzdWx0c1swXS5waWN0dXJlLm1lZGl1bTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlcihmdWxsTmFtZSwgcGhvdG9VcmwpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBVc2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
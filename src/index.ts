import { CommentClass } from './comment';
import { User } from './user';

class Main {
    private comments: CommentClass[];
    private user: User;

    constructor() {
        this.comments = [];
        this.user = new User("Максим Авдеенко", "https://picsum.photos/id/239/61");
        this.render();
    }

    render(): void {
        this.displayComments();
        this.setupCommentForm();
    }

    private setupCommentForm(): void {
        const commentInput = document.getElementById('commentInput') as HTMLTextAreaElement;
        const submitButton = document.querySelector('.comment-input__btn') as HTMLButtonElement; // Исправлено

        submitButton.addEventListener('click', () => {
            const text = commentInput.value.trim();
            if (text.length > 0 && text.length <= 1000) {
                const newComment = new CommentClass(
                    this.comments.length + 1,
                    text,
                    new Date(),
                    0,
                    this.user.name
                );
                this.comments.push(newComment);
                commentInput.value = '';
                this.displayComments();
            } else {
                alert('Комментарий должен быть не длиннее 1000 символов.');
            }
        });
    }

    private displayComments(): void {
        const commentsContainer = document.querySelector('.comments') as HTMLElement;
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

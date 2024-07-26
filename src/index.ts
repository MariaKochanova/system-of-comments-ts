import CommentClass from './comment';
import User from './user';

class Main {
    private comments: CommentClass[];
    private currentUser: User | null = null;

    constructor() {
        this.comments = [];
        this.init();
    }

    private async init() {
        await this.updateCurrentUser();
        this.render();
    }

    private async updateCurrentUser() {
        this.currentUser = await User.createUserFromApi();
    }

    async render(): Promise<void> {
        await this.updateCurrentUser();
        this.displayComments();
        this.setupCommentForm();
    }

    private setupCommentForm(): void {
        const commentInput = document.getElementById('commentInput') as HTMLTextAreaElement;
        const submitButton = document.querySelector('.comment-input__btn') as HTMLButtonElement;

        submitButton.addEventListener('click', async () => {
            const text = commentInput.value.trim();
            if (text.length > 0 && text.length <= 1000 && this.currentUser) {
                const newComment = new CommentClass(
                    this.comments.length + 1,
                    text,
                    new Date(),
                    0,
                    this.currentUser.fullName,
                    this.currentUser.photoUrl
                );
                this.comments.push(newComment);
                commentInput.value = '';
                this.displayComments();
                await this.render();
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
                <img class="photo" src="${this.currentUser?.photoUrl}" alt="Аватар">
                <p class="name">${this.currentUser?.fullName}</p>
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

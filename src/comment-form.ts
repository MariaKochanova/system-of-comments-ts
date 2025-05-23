export default class CommentForm {
    user: null | { fullName: string, photoUrl: string }

    constructor(user: { fullName: string, photoUrl: string }) {
        this.user = user;
        this.insertCommentInput();
    }

    private async insertCommentInput(): Promise<void> {
        const commentInputContainer = document.createElement('div');
        commentInputContainer.className = 'comment-input';

        const photo = document.createElement('img');
        photo.className = 'photo';
        photo.src = this.user!.photoUrl;
        photo.alt = 'Аватар';

        const name = document.createElement('p');
        name.className = 'name';
        name.textContent = this.user!.fullName;

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
        } else {
            console.error('Element with class "comments-header" not found.');
        }
    }
}
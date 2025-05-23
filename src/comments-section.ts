import CommentForm from './comment-form';
import User from './user';

export default async function commentsSection() {
    const userInstance = new User();

    await userInstance.createUserFromApi();
    const user = userInstance.getUser();

    if (user) {
        new CommentForm(user);
    } else {
        console.error('User not created');
    }

    const sectionComments = document.getElementById('comments')!;
    const btn = document.getElementById('commentInputBtn')!;
    const textarea = document.getElementById('commentInput') as HTMLTextAreaElement;

    function postComment() {
        const text = textarea.value.trim();
        if (!text) return;

        const commentOutputContainer = document.createElement('div');
        commentOutputContainer.className = 'comment-output';

        const photo = document.createElement('img');
        photo.className = 'photo';
        photo.src = user!.photoUrl;
        photo.alt = 'Аватар';

        const name = document.createElement('p');
        name.className = 'name';
        name.textContent = user!.fullName;

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
}


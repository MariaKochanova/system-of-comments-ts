import CommentForm from './comment-form';
import User from './user';

function main(): void {
    const userInstance = new User();

    userInstance.createUserFromApi().then(() => {
        const user = userInstance.getUser();

        if (user) {
            const commentForm = new CommentForm(user);
        } else {
            console.error('User not created');
        }
    });
}

main();

import CommentClass from './comment';

class Main {
    constructor() {
        this.init();
    }

    private init(): void {
        new CommentClass();
    }
}

new Main();

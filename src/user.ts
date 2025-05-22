export default class User {
    user: null | { fullName: string, photoUrl: string }

    constructor() {
        this.user = null
    }

    async createUserFromApi(): Promise<void> {
        const response = await fetch('https://randomuser.me/api/');
        const person = await response.json();

        const firstName = person.results[0].name.first;
        const lastName = person.results[0].name.last;
        const fullName = `${firstName} ${lastName}`;
        const photoUrl = person.results[0].picture.medium;

        this.user = {
            fullName,
            photoUrl
        }
    }

    getUser(): { fullName: string, photoUrl: string } | null {
        return this.user
    }
}
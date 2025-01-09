export default class User {
    fullName: string;
    photoUrl: string;

    private constructor(fullName: string, photoUrl: string) {
        this.fullName = fullName;
        this.photoUrl = photoUrl;
    }

    static async createUserFromApi(): Promise<User> {
        const response = await fetch('https://randomuser.me/api/');
        const person = await response.json();

        const firstName = person.results[0].name.first;
        const lastName = person.results[0].name.last;
        const fullName = `${firstName} ${lastName}`;
        const photoUrl = person.results[0].picture.medium;

        return new User(fullName, photoUrl);
    }
}
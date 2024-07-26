export default class CommentClass {
    id: number;
    text: string;
    date: Date;
    rating: number;
    autor: string;
    photoUrl: string;

    constructor(id: number, text: string, date: Date, rating: number, autor: string, photoUrl: string) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.rating = rating;
        this.autor = autor;
        this.photoUrl = photoUrl
    }
}
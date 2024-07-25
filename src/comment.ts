export class CommentClass {
    id: number;
    text: string;
    date: Date;
    rating: number;
    autor: string;

    constructor(id: number, text: string, date: Date, rating: number, autor: string) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.rating = rating;
        this.autor = autor;
    }
}
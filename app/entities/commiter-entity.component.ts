import {Author} from './author.component';

export class CommiterEntity{
    author: Author;
    message: string;

    constructor(author:Author,message:string){
        this.author = author;
        this.message = message;
    }
}
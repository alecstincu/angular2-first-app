import {Author} from './author';

export class CommiterEntity{
    author: Author;
    message: string;

    constructor(author:Author,message:string){
        this.author = author;
        this.message = message;
    }
}
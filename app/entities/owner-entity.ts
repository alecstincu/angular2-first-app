export class OwnerEntity{
    login : string;
    avatar_url: string;

    constructor(login: string, avatar_url:string){
        this.login = login;
        this.avatar_url = avatar_url;
    }
}
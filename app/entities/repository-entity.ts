import {OwnerEntity} from "./owner-entity";

export class RepositoryEntity{
    id: number;
    name:string;
    full_name: string;
    owner: OwnerEntity;
    url: string

    constructor(id: number, name:string, full_name: string, url:string, owner: OwnerEntity){
        this.id = id;
        this.name = name;
        this.url = url;
        this.full_name = full_name;
        this.owner = owner;
    }
}
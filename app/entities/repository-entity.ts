import {OwnerEntity} from "./owner-entity";

export class RepositoryEntity{
    id: number;
    name: string;
    owner: OwnerEntity;

    constructor(id: number, name: string, owner: OwnerEntity){
        this.id = id;
        this.name = name;
        this.owner = owner;
    }
}
import {OwnerEntity} from "./owner-entity.component";

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
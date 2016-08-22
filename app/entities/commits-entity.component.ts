import {CommiterEntity} from "./commiter-entity.component";

export class CommitsEntity{
    commit : CommiterEntity;

    constructor(commit : CommiterEntity){
        this.commit = commit;
    }
}
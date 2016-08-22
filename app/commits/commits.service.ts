import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx'

import {RepositoryEntity} from '../entities/repository-entity.component';
import {OwnerEntity} from "../entities/owner-entity.component";
import {CommiterEntity} from "../entities/commiter-entity.component";
import {Author} from "../entities/author.component";
import {CommitsEntity} from "../entities/commits-entity.component";

@Injectable()
export class CommitsService{

    constructor(
        private http : Http
    ){}

    getCommits(link){
        return this.http.get(link)
            .map((response : Response) => {
                return response.json();
            })
            .map((commits:Array<CommitsEntity>) => {
                let result : Array<CommiterEntity> = [];
                if (commits){
                    commits.forEach((commitFromList) => {
                        let author = new Author(commitFromList.commit.author.name, commitFromList.commit.author.email);
                        result.push(new CommiterEntity(author, commitFromList.commit.message));
                    });
                }
                return result;
            })
            .catch(this.handleError);
    }

    handleError(err : any){
        console.log(err);
        return Observable.throw(err);
    }
}


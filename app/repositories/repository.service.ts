import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx'

import {RepositoryEntity} from '../entities/repository-entity';
import {OwnerEntity} from "../entities/owner-entity";

@Injectable()
export class RepositoryService{

    constructor(private http : Http){}

    getRepositories(){
        return this.http.get('https://api.github.com/repositories')
            .map((response : Response) => {
                return response.json();
            })
            .map((repositories:Array<RepositoryEntity>) => {
                let result : Array<RepositoryEntity> = [];
                if (repositories){
                    repositories.forEach((repo) => {
                        //console.log(repo.owner);
                        let owner = new OwnerEntity(repo.owner.login, repo.owner.avatar_url);
                        //console.log(owner);
                        result.push(new RepositoryEntity(repo.id, repo.name, repo.full_name, repo.url, owner));
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


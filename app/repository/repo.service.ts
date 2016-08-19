import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx'

import {RepoEntity} from './repo-entity.component';

@Injectable()
export class RepoService{

    constructor(private http : Http){}

    getRepositories(){
        return this.http.get('https://api.github.com/repositories')
            .map((response : Response) => {
                return response.json();
            })
            .map((repositories:Array<RepoEntity>) => {
                let result : Array<RepoEntity> = [];
                if (repositories){
                    repositories.forEach((repo) => {
                        result.push(new RepoEntity(repo.id, repo.name));
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


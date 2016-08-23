import { Component, OnInit } from '@angular/core';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

import {RepositoryEntity} from '../entities/repository-entity';
import {RepositoryComponent} from '../repository/repository.component';
import {RepositoryService} from "./repository.service";

@Component({
    moduleId: module.id,
    selector: 'repository-list',
    templateUrl: 'repository-list.component.html',
    directives: [RepositoryComponent],
    providers: [RepositoryService]
})

export class RepositoryListComponent implements OnInit{

    repositories: Array<RepositoryEntity>;

    constructor(private repositoryService: RepositoryService){}

    ngOnInit(){
        this.repositoryService.getRepositories()
            .subscribe(
                (repositories) => {
                    //console.log(repositories);
                    this.repositories = repositories;
                },
                (err) => {
                    console.log(err);
                }
            )
    }
}
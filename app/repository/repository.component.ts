import { Component,Input } from '@angular/core';
import {Router} from '@angular/router';

import {RepositoryEntity} from './repository-entity.component';

@Component({
    moduleId: module.id,
    selector: 'my-repository',
    templateUrl: 'repository.component.html'
})

export class RepositoryComponent{
    @Input()
    repository : RepositoryEntity;

    constructor(private router:Router) {}

    goToCommits(repository : RepositoryEntity){
        let link = '/repos/'+ repository.owner.login + '/' + repository.name +  '/commits';
        console.log(link);
        this.router.navigateByUrl(link);
    }
}
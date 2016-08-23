import { Component,Input,OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {RepositoryEntity} from '../entities/repository-entity';

@Component({
    moduleId: module.id,
    selector: 'my-repository',
    templateUrl: 'repository.component.html'
})

export class RepositoryComponent implements OnInit{
    @Input()
    repository : RepositoryEntity;

    ngOnInit(){
       //console.log(this.repository);
    }

    constructor(private router:Router) {}

    goToCommits(repository : RepositoryEntity){
        let link = '/repos/'+ repository.owner.login + '/' + repository.name +  '/commits';
        this.router.navigateByUrl(link);
    }
}
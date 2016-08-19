import { Component,Input } from '@angular/core';

import {RepoEntity} from './repo-entity.component';

@Component({
    moduleId: module.id,
    selector: 'my-repository',
    templateUrl: 'repository.component.html'
})

export class RepositoryComponent{
    @Input()
    repository : RepoEntity;
}
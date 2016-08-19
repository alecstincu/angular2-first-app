import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

import {RepoEntity} from './repository/repo-entity.component';
import {RepoService} from './repository/repo.service';
import {RepositoryComponent} from './repository/repository.component';

@Component({
  moduleId: module.id,
  selector: 'repo-list',
  templateUrl: 'app.component.html',
  directives: [RepositoryComponent],
  providers: [HTTP_PROVIDERS, RepoService]
})
export class AppComponent implements OnInit{

    repositories: Array<RepoEntity>;

    constructor(private repoService: RepoService){}

    ngOnInit(){
    this.repoService.getRepositories()
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
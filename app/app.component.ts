import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {RepositoryListComponent} from "./repositories/repository-list.component";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [RepositoryListComponent],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {}
import {Component} from '@angular/core';

import {RepositoryListComponent} from "./repositories/repository-list.component";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [RepositoryListComponent]
})
export class AppComponent {}
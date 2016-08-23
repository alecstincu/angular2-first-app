import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';
import { AppComponent }  from './app.component';
import {CommitsComponent} from "./commits/commits.component";
import {RepositoryListComponent} from "./repositories/repository-list.component";
import {FirstLetterUpperCasePipe} from "./first-letter-uppercase.pipe";

@NgModule({
  imports:[
      BrowserModule,
      routing
  ],
  declarations: [
      AppComponent,
      RepositoryListComponent,
      CommitsComponent,
      FirstLetterUpperCasePipe
  ],
  bootstrap: [
      AppComponent
  ]
})

export class AppModule { }
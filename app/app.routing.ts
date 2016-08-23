import { Routes, RouterModule } from '@angular/router';
import {CommitsComponent} from "./commits/commits.component";
import {RepositoryListComponent} from "./repositories/repository-list.component";

const appRoutes: Routes = [
    {
        path: 'repos',
        component: RepositoryListComponent
    },
    {
        path: 'repos/:owner/:repo/commits',
        component: CommitsComponent
    },
    {
        path: '',
        redirectTo: '/repos',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);
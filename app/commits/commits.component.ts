import {Component} from '@angular/core';
import {CommitsService} from "./commits.service";
import {ActivatedRoute, Params} from '@angular/router';

import {CommiterEntity} from "../entities/commiter-entity";

@Component({
    moduleId: module.id,
    selector: 'commit-list',
    templateUrl: 'commits.component.html',
    providers: [CommitsService]
})

export class CommitsComponent {
    commits : Array<CommiterEntity>;

    constructor(
        private commitsService: CommitsService,
        private route: ActivatedRoute
    ){}

    ngOnInit(){
        let params = this.route.params;

        this.route.params.forEach((params: Params) => {
            if (params['owner'] !== undefined) {
                let owner = params['owner'];
                if (params['repo'] !== undefined) {
                    let repo = params['repo'];
                    let link = 'https://api.github.com/repos/' + params['owner'] + '/' +  params['repo'] + '/commits';

                    this.commitsService.getCommits(link)
                        .subscribe(
                            (commits) => {
                                this.commits = commits;
                            },
                            (err) => {
                                console.log(err);
                            }
                        )
                }
            }
        });
    }
}
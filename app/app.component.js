"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var repo_service_1 = require('./repository/repo.service');
var repository_component_1 = require('./repository/repository.component');
var AppComponent = (function () {
    function AppComponent(repoService) {
        this.repoService = repoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repoService.getRepositories()
            .subscribe(function (repositories) {
            //console.log(repositories);
            _this.repositories = repositories;
        }, function (err) {
            console.log(err);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'repo-list',
            templateUrl: 'app.component.html',
            directives: [repository_component_1.RepositoryComponent],
            providers: [http_1.HTTP_PROVIDERS, repo_service_1.RepoService]
        }), 
        __metadata('design:paramtypes', [repo_service_1.RepoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
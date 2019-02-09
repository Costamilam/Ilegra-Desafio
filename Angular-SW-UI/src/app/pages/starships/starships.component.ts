import { Component } from '@angular/core';
import { ActivatedRoute, Router, ChildActivationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { StarshipService } from 'src/app/services/starship.service';

@Component({
    selector: 'app-starships',
    templateUrl: './starships.component.html',
    styleUrls: ['./starships.component.css']
})
export class StarshipsComponent {

    pagination: object = {};

    starships: object[] = [];

    constructor(
        private starshipService: StarshipService,
        private route: ActivatedRoute,
        router: Router
    ) {
        router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(this.load)
    }

    load = () => {
        if (this.route.snapshot.paramMap.has('id')) {
            for (const id of this.route.snapshot.paramMap.get('id').split('-')) {
                this.starshipService.getStarship(<number><any>id).subscribe(
                    (response: any) => { this.starships.push(response) }
                );
            }
        } else {
            this.starshipService.getStarships(<number><any>this.route.snapshot.paramMap.get('page') || 1).subscribe(
                (response: any) => {
                    this.starships = response.results;
            
                    delete response.results;
            
                    response.prefix = 'starships';
            
                    this.pagination = response;
                }
            );
        }
    }

}

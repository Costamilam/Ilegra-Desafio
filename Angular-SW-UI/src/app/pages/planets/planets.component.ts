import { Component } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-planets',
    templateUrl: './planets.component.html',
    styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {

    pagination: object = {};

    planets: object[] = [];

    constructor(
        private planetService: PlanetService,
        private route: ActivatedRoute,
        router: Router
    ) {
        router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(this.load)
    }

    load = () => {
        if (this.route.snapshot.paramMap.has('id')) {
            for (const id of this.route.snapshot.paramMap.get('id').split('-')) {
                this.planetService.getPlanet(<number><any>id).subscribe(
                    (response: any) => { this.planets.push(response) }
                );
            }
        } else {
            this.planetService.getPlanets(<number><any>this.route.snapshot.paramMap.get('page') || 1).subscribe(
                (response: any) => {
                    this.planets = response.results;

                    delete response.results;

                    response.prefix = 'planets';

                    this.pagination = response;
                }
            );
        }
    }

    getData(): object[][] {
        let data = [];

        let index = 0;

        for (let i = 0; i < this.planets.length; i++) {
            if (data[index] === undefined) {
                data[index] = [];
            }

            data[index].push(this.planets[i]);

            if (i % 2 == 1) {
                index++;
            }
        }

        return data;
    }

}

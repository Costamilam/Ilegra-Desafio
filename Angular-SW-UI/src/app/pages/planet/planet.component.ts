import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.css']
})
export class PlanetComponent {

    planet: object = {};

    constructor(
        route: ActivatedRoute,
        planetService: PlanetService
    ) {
        let id: number = <number><any>route.snapshot.paramMap.get('id');

        planetService.getPlanet(id).subscribe(
            (response: any) => { this.planet = response }
        );
    }

}

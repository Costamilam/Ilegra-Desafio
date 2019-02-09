import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarshipService } from 'src/app/services/starship.service';

@Component({
    selector: 'app-starship',
    templateUrl: './starship.component.html',
    styleUrls: ['./starship.component.css']
})
export class StarshipComponent {

    starship: object = {};

    constructor(
        route: ActivatedRoute,
        starshipService: StarshipService
    ) {
        let id: number = <number><any>route.snapshot.paramMap.get('id');

        starshipService.getStarship(id).subscribe(
            (response: any) => { this.starship = response }
        );
    }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecieService } from 'src/app/services/specie.service';

@Component({
    selector: 'app-specie',
    templateUrl: './specie.component.html',
    styleUrls: ['./specie.component.css']
})
export class SpecieComponent {

    specie: object = {};

    constructor(
        route: ActivatedRoute,
        specieService: SpecieService
    ) {
        let id: number = <number><any>route.snapshot.paramMap.get('id');

        specieService.getSpecie(id).subscribe(
            (response: any) => { this.specie = response }
        );
    }

}

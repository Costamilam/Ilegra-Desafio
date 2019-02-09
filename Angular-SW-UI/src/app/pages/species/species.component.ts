import { Component } from '@angular/core';
import { SpecieService } from 'src/app/services/specie.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-species',
    templateUrl: './species.component.html',
    styleUrls: ['./species.component.css']
})
export class SpeciesComponent {

    pagination: object = {};

    species: object[] = [];

    constructor(
        private specieService: SpecieService,
        private route: ActivatedRoute,
        router: Router
    ) {
        router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(this.load)
    }

    load = () => {
        if (this.route.snapshot.paramMap.has('id')) {
            for (const id of this.route.snapshot.paramMap.get('id').split('-')) {
                this.specieService.getSpecie(<number><any>id).subscribe(
                    (response: any) => { this.species.push(response) }
                );
            }
        } else {
            this.specieService.getSpecies(<number><any>this.route.snapshot.paramMap.get('page') || 1).subscribe(
                (response: any) => {
                    this.species = response.results;

                    delete response.results;

                    response.prefix = 'species';

                    this.pagination = response;
                }
            );
        }
    }

    getData(): object[][] {
        let data = [];

        let index = 0;

        for (let i = 0; i < this.species.length; i++) {
            if (data[index] === undefined) {
                data[index] = [];
            }

            data[index].push(this.species[i]);

            if (i % 2 == 1) {
                index++;
            }
        }

        return data;
    }

}

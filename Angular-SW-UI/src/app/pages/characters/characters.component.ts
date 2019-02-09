import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { filter } from 'rxjs/operators';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

    pagination: object = {};

    characters: object[] = [];

    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute,
        router: Router
    ) {
        router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(this.load)
    }

    load = () => {
        if (this.route.snapshot.paramMap.has('id')) {
            for (const id of this.route.snapshot.paramMap.get('id').split('-')) {
                this.characterService.getCharacter(<number><any>id).subscribe(
                    (response: any) => { this.characters.push(response) }
                );
            }
        } else {
            this.characterService.getCharacters(<number><any>this.route.snapshot.paramMap.get('page') || 1).subscribe(
                (response: any) => {
                    this.characters = response.results;

                    delete response.results;

                    response.prefix = 'characters';

                    this.pagination = response;
                }
            );
        }
    }

    getData(): object[][] {
        let data = [];

        let index = 0;

        for (let i = 0; i < this.characters.length; i++) {
            if (data[index] === undefined) {
                data[index] = [];
            }

            data[index].push(this.characters[i]);

            if (i % 2 == 1) {
                index++;
            }
        }

        return data;
    }

}

import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent {

    character: object = {};

    constructor(
        route: ActivatedRoute,
        characterService: CharacterService
    ) {
        let id: number = <number><any>route.snapshot.paramMap.get('id');

        characterService.getCharacter(id).subscribe(
            (response: any) => { this.character = response }
        );
    }

}

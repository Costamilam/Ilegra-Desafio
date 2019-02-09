import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent {

    film: object = {};

    constructor(
        route: ActivatedRoute,
        filmService: FilmService
    ) {
        let id: number = <number><any>route.snapshot.paramMap.get('id');

        filmService.getFilm(id).subscribe(
            (response: any) => { this.film = response }
        );
    }

}

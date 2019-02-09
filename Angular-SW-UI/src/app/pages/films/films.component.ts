import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
})
export class FilmsComponent {

    films: object[] = [];

    constructor(
        filmService: FilmService,
        route: ActivatedRoute
    ) {
        if (route.snapshot.paramMap.has('id')) {
            for (const id of route.snapshot.paramMap.get('id').split('-')) {
                filmService.getFilm(<number><any>id).subscribe(
                    (response: any) => { this.films.push(response) }
                );
            }
        } else {
            filmService.getFilms().subscribe(
                (response: any) => { this.films = this.sortFilmsByEpisode(response.results) }
            );
        }
    }

    public sortFilmsByEpisode(films: any[]): object[] {
        return films.sort(
            (previous, next): any => previous.episode_id - next.episode_id
        );
    }

    public sortFilmsByDate(films: any[]): object[] {
        return films.sort(
            (previous, next): any => previous.release_date - next.release_date
        );
    }

}

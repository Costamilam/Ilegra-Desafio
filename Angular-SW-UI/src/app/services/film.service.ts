import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilmService {

    constructor(private http: HttpClient) { }

    getFilms(): Observable<object> {
        return this.http.get('/films');
    }

    getFilm(id: number): Observable<object> {
        return this.http.get(`/films/${id}`);
    }

}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

    constructor(private http: HttpClient) { }

    getStarships(page: number = 1): Observable<object> {
        return this.http.get(`/starships/?page=${page}`);
    }

    getStarship(id: number): Observable<object> {
        return this.http.get(`/starships/${id}`);
    }

}

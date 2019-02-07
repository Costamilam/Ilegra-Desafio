import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

    constructor(private http: HttpClient) { }

    getPlanets(page: number = 1): Observable<object> {
        return this.http.get(`/planets?page=${page}`);
    }

    getPlanet(id: number): Observable<object> {
        return this.http.get(`/planets/${id}`);
    }

}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

    constructor(private http: HttpClient) { }

    getSpecies(page: number = 1): Observable<object> {
        return this.http.get(`/species/?page=${page}`);
    }

    getSpecie(id: number): Observable<object> {
        return this.http.get(`/species/${id}`);
    }

}

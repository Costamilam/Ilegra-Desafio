import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

    constructor(private http: HttpClient) { }

    getCharacters(page: number): Observable<object> {
        return this.http.get(`/people/?page=${page}`);
    }

    getCharacter(id: number): Observable<object> {
        return this.http.get(`/people/${id}`);
    }

}

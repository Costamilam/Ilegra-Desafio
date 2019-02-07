import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

    constructor(private http: HttpClient) { }

    getVehicles(page: number = 1): Observable<object> {
        return this.http.get(`/vehicles/?page=${page}`);
    }

    getVehicle(id: number): Observable<object> {
        return this.http.get(`/vehicles/${id}`);
    }

}

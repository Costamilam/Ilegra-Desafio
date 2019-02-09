import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

    vehicle: object = {};

    constructor(
        route: ActivatedRoute,
        vehicleService: VehicleService
    ) {
        let id: number = <number><any>route.snapshot.paramMap.get('id');

        vehicleService.getVehicle(id).subscribe(
            (response: any) => { this.vehicle = response }
        );
    }

}

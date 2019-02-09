import { Component } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

    pagination: object = {};

    vehicles: object[] = [];

    constructor(
        private vehicleService: VehicleService,
        private route: ActivatedRoute,
        router: Router
    ) {
        router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(this.load)
    }

    load = () => {
        if (this.route.snapshot.paramMap.has('id')) {
            for (const id of this.route.snapshot.paramMap.get('id').split('-')) {
                this.vehicleService.getVehicle(<number><any>id).subscribe(
                    (response: any) => { this.vehicles.push(response) }
                );
            }
        } else {
            this.vehicleService.getVehicles(<number><any>this.route.snapshot.paramMap.get('page') || 1).subscribe(
                (response: any) => {
                    this.vehicles = response.results;

                    delete response.results;

                    response.prefix = 'vehicles';

                    this.pagination = response;
                }
            );
        }
    }

}

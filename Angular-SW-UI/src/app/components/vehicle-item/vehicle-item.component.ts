import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-vehicle-item',
    templateUrl: './vehicle-item.component.html',
    styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent {

    @Input() vehicle: object;

    constructor() { }

}

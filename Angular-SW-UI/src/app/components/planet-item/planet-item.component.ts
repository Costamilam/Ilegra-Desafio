import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-planet-item',
    templateUrl: './planet-item.component.html',
    styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent {

    @Input() planet: object;

    constructor() { }

}

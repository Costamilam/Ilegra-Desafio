import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-specie-item',
    templateUrl: './specie-item.component.html',
    styleUrls: ['./specie-item.component.css']
})
export class SpecieItemComponent {

    @Input() specie: object;

    constructor() { }

}

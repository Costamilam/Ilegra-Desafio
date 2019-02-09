import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-starship-item',
    templateUrl: './starship-item.component.html',
    styleUrls: ['./starship-item.component.css']
})
export class StarshipItemComponent {

    @Input() starship: object;

    constructor() { }

}

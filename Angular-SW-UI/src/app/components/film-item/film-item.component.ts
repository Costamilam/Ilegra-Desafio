import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-film-item',
    templateUrl: './film-item.component.html',
    styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent {

    @Input() film: object;

    @Input() reverse: boolean = false;

    constructor() { }

}

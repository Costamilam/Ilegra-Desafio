import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-character-item',
    templateUrl: './character-item.component.html',
    styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent {

    @Input() character: object;

    constructor() { }

}

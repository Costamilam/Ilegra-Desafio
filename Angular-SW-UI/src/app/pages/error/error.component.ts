import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent {

    code: number;

    text: string;

    constructor(route: ActivatedRoute) {
        this.code = <number><any>route.snapshot.paramMap.get('code');
        this.text = route.snapshot.paramMap.get('text');
    }

}

import { Component, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

    @Input() data: any = {};

    pagination: any = {};

    constructor(
        private route: ActivatedRoute
    ) {
        this.load(this.data);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data) {
            this.load(changes.data.currentValue);
        }
    }

    load(data) {
        if (data.previous === undefined) {
            return;
        }

        this.pagination.prefix = data.prefix;

        this.pagination.first = 1;

        this.pagination.current = this.route.snapshot.paramMap.has('page') ? this.route.snapshot.paramMap.get('page') : 1;

        this.pagination.prev = data.previous && data.previous.match('page=([0-9]+)')[1];

        this.pagination.next = data.next && data.next.match('page=([0-9]+)')[1];

        this.pagination.last = Math.ceil(data.count / 10);
    }

}

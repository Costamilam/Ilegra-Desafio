import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    @Input() data: object = {};

    linkType: string[] = ['homeworld', 'planets', 'characters', 'pilots', 'species', 'films', 'spaceships', 'vehicles'];

    linkAlias: object = {
        homeworld: 'planets',
        planets: 'planets',
        pilots: 'characters',
        characters: 'characters',
        people: 'characters',
        species: 'species',
        films: 'films',
        spaceships: 'spaceships',
        vehicles: 'vehicles'
    };

    links: object[] = [];

    constructor() { }

    ngOnInit() {
        for (const linkType of this.linkType) {
            if (this.data[linkType] && this.data[linkType].length > 0) {
                this.links.push({
                    name: linkType,
                    link: this.getLinks(linkType),
                    prefix: this.linkAlias[linkType],
                });
            }
        }
    }

    getLinks(linkType: string) {
        if (Array.isArray(this.data[linkType])) {
            return this.data[linkType].map(
                link => link.match('[0-9]+')[0]
            ).join('-');
        } else {
            return this.data[linkType].match('[0-9]+')[0];
        }
    }

}

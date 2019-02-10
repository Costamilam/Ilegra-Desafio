import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './pages/films/films.component';
import { FilmComponent } from './pages/film/film.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { SpeciesComponent } from './pages/species/species.component';
import { SpecieComponent } from './pages/specie/specie.component';
import { PlanetComponent } from './pages/planet/planet.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
    { path: 'error/:code/:text', component: ErrorComponent },
    { path: '', pathMatch: 'full', redirectTo: 'films' },

    { path: 'film/:id', component: FilmComponent },
    { path: 'films/:id', component: FilmsComponent },
    { path: 'films', component: FilmsComponent },

    { path: 'starship/:id', component: StarshipComponent },
    { path: 'starships/:id', component: StarshipsComponent },
    { path: 'starships/page/:page', component: StarshipsComponent },
    { path: 'starships', redirectTo: 'starships/page/1' },

    { path: 'vehicle/:id', component: VehicleComponent },
    { path: 'vehicles/:id', component: VehiclesComponent },
    { path: 'vehicles/page/:page', component: VehiclesComponent },
    { path: 'vehicles', redirectTo: 'vehicles/page/1' },

    { path: 'specie/:id', component: SpecieComponent },
    { path: 'species/:id', component: SpeciesComponent },
    { path: 'species/page/:page', component: SpeciesComponent },
    { path: 'species', redirectTo: 'species/page/1' },

    { path: 'planet/:id', component: PlanetComponent },
    { path: 'planets/:id', component: PlanetsComponent },
    { path: 'planets/page/:page', component: PlanetsComponent },
    { path: 'planets', redirectTo: 'planets/page/1' },

    { path: 'character/:id', component: CharacterComponent },
    { path: 'characters/:id', component: CharactersComponent },
    { path: 'characters/page/:page', component: CharactersComponent },
    { path: 'characters', redirectTo: 'characters/page/1' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

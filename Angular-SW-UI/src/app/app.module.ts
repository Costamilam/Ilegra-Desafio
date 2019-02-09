import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Routers
import { AppRoutingModule } from './app-routing.module';

//Interceptors
import { UrlInterceptor } from './interceptors/url.interceptor';
import { ResponseInterceptor } from './interceptors/response.interceptor';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { StarshipItemComponent } from './components/starship-item/starship-item.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';
import { PlanetItemComponent } from './components/planet-item/planet-item.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { SpecieItemComponent } from './components/specie-item/specie-item.component';

//Pages
import { ErrorComponent } from './pages/error/error.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmComponent } from './pages/film/film.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { SpecieComponent } from './pages/specie/specie.component';
import { SpeciesComponent } from './pages/species/species.component';
import { PlanetComponent } from './pages/planet/planet.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';

@NgModule({
    declarations: [
        //Components
        MenuComponent,
        PaginationComponent,
        StarshipItemComponent,
        VehicleItemComponent,
        PlanetItemComponent,
        CharacterItemComponent,
        SpecieItemComponent,
        FilmItemComponent,

        //Pages
        AppComponent,
        ErrorComponent,
        FilmsComponent,
        FilmComponent,
        StarshipsComponent,
        StarshipComponent,
        SpeciesComponent,
        SpecieComponent,
        PlanetsComponent,
        PlanetComponent,
        CharactersComponent,
        CharacterComponent,
        VehiclesComponent,
        VehicleComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UrlInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ResponseInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

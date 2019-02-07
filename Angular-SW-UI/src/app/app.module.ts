import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';

//Routers
import { AppRoutingModule } from './app-routing.module';

//Services
import { FilmService } from './services/film.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [
        FilmService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

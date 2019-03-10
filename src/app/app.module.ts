import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTES } from './app.routes';

import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { WithoutPhotoPipe } from './pipes/without-photo.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomSafePipe } from './pipes/dom-safe.pipe';
import { CardComponent } from './components/shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    WithoutPhotoPipe,
    ArtistComponent,
    LoadingComponent,
    DomSafePipe,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

const ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'artist/:id/:prevRoute', component: ArtistComponent },
	{ path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot( ROUTES );
import { SpotifyService } from '../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
	loading:boolean = false;

	constructor( private _spotifyService:SpotifyService ){}

	ngOnInit(){}

	searchArtist( text:string ){
		if (text) {
			this.loading = true;
			this._spotifyService.secureAccess()
				.then(()=>{
					this._spotifyService.getArtists(text)
						.subscribe( ()=> {
							this.loading = false;
						});
				})
		}
	}
	
}
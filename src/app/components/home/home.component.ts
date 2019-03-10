import { SpotifyService } from '../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

	loading:boolean = false;
	newRelease:any[] = [];

	constructor( public _ss:SpotifyService ) {
		this.loading = true;
		this._ss.secureAccess()
			.then(()=>{
				this._ss.getNewRelease()
					.subscribe(items=>{
						this.loading = false;
						this.newRelease = items;
					})
			})
	};

	ngOnInit(){}
	
}
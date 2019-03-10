import { SpotifyService } from '../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  
  loading:boolean = false;
  prevRoute:string;
  artist:any;
  tracks:any;

  constructor( private activatedRoute:ActivatedRoute,
               private _spotifyService:SpotifyService
              ) { }

  ngOnInit() {
    this.loading = true;
    this._spotifyService.secureAccess()
      .then(()=>{
        this.activatedRoute.params
          .subscribe( params => {
            if (params['prevRoute']) {
              this.prevRoute = params['prevRoute'];
            } else {
              this.prevRoute = 'home';
            }

            this._spotifyService.getArtist(params['id'] )
              .subscribe( data =>{
                this.artist = data;
                this.loading = false;
              });

            this._spotifyService.getTop(params['id'] )
              .subscribe( data => this.tracks = data );

          });
      })
  }


}

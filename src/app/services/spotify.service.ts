import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from  'rxjs/operators';

@Injectable()
export class SpotifyService {
  avaliableKey:boolean = false;

  artists:any[] = [];

  token:string = "";

  urlSearch:string= 'https://api.spotify.com/v1/search';
  urlArtist:string= 'https://api.spotify.com/v1/artists';
  urlTopTracks:string = 'https://api.spotify.com/v1/artists';
  urlNewRelease:string = 'https://api.spotify.com/v1/browse/new-releases';
  urlTk:string = ''
  clientId:string ='';
  clientSecret:string ='';

  constructor( private http:Http ) { }

  getNewRelease() {

    let headers = new Headers();
    headers.append("authorization", "Bearer " +this.token);

    let url = this.urlNewRelease;

    return this.http.get( url, { headers } )
      .pipe(map( res => {
        // console.log(res.json().tracks);
        return res.json().albums.items;
      }));

  }

  getArtists( term:string ) {

    let headers = new Headers();
    headers.append("authorization", "Bearer " +this.token);

    let q = `?q=${ term }&type=artist`;

    let url = this.urlSearch+q;

    return this.http.get( url, { headers } )
      .pipe(map( res =>{
        this.artists = res.json().artists.items;
        return res.json().artists.items;
      } ));

  }

  getArtist( term:string ) {

    let headers = new Headers();
    headers.append("authorization", "Bearer " +this.token);

    let q = `/${ term }`;

    let url = this.urlArtist+q;

    return this.http.get( url, { headers } )
      .pipe(map( res => {
        // console.log(res.json());
        return res.json();
      }));

  }

  getTop( term:string ) {

    let headers = new Headers();
    headers.append("authorization", "Bearer " +this.token);

    let q = `/${ term }/top-tracks?country=PE`;

    let url = this.urlTopTracks+q;

    return this.http.get( url, { headers } )
      .pipe(map( res => {
        // console.log(res.json().tracks);
        return res.json().tracks;
      }));

  }

  updateTkn(){
    let headers = new Headers();

    let q = `/${ this.clientId }/${ this.clientSecret }`;

    let url = this.urlTk+q;

    return this.http.get( url, { headers } )
      .pipe(map( res => {
        this.avaliableKey = true;
        this.token = res.json().access_token;
        return;
      }));
  }

  secureAccess(){
    let promise = new Promise((resolve, reject)=>{
      if (!this.avaliableKey) {
        this.updateTkn()
          .subscribe(()=>{
            resolve();
          }, err => {
            reject({ err: true });
          });
      } else {
        resolve();
      }
    });

    return promise;
  }

}

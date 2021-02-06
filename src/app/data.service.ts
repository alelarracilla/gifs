import { Injectable } from '@angular/core';
import { GiphyFetch } from '@giphy/js-fetch-api'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private gf;
  private data: Array<any>;
  constructor() { 
    this.gf = new GiphyFetch('gdwjphWDU038gRbOZBeOX0oNWQZEdPGM');
  }
  getTrendingGifs():any {
    return this.gf.trending({limit: 10});
  }
  searchGifs(value: string) {
    return this.gf.search(value);
  }

}

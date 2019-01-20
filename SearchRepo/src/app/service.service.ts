import { Injectable } from '@angular/core';
// import { HttpModule, Headers } from '@angular/http';
import { HttpClient} from '@angular/common/http';
// import { from } from 'rxjs';
// import 'rxjs/add/operator/filter';
// import { filter } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  searchrepo(key: string, lang: string) {

    return this.http.get('https://api.github.com/search/repositories?q=' + key + 'language:' + lang);
    // return this.http.get('https://api.github.com/search/repositories?q=', key , '+language:', lang);
      // data.lang).map(res => res.json());

  }

}



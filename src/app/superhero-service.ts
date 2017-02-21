import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Superhero } from './superhero.model';

@Injectable()
export class SuperheroService {
  public API_KEY:string = "";
  public ATTRIBUTES = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  API_KEY_URL:string = "https://hero-merge.herokuapp.com/getApiKey";
  GET_URL:string = "https://hero-merge.herokuapp.com/" + this.API_KEY + "/heroes";
  
  superheroes:Superhero[];
  superheroesObservable:Observable<Superhero[]>;

  constructor(private http:Http) { }

  ngOnInit() { }

  getAPIkey():any {
    return this.http.get(this.API_KEY_URL).map(res => res.json());
  }

  // getAPIkey5():any {
  //   if(this.API_KEY === "") {
  //     this.http.request(this.API_KEY_URL).subscribe((res:Response) => {
  //       if(res.json().hasOwnProperty("apiKey")) {
  //         this.API_KEY = res.json().apiKey;
  //       }
  //       return this.API_KEY;
  //     });
  //   }
  // }

  // getSuperheroesV7():any {
  //   this.getAPIkeyV4().flatMap(apiKey => {
  //     console.log("apiKey=",apiKey);
  //     return this.fetchSuperheroes(apiKey.apiKey)
  //   });
  // }

  // getSuperheroesV8():Observable<Array<Superhero>> {
  //   return this.getAPIkey().flatMap(apiKeyObj => {
  //     return this.http.get("https://hero-merge.herokuapp.com/" + apiKeyObj.apiKey + "/heroes")
  //           .map((data: any) => data.json());
  //   });
  // }

  getSuperheroesV9():Observable<Array<Superhero>> {
    if(this.API_KEY === "") {
      return this.getAPIkey().flatMap(apiKeyObj => {
        this.API_KEY = apiKeyObj.apiKey;
console.log("apiKey=",this.API_KEY);
        return this.http.get("https://hero-merge.herokuapp.com/" + this.API_KEY + "/heroes")
              .map((data: any) => data.json());
      });
    } else {
      return this.http.get("https://hero-merge.herokuapp.com/" + this.API_KEY + "/heroes")
              .map((data: any) => data.json());
    }
  }

  fetchSuperheroes():any {
console.log("inside fetchSuperheroes, apiKey=",this.API_KEY);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get("https://hero-merge.herokuapp.com/" + this.API_KEY + "/heroes", {headers: headers})
            .map((data: any) => data.json());
  }

  getSuperheroesViaPromise(): Promise<Array<Superhero>> {
    return this.http.get("https://hero-merge.herokuapp.com/" + this.API_KEY + "/heroes")
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  createNewHero(newSuperhero:Superhero) {
console.log("inside createNewHero, newSuperhero=",newSuperhero);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
    let newSuperheroJSON = JSON.stringify(newSuperhero);
console.log("  newSuperheroJSON=",newSuperheroJSON);
    return this.http.post(`https://hero-merge.herokuapp.com/${this.API_KEY}/heroes/`, newSuperheroJSON, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveHero(superhero:any) {
console.log("inside SuperheroService.saveHero, superhero=",superhero);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
    let heroJSON = JSON.stringify(superhero);
console.log("heroJSON=",heroJSON);
// console.log("url=https://hero-merge.herokuapp.com/"  + this.API_KEY + "/heroes/" + superhero.id);
console.log(`next url=https://hero-merge.herokuapp.com/${this.API_KEY}/heroes/${superhero.id}`);
    return this.http.patch(`https://hero-merge.herokuapp.com/${this.API_KEY}/heroes/${superhero.id}`, heroJSON, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private handleError(error: Response | any) {
console.log("inside handleError");
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 
}

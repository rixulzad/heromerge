import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Superhero } from '../superhero.model';
import { Attributes } from '../attributes.model';
import { SuperheroService } from '../superhero-service';
import { Observable } from 'rxjs';
// import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent implements OnInit {
  @Output() onHeroSelected:EventEmitter<Superhero> = new EventEmitter<Superhero>();
  heroes: Superhero[] = [];
  selectedHero:Superhero;
  newHero:Superhero;
  // newSuperheroAddedSubscription: Subscription;

  constructor(private superheroService:SuperheroService) { 
    // this.newSuperheroAddedSubscription = superheroService.superheroAdded$.subscribe(
    //   newSuperHero => {
    //   this.superheroService.superheroes.push(newSuperHero);
    // });
  }

  ngOnInit() {

// this worked returning a new API key
// this.superheroService.getAPIkeyV4().subscribe(
//   (apiKey) => console.log("new api key=",apiKey)
// );

// this totally worked
// this.superheroService.getAPIkeyV4().flatMap(apiKey => {
//       console.log("apiKey=",apiKey);
//       return this.superheroService.fetchSuperheroes(apiKey.apiKey)
//     }).subscribe(
//       (data) => this.heroes = data
//     );

this.superheroService.getSuperheroesV9().subscribe(
  (data) => {
    this.heroes = data;
console.log("all superhero data=",data);
    this.superheroService.superheroes = data;
    if(this.heroes.length > 0) {   // select the first hero, if there is one
      this.onHeroClicked(data[0]);

      // this.heroes.forEach(hero => {
      //   hero.attributes = this.bundleAttributes(hero.attributes);
      // });
    }
  },
  (error) => console.log("error=",error),
  () => console.log("... stream completed")
);

  this.onHeroClicked(this.selectedHero);
  }

  onHeroClicked(hero:Superhero) {
    if(hero === undefined) {
      hero = new Superhero();  
      hero.id = this.heroes.length + 1;

      // ToDo probably move this into a service
      hero.attributes = new Attributes();
      hero.powers = [];
    }

    this.selectedHero = hero;
    this.onHeroSelected.emit(hero);
  }

  onRefresh() {
    this.superheroService.fetchSuperheroes().subscribe(
      heroesArray => {
      this.heroes = heroesArray;
      this.onHeroClicked(this.heroes[0]);
    });
  }

  // This function takes in an Object of Attributes and converts it to our model structure
  // bundleAttributes(attributes):Array<Attribute> {
  //   console.log("inside listcomponent bundledAttributes, attributes=",attributes);
  //   let bundledAttributes = new Array<Attribute>();
  //   for (var key in attributes) {
  //     let newAttribute = new Attribute();
  //     newAttribute.name = key;
  //     newAttribute.value = attributes[key]; 

  //     bundledAttributes.push(newAttribute);
  //   }
  //   console.log("bundledAttributes=",bundledAttributes);
  //   return bundledAttributes;
  // }

}

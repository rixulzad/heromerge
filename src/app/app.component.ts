import { Component, ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { SuperheroService } from './superhero-service';
import { Superhero } from './superhero.model';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { SuperheroDetailsComponent } from './superhero-details/superhero-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SuperheroService ]
})
export class AppComponent {
  @ViewChild(SuperheroListComponent) listComponent:SuperheroListComponent;
  @ViewChild(SuperheroDetailsComponent) detailComponent: SuperheroDetailsComponent;
  selectedHero:Superhero;
  superHeroes: Superhero[];
  errorMessage: string;

  constructor(private superheroService:SuperheroService) { }

  ngOnInit() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        console.log(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        console.log(`${propName} changed from ${from} to ${to}`);
      }
    }
  }

  onHeroSelected(hero:Superhero) {
    // console.log("inside AppComponent onHeroSelected, hero=",hero);
    this.selectedHero = hero;
  }

  onHeroAdded(hero:Superhero) {
    console.log("inside AppComponent onHeroAdded, hero=",hero);
    this.listComponent.selectedHero = hero;
  }

}

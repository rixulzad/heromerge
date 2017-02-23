import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Superhero } from '../superhero.model';
import { Attributes } from '../attributes.model';
import { SuperheroService } from '../superhero-service';

@Component({
  selector: 'superhero-details',
  templateUrl: './superhero-details.component.html',
  styleUrls: ['./superhero-details.component.css']
})
export class SuperheroDetailsComponent implements OnInit {
  @Input() selectedHero:Superhero;
  @Output() onHeroChanged:EventEmitter<Superhero> = new EventEmitter<Superhero>();
  @Output() onHeroAdded:EventEmitter<Superhero> = new EventEmitter<Superhero>();

  constructor(private superheroService:SuperheroService) { }

  ngOnInit() {
    this.selectedHero = new Superhero();
    // this.selectedHero.hero_name = "No Superhero selected";
    // console.log("inside SuperheroDetailsComponent, selectedHero=",this.selectedHero);
  }
 
  onSuperHeroSave(hero) {
    console.log("superHeroSave, hero=",hero);
    // this.onHeroChanged.emit(hero);
    this.superheroService.saveHero(hero).subscribe(
      responseJSON => {
        // Emit list event
        // EmitterService.get(this.listId).emit(comments);
        console.log("responseJSON=",responseJSON);
        this.superheroService.superheroes = responseJSON;
    }, 
    err => {
      // Log errors if any
      console.log(err);
    });
  }

  onNewSuperHero() {
    console.log("inside onNewSuperHero, this.selectedHero=",this.selectedHero);
    console.log("JSON=",JSON.stringify(this.selectedHero));
    this.superheroService.createNewHero(this.selectedHero).subscribe(
      newHero => {
console.log("inside observable subscription response, newHero=",newHero);
        this.onHeroAdded.emit(newHero);
        this.superheroService.superheroes.push(newHero);
    });
  }

}

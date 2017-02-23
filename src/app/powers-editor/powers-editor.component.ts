import { Component, OnInit, Input } from '@angular/core';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'powers-editor',
  templateUrl: './powers-editor.component.html',
  styleUrls: ['./powers-editor.component.css']
})
export class PowersEditorComponent implements OnInit {
  @Input() selectedHero:Superhero; 
  selectedPowers:Array<Boolean>;

  constructor() { 
    this.selectedHero = new Superhero();
    this.selectedPowers = new Array<Boolean>();
    // this.selectedHero.powers = new Array<string>();
  }

  ngOnInit() {
    console.log("this.selectedHero=",this.selectedHero);
    // if(this.selectedHero && this.selectedHero.powers) {
      // for(let i=0, len=this.selectedHero.powers.length; i <len; i++) {
      //   this.selectedPowers.push(false);
      // }
    // }
  }

  onAddClicked() {
    console.log("Add clicked");
    this.selectedHero.powers.push("");
  }

  onRemovedClicked() {
    // don't try to splice elements out of an array you are iterating over, so use temp variable
    let indicesToRemove = new Array<number>();

    for(let i=0, len = this.selectedHero.powers.length; i < len; i++) {
      if(this.selectedPowers[i]) {
        indicesToRemove.push(i);
      }
    }

    // now remove the power from the selectedHero.powers array and the selectedPowers array
    for(let i=indicesToRemove.length-1; i>=0; i--) {
      this.selectedPowers.splice(indicesToRemove[i], 1);
      this.selectedHero.powers.splice(indicesToRemove[i], 1);
    }
  }

  onPowerChange(hero) {
    console.log("inside onPowerChange, hero=",hero);
    // do I need to save the new/edited/removed power array, since data only flows down?
  }

  trackByFn(index: any, item: any) {
   return index;
}

}

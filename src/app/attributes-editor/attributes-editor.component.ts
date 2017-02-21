import { Component, OnInit, Input } from '@angular/core';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'attributes-editor',
  templateUrl: './attributes-editor.component.html',
  styleUrls: ['./attributes-editor.component.css']
})
export class AttributesEditorComponent implements OnInit {
  @Input() selectedHero:Superhero; 

  constructor() { }

  ngOnInit() {
console.log("inside AttributesEditorComponent, selectedHero=",this.selectedHero);
  }

  // onAttributeChange(hero) {
  //   console.log("onAttributeChange, hero=",hero);
  // }
}

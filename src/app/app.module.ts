import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { SuperheroDetailsComponent } from './superhero-details/superhero-details.component';
import { SuperheroPersonalComponent } from './superhero-personal/superhero-personal.component';
import { AttributesEditorComponent } from './attributes-editor/attributes-editor.component';
import { AttributesListComponent } from './attributes-list/attributes-list.component';
import { PowersEditorComponent } from './powers-editor/powers-editor.component';
import { PowersListComponent } from './powers-list/powers-list.component';
import { WeaknessEditorComponent } from './weakness-editor/weakness-editor.component';
import { WeaknessListComponent } from './weakness-list/weakness-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroListComponent,
    SuperheroDetailsComponent,
    SuperheroPersonalComponent,
    AttributesEditorComponent,
    AttributesListComponent,
    PowersEditorComponent,
    PowersListComponent,
    WeaknessEditorComponent,
    WeaknessListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

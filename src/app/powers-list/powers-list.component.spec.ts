/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PowersListComponent } from './powers-list.component';

describe('PowersListComponent', () => {
  let component: PowersListComponent;
  let fixture: ComponentFixture<PowersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

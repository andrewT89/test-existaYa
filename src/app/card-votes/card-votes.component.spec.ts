/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardVotesComponent } from './card-votes.component';

describe('CardVotesComponent', () => {
  let component: CardVotesComponent;
  let fixture: ComponentFixture<CardVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

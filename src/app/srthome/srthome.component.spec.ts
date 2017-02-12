/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SrthomeComponent } from './srthome.component';

describe('SrthomeComponent', () => {
  let component: SrthomeComponent;
  let fixture: ComponentFixture<SrthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

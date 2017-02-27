/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserlogoutComponent } from './userlogout.component';

describe('UserlogoutComponent', () => {
  let component: UserlogoutComponent;
  let fixture: ComponentFixture<UserlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

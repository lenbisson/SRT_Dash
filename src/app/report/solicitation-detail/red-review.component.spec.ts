/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedReviewComponent } from './red-review.component';

describe('RedReviewComponent', () => {
  let component: RedReviewComponent;
  let fixture: ComponentFixture<RedReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

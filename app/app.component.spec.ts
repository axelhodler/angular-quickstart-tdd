/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('sets the title to Tour of Heroes', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/Tour of Heroes/i);
    expect(comp.title).toBe('Tour of Heroes');
  })
});

/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { Hero } from './hero';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

function querySecondHeading(fixture: any) {
  return fixture.debugElement.query(By.css('h2')).nativeElement;
}

describe('AppComponent', function () {
  let firstHeading: DebugElement;
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
    firstHeading = fixture.debugElement.query(By.css('h1'));
    fixture.detectChanges();
  });

  it('sets the title to Tour of Heroes', () => {
    const h1 = firstHeading.nativeElement;
    expect(h1.innerText).toMatch(/Tour of Heroes/i);
    expect(comp.title).toBe('Tour of Heroes');
  });

  it('gives the hero a name', () => {
    expect(comp.hero).toBe('Windstorm');
    const h2 = querySecondHeading(fixture);
    expect(h2.innerText).toBe('Windstorm details!');
  });

  it('displays h2 after h1', () => {
    expect(fixture.debugElement.nativeElement.lastChild.textContent).toBe('Windstorm details!');
  });

  xit('does not hardcode the values in the template', () => {
    comp.hero = 'Stormwind';
    comp.title = 'Heldensammlung';
    const h1 = firstHeading.nativeElement;
    const h2 = querySecondHeading(fixture);
    expect(h1.innerText).toMatch(/Heldensammlung/i);
    expect(h2.innerText).toBe('Stormwind details!')
  });

  describe('Hero', () => {
    it('can be created', () => {
      const hero: Hero = {
        id: 1,
        name: 'Peter'
      }
    });
  })
});

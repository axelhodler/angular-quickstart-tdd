/* tslint:disable:no-unused-variable */
import {AppComponent} from './app.component';
import {FormsModule}   from '@angular/forms';
import {Hero} from './hero';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';


function queryFirstHeading(fixture: ComponentFixture<AppComponent>) {
  return fixture.debugElement.query(By.css('h1')).nativeElement;
}
function querySecondHeading(fixture: ComponentFixture<AppComponent>) {
  return fixture.debugElement.query(By.css('h2')).nativeElement;
}
describe('AppComponent', function () {
  let firstHeading: any;
  let secondHeading: any;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sets the title to Tour of Heroes', () => {
    expect(queryFirstHeading(fixture).innerText).toMatch(/Tour of Heroes/i);
    expect(comp.title).toBe('Tour of Heroes');
  });

  it('gives the hero a name', () => {
    expect(comp.hero.name).toBe('Windstorm');
    expect(querySecondHeading(fixture).innerText).toBe('Windstorm details!');
  });

  it('displays h2 after h1', () => {
    expect(queryFirstHeading(fixture).nextElementSibling.textContent).toBe('Windstorm details!');
  });

  it('displays hero id and name', () => {
    const heroIdElement = querySecondHeading(fixture).nextElementSibling;
    expect(heroIdElement.textContent).toContain('id:');
    expect(heroIdElement.lastChild.textContent).toBe('1');
  });

  it('can edit the heroes name', () => {
    let heroIdElement = querySecondHeading(fixture).nextElementSibling;
    comp.hero.name = 'Stormwind';
    fixture.detectChanges();
    expect(heroIdElement.nextElementSibling.lastElementChild.outerHTML).toContain('Stormwind');
  });

  it('lists ten heroes with name and id', () => {
    let heroList = querySecondHeading(fixture).nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    expect(heroList.childElementCount).toBe(10);
    expect(heroList.firstElementChild.textContent).toContain('11 Mr. Nice');
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

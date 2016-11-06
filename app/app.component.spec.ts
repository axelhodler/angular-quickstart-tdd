/* tslint:disable:no-unused-variable */
import {AppComponent} from './app.component';
import {FormsModule}   from '@angular/forms';
import {Hero} from './hero';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';

import {AppComponentPageObject} from './app.component.pageobject'

describe('AppComponent', function () {
  let pageObject: AppComponentPageObject;
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
    pageObject = new AppComponentPageObject(fixture);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sets the title to Tour of Heroes', () => {
    expect(pageObject.firstHeading().innerText).toMatch(/Tour of Heroes/i);
    expect(comp.title).toBe('Tour of Heroes');
  });

  it('gives the hero a name', () => {
    pageObject.selectFirstHero();
    expect(comp.selectedHero.name).toBe('Windstorm');
    expect(pageObject.secondHeading().innerText).toBe('Windstorm details!');
  });

  it('displays h2 after h1', () => {
    pageObject.selectFirstHero();
    expect(pageObject.headingAfterFirstHeading().textContent).toBe('Windstorm details!');
  });

  it('can edit the heroes name', () => {
    pageObject.selectFirstHero();
    let heroIdElement = pageObject.secondHeading().nextElementSibling;
    comp.selectedHero.name = 'Stormwind';
    fixture.detectChanges();
    expect(heroIdElement.nextElementSibling.lastElementChild.outerHTML).toContain('Stormwind');
    comp.selectedHero.name = 'Windstorm'; // since change to Stormwind changes the datastructure of heroes
  });

  it('lists ten heroes with name and id', () => {
    let heroList = pageObject.heroList();
    expect(heroList.childElementCount).toBe(10);
    expect(pageObject.firstHeroTextContent()).toContain('1 Windstorm');
  });

  it('displays hero details only if a hero is selected', () => {
    comp.selectedHero = null;
    fixture.detectChanges();
    expect(pageObject.secondHeading().innerText).toBe('My Heroes');
  });

  it('displays the hero details of the selected hero', () => {
    pageObject.heroList().firstElementChild.nextElementSibling.click();
    fixture.detectChanges();
    const heroIdElement = pageObject.secondHeading().nextElementSibling;
    expect(heroIdElement.textContent).toContain('id:');
    expect(heroIdElement.lastChild.textContent).toBe('12');
    expect(pageObject.secondHeading().textContent).toBe('Narco details!');
  });

  it('uses the default styling for unselected heroes', () => {
    expect(pageObject.heroList().firstElementChild.classList).not.toContain('selected');
  });

  it('uses the selected class for selected heroes', () => {
    pageObject.selectFirstHero();
    expect(pageObject.heroList().firstElementChild.classList).toContain('selected');
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

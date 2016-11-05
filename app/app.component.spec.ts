/* tslint:disable:no-unused-variable */
import {AppComponent} from './app.component';
import {Hero} from './hero';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';

function querySecondHeading(fixture: any) {
  return fixture.debugElement.query(By.css('h2')).nativeElement;
}

describe('AppComponent', function () {
  let firstHeading: any;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    firstHeading = fixture.debugElement.query(By.css('h1')).nativeElement;
    fixture.detectChanges();
  });

  it('sets the title to Tour of Heroes', () => {
    expect(firstHeading.innerText).toMatch(/Tour of Heroes/i);
    expect(comp.title).toBe('Tour of Heroes');
  });

  it('gives the hero a name', () => {
    expect(comp.hero.name).toBe('Windstorm');
    const h2 = querySecondHeading(fixture);
    expect(h2.innerText).toBe('Windstorm details!');
  });

  it('displays h2 after h1', () => {
    expect(firstHeading.nextElementSibling.textContent).toBe('Windstorm details!');
  });

  it('displays hero id and name', () => {
    expect(querySecondHeading(fixture).nextElementSibling.textContent).toContain('id:');
    expect(querySecondHeading(fixture).nextElementSibling.lastChild.textContent).toContain('1');
  });

  xit('does not hardcode the values in the template', () => {
    comp.hero.name = 'Stormwind';
    comp.title = 'Heldensammlung';
    const h2 = querySecondHeading(fixture);
    expect(firstHeading.innerText).toMatch(/Heldensammlung/i);
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

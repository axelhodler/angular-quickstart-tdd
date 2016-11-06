import {AppComponent} from './app.component';
import {ComponentFixture} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';

export class AppComponentPageObject {

  constructor(private contents: ComponentFixture<AppComponent>) {}

  firstHeading() {
    return this.contents.debugElement.query(By.css('h1')).nativeElement;
  }

  secondHeading() {
    return this.contents.debugElement.query(By.css('h2')).nativeElement;
  }

  heroList() {
    return this.contents.debugElement.query(By.css('#herolist')).nativeElement;
  }

  headingAfterFirstHeading() {
    return this.firstHeading().nextElementSibling.firstElementChild;
  }

  firstHeroTextContent() {
    return this.heroList().firstElementChild.textContent;
  }

  selectFirstHero() {
    this.heroList().firstElementChild.click();
    this.contents.detectChanges();
  }
}

import {AppComponent} from './app.component';
import {ComponentFixture} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';

export class AppComponentPageObject {

  constructor(private contents: ComponentFixture<AppComponent>) {
  }

  firstHeading() {
    return this.extractByCss('h1');
  }

  secondHeading() {
    return this.extractByCss('h2');
  }

  heroList() {
    return this.extractByCss('#herolist');
  }

  headingAfterFirstHeading() {
    return this.extractByCss('#hero-detail-heading');
  }

  firstHeroTextContent() {
    return this.heroList().firstElementChild.textContent;
  }

  firstHero() {
    return this.heroList().firstElementChild;
  }

  selectFirstHero() {
    this.heroList().firstElementChild.click();
    this.contents.detectChanges();
  }

  private extractByCss(identifier: string) {
    return this.contents.debugElement.query(By.css(identifier)).nativeElement;
  }
}

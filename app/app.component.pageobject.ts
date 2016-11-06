import {AppComponent} from './app.component';
import {ComponentFixture} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';

export class AppComponentPageObject {
  contents: ComponentFixture<AppComponent>;

  constructor(contents: ComponentFixture<AppComponent>) {
    this.contents = contents;
  }

  firstHeading() {
    return this.contents.debugElement.query(By.css('h1')).nativeElement;
  }
}

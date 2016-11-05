import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name : 'Windstorm'
  };
}

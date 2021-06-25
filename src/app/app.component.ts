import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'All', url: '/folder/All', icon: 'sparkles' },
    { title: 'Restaurant', url: '/folder/Restaurant', icon: 'restaurant' },
    { title: 'Must-See', url: '/folder/MustSee', icon: 'eye' },
    { title: 'Restroom', url: '/folder/Restroom', icon: 'male-female' },
    { title: 'Tourist Info.', url: '/folder/tinfo', icon: 'information' },
  ];
  constructor() {}
}

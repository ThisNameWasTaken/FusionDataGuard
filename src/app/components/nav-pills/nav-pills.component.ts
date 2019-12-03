import { Component, Input } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';

type NavPills = {
  label: string;
  icon: string;
  isActive?: boolean;
};

@Component({
  selector: 'app-nav-pills',
  templateUrl: './nav-pills.component.html',
  styleUrls: ['./nav-pills.component.css'],
})
export class NavPillsComponent {
  @Input('navPills')
  navPills: NavPills[] = [
    {
      label: 'Profile',
      icon: 'person',
      isActive: true,
    },
    {
      label: 'Schedule',
      icon: 'schedule',
    },
    {
      label: 'Settings',
      icon: 'settings',
    },
  ];

  constructor() {}
}

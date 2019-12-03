import { Component, Input } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';

type NavPill = {
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
  navPills: NavPill[] = [
    {
      label: 'MKD Alerts',
      icon: 'person',
      isActive: true,
    },
    {
      label: '1 Monitoring',
      icon: 'schedule',
    },
    {
      label: 'Static Data',
      icon: 'schedule',
    },
    {
      label: '2 Monitoring',
      icon: 'settings',
    },
  ];

  private lastActiveNavPillIndex =
    this.navPills.findIndex(({ isActive }) => isActive) || 0;

  constructor() {}

  onClick(event: Event, navPillIndex: number) {
    event.preventDefault();

    console.log(event, navPillIndex);

    this.navPills[navPillIndex].isActive = true;
    this.navPills[this.lastActiveNavPillIndex].isActive = false;

    this.lastActiveNavPillIndex = navPillIndex;
  }
}

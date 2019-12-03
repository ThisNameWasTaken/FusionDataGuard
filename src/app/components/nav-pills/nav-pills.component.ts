import { Component, Input, OnInit } from '@angular/core';

type NavPill = {
  label: string;
  icon: string;
  isActive?: boolean;
};

const mockedData = {
  items: [
    {
      Name: 'EUR/USD',
      Type: 'MKD Alert',
      Description: 'Spike detected',
      IsOK: false,
      CreatedTime: '2019-12-03T16:27:40.138Z',
      Data: {
        items: [
          {
            date: '2019-12-03',
            last: 1,
            barrier: 1.1,
          },
          {
            date: '2019-12-04',
            last: 1.05,
            barrier: 1.1,
          },
          {
            date: '2019-12-05',
            last: 0.95,
            barrier: 1.1,
          },
          {
            date: '2019-12-06',
            last: 1,
            barrier: 1.1,
          },
          {
            date: '2019-12-07',
            last: 0.9,
            barrier: 1.1,
          },
          {
            date: '2019-12-08',
            last: 0.8,
            barrier: 1.1,
          },
          {
            date: '2019-12-09',
            last: 1.3,
            barrier: 1.1,
          },
        ],
      },
    },
  ],
};

@Component({
  selector: 'app-nav-pills',
  templateUrl: './nav-pills.component.html',
  styleUrls: ['./nav-pills.component.css'],
})
export class NavPillsComponent implements OnInit {
  @Input('navPills')
  navPills: NavPill[] = [
    {
      label: 'MKD Alerts',
      icon: 'person',
    },
    {
      label: 'Barrier Monitoring',
      icon: 'schedule',
    },
    {
      label: 'Static Data',
      icon: 'schedule',
      isActive: true,
    },
    {
      label: 'Portfolio Monitoring',
      icon: 'settings',
    },
  ];

  staticData: {
    points: number[];
    baseline: number;
    labels: string[];
  };

  private lastActiveNavPillIndex =
    this.navPills.findIndex(({ isActive }) => isActive) || 0;

  constructor() {}

  ngOnInit() {
    this.staticData = {
      points: mockedData.items[0].Data.items.map(({ last }) => last),
      baseline: mockedData.items[0].Data.items[0].barrier,
      labels: mockedData.items[0].Data.items.map(({ date }) => date),
    };
  }

  onClick(event: Event, navPillIndex: number) {
    event.preventDefault();

    this.navPills[navPillIndex].isActive = true;
    this.navPills[this.lastActiveNavPillIndex].isActive = false;

    this.lastActiveNavPillIndex = navPillIndex;
  }
}

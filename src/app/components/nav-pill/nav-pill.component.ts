import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-pill',
  templateUrl: './nav-pill.component.html',
  styleUrls: ['./nav-pill.component.css'],
})
export class NavPillComponent {
  @Input('label')
  label: string;

  @Input('icon')
  icon: string;

  @Input('active')
  isActive: boolean;

  constructor() {}
}

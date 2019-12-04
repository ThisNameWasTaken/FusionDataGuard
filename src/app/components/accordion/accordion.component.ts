import { Component, OnInit } from '@angular/core';
import { GuardService } from 'src/app/services/guard.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  staticData: {
    points: number[];
    baseline: number;
    labels: string[];
  };

  mkdData;

  constructor(private guardService: GuardService) {}

  ngOnInit() {
    document.body.classList.add('home-page');
    document.body.classList.add('off-canvas-sidebar');

    this.staticData = this.guardService.getStaticData();
    this.mkdData = this.guardService.getMarketDataAlerts();

    console.log(this.mkdData);
  }
}

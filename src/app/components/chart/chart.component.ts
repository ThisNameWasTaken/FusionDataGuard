import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart, ChartDataSets, ChartData } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @ViewChild('canvasRef', { static: true })
  canvasRef: ElementRef;

  @Input('points')
  points: number[];

  @Input('baseline')
  baseLine: number;

  @Input('labels')
  labels: string[];

  constructor() {}

  ngOnInit() {
    const gradient = this.canvasRef.nativeElement
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(233, 30, 99)');
    gradient.addColorStop(1, 'rgba(233, 30, 99, 0)');

    const datasets: any[] = [
      {
        label: 'last',
        data: this.points,
        backgroundColor: gradient,
        borderColor: '#e91e63',
        borderWidth: 1,
      },
    ];

    console.log(this.points, this.points.length);

    if (this.baseLine) {
      datasets.push({
        label: 'barrier',
        data: this.points.map(point => this.baseLine),
        backgroundColor: 'transparent',
        borderColor: '#46f',
        pointRadius: 0,
        pointHitRadius: 0,
        borderWidth: 1,
      });
    }

    console.log(datasets);

    new Chart(this.canvasRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        // @ts-ignore
        datasets,
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}

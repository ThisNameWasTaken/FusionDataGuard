import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @ViewChild('canvasRef', { static: true })
  canvasRef: ElementRef;

  constructor() {}

  ngOnInit() {
    const gradient = this.canvasRef.nativeElement
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(233, 30, 99)');
    gradient.addColorStop(1, 'rgba(233, 30, 99, 0)');

    new Chart(this.canvasRef.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        datasets: [
          {
            label: '# count',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: gradient,
            borderColor: '#e91e63',
            borderWidth: 1,
          },
        ],
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

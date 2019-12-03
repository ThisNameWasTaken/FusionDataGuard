import { Component, Input } from '@angular/core';

export interface TableData {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent {
  @Input('header')
  displayedColumns: string[];

  @Input('data')
  dataSource: TableData[];
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[];

  @Input('label')
  label: string;

  @Input('data')
  dataSource: [];

  ngOnInit() {
    // @ts-ignore
    this.displayedColumns = Object.keys(this.dataSource[0]);
  }
}

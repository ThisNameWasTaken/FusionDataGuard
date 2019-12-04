import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[];

  @Input('data')
  dataSource: [];

  ngOnInit() {
    this.displayedColumns = Object.keys(this.dataSource[0]);
  }
}

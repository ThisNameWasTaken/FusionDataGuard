import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  public queryCtrl: FormControl;

  lrm = {
    condition: 'AND',
    rules: [
      {
        condition: 'AND',
        rules: [
          {
            id: 'realized',
            field: 'realized',
            type: 'double',
            input: 'number',
            operator: 'between',
            value: [20000, 30000],
          },
          {
            id: 'Actual',
            field: 'Actual vs Realized',
            type: 'integer',
            input: 'number',
            operator: 'less',
            value: 1000,
          },
        ],
      },
    ],
    valid: true,
  };

  public query = window['query'] || {
    condition: 'and',
    rules: [
      {
        field: 'realized',
        operator: '>=',
        value: 20000,
        entity: 'physical',
      },
      {
        field: 'currencyPair',
        operator: '!=',
        value: 'EUR/GBP',
        entity: 'physical',
      },
      {
        field: 'last',
        operator: 'is not null',
        entity: 'nonphysical',
      },
      {
        field: 'threshold',
        operator: '>',
        value: 0.3,
      },
      {
        field: 'swift',
        operator: 'is not null',
      },
      {
        field: 'isin',
        operator: '=',
        value: '12',
      },
    ],
  };

  public entityConfig: QueryBuilderConfig = {
    entities: {
      physical: { name: 'Physical Attributes' },
      nonphysical: { name: 'Nonphysical Attributes' },
    },
    fields: {
      realized: { name: 'realized', type: 'number', entity: 'physical' },
      currencyPair: {
        name: 'currency pair',
        entity: 'physical',
        type: 'category',
        options: [
          { name: 'EUR/USD', value: 'EUR/USD' },
          { name: 'EUR/GBP', value: 'EUR/GBP' },
        ],
      },
      last: {
        name: 'last',
        type: 'string',
        nullable: true,
        entity: 'nonphysical',
      },
      swift: {
        name: 'swift',
        type: 'string',
        nullable: true,
        entity: 'nonphysical',
      },
      threshold: {
        name: 'threshold',
        type: 'number',
        entity: 'physical',
      },
      isin: {
        name: 'isin',
        type: 'string',
        entity: 'physical',
      },
    },
  };

  public config: QueryBuilderConfig = {
    fields: {
      realized: { name: 'Realized', type: 'number' },
      currencyPair: {
        name: 'Currency',
        type: 'category',
        options: [
          { name: 'EUR/USD', value: 'EUR/USD' },
          { name: 'EUR/GBP', value: 'EUR/GBP' },
        ],
      },
      last: {
        name: 'last',
        type: 'string',
        nullable: true,
      },
      swift: {
        name: 'swift',
        type: 'string',
        nullable: true,
      },
      threshold: {
        name: 'threshold',
        type: 'number',
      },
      isin: {
        name: 'isin',
        type: 'string',
      },
    },
  };

  public currentConfig: QueryBuilderConfig;
  public allowRuleset: boolean = true;
  public allowCollapse: boolean = true;
  public persistValueOnFieldChange: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {
    this.queryCtrl = this.formBuilder.control(this.query);
    this.currentConfig = this.config;
  }

  ngOnInit() {
    // TODO: Unsubscribe
    this._bottomSheetRef.afterDismissed().subscribe(() => {
      // @ts-ignore
      window.query = this.query;
    });
  }

  switchModes(event: Event) {
    this.currentConfig = (<HTMLInputElement>event.target).checked
      ? this.entityConfig
      : this.config;
  }

  changeDisabled(event: Event) {
    (<HTMLInputElement>event.target).checked
      ? this.queryCtrl.disable()
      : this.queryCtrl.enable();
  }
}

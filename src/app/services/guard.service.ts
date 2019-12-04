import { Injectable } from '@angular/core';

const mockedTableData = [
  {
    entity: 'FundA',
    instrument: 'EUR/USD',
    'asset value': 10079,
    'market value': 1079.1,
    currency: 'EUR',
    nav: 1078.2,
    balance: 5002.3,
  },
  {
    entity: 'FundB',
    instrument: 'EUR/USD OPT',
    'asset value': 5283.321,
    'market value': 502.7,
    currency: 'EUR',
    nav: 5281.12,
    balance: 5011.2,
  },
];

const mockedData = {
  items: [
    {
      Name: 'EUR/USD',
      Type: 'Barrier Monitoring',
      Description: 'Barrier breached',
      IsOK: false,
      CreatedTime: '2019-12-05T12:27:40.138Z',
      Data: {
        items: [
          {
            date: '2019-11-27',
            last: 1,
            barrier: 1.1,
          },
          {
            date: '2019-11-28',
            last: 1.05,
            barrier: 1.1,
          },
          {
            date: '2019-11-29',
            last: 0.95,
            barrier: 1.1,
          },
          {
            date: '2019-12-02',
            last: 1,
            barrier: 1.1,
          },
          {
            date: '2019-12-03',
            last: 0.9,
            barrier: 1.1,
          },
          {
            date: '2019-12-04',
            last: 0.8,
            barrier: 1.1,
          },
          {
            date: '2019-12-05',
            last: 1.3,
            barrier: 1.1,
          },
        ],
      },
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  getStaticData() {
    return {
      points: mockedData.items[0].Data.items.map(({ last }) => last),
      baseline: mockedData.items[0].Data.items[0].barrier,
      labels: mockedData.items[0].Data.items.map(({ date }) => date),
    };
  }
}

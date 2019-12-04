import { Injectable } from '@angular/core';

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

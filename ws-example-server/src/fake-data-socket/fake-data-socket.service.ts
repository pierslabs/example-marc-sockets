import { Injectable } from '@nestjs/common';

@Injectable()
export class FakeDataSocketService {
  create() {
    const randomData = [
      {
        name: 'Page A',
        uv: this.getRandomValue(2000, 4000),
        pv: this.getRandomValue(2400, 4800),
        amt: this.getRandomValue(2000, 2500),
      },
      {
        name: 'Page B',
        uv: this.getRandomValue(2000, 3000),
        pv: this.getRandomValue(1398, 9800),
        amt: this.getRandomValue(2000, 2210),
      },
      {
        name: 'Page C',
        uv: this.getRandomValue(1000, 2000),
        pv: this.getRandomValue(9800, 12000),
        amt: this.getRandomValue(2000, 2290),
      },
      {
        name: 'Page D',
        uv: this.getRandomValue(1500, 2780),
        pv: this.getRandomValue(3908, 4800),
        amt: this.getRandomValue(1800, 2000),
      },
      {
        name: 'Page E',
        uv: this.getRandomValue(1000, 1890),
        pv: this.getRandomValue(4500, 4800),
        amt: this.getRandomValue(2100, 2181),
      },
      {
        name: 'Page F',
        uv: this.getRandomValue(1800, 2390),
        pv: this.getRandomValue(3500, 3800),
        amt: this.getRandomValue(2200, 2500),
      },
      {
        name: 'Page G',
        uv: this.getRandomValue(3000, 3490),
        pv: this.getRandomValue(4000, 4300),
        amt: this.getRandomValue(1900, 2100),
      },
    ];

    return randomData;
  }

  create2() {
    const randomData = [
      {
        name: 'Page A',
        uv: this.getRandomValue(2000, 4000),
        pv: this.getRandomValue(2400, 4800),
        amt: this.getRandomValue(2000, 2500),
      },
      {
        name: 'Page B',
        uv: this.getRandomValue(2000, 3000),
        pv: this.getRandomValue(1398, 9800),
        amt: this.getRandomValue(2000, 2210),
      },
      {
        name: 'Page C',
        uv: this.getRandomValue(1000, 2000),
        pv: this.getRandomValue(9800, 12000),
        amt: this.getRandomValue(2000, 2290),
      },
      {
        name: 'Page D',
        uv: this.getRandomValue(1500, 2780),
        pv: this.getRandomValue(3908, 4800),
        amt: this.getRandomValue(1800, 2000),
      },
      {
        name: 'Page E',
        uv: this.getRandomValue(1000, 1890),
        pv: this.getRandomValue(4500, 4800),
        amt: this.getRandomValue(2100, 2181),
      },
      {
        name: 'Page F',
        uv: this.getRandomValue(1800, 2390),
        pv: this.getRandomValue(3500, 3800),
        amt: this.getRandomValue(2200, 2500),
      },
      {
        name: 'Page G',
        uv: this.getRandomValue(3000, 3490),
        pv: this.getRandomValue(4000, 4300),
        amt: this.getRandomValue(1900, 2100),
      },
    ];

    return randomData;
  }

  getRandomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      const detik = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (detik < 29) {
        // less than 30 seconds ago will show as 'Just now'
        return 'Baru saja';
      }
      const intervals = {
        tahun: 31536000,
        bulan: 2592000,
        minggu: 604800,
        hari: 86400,
        jam: 3600,
        menit: 60,
        detik: 1
      };
      let counter;
      // tslint:disable-next-line:forin
      for (const i in intervals) {
        counter = Math.floor(detik / intervals[i]);
        if (counter > 0) {
          return counter + ' ' + i + ' yang lalu';
        }
      }
    }
    return value;
  }
}

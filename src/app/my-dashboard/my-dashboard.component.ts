import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {

  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {      
      if (matches) {
        return [
          { title: 'New Agreements', type: 'agreements', cols: 2, rows: 1 },
          { title: 'New Customers', type: 'customers', cols: 2, rows: 1 },
          { title: 'Top Stores', type: 'stores', cols: 2, rows: 1 }
        ];
      }
      else {
        return [
          { title: 'New Agreements', type: 'agreements', cols: 2, rows: 1 },
          { title: 'New Customers', type: 'customers', cols: 1, rows: 1 },
          { title: 'Top Stores', type: 'stores', cols: 1, rows: 1 }
        ];
      }

    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

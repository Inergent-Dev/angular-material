import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AgreementsTableDataSource } from './agreements.datasource';

@Component({
  selector: 'app-new-agreements',
  templateUrl: './new-agreements.component.html',
  styleUrls: ['./new-agreements.component.css']
})
export class NewAgreementsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AgreementsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'date', 'customer', 'store', 'payment'];

  ngOnInit() {
    this.dataSource = new AgreementsTableDataSource(this.paginator, this.sort);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('PaginatorArchive', {static: true}) paginatorArchive: MatPaginator;

  dataSource;
  hasArchived: boolean;
  dataSourceArchive;
  displayedColumns: string[] = ['level', 'description', 'origin', 'date', 'frequency', 'actions'];

  ngOnInit(): void {
    this.getLogs();
    this.getArchive();
  }

  getLogs() {
        this.logService.getLogs().toPromise().then((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        
    })
  }

  getArchive() {
    this.logService.getLogsArquived().toPromise().then((data) => {
      this.dataSourceArchive = new MatTableDataSource(data);
      this.dataSourceArchive.paginator = this.paginatorArchive;
      this.hasArchived = data.length  > 0; 
    } )
  }

  archive(ev, log) {
    this.logService.updateLog(ev,log).toPromise().then( () => {
      this.getLogs();
      this.getArchive();
    });
  }

  unarchive(ev, log) {
    this.logService.updateLog(ev,log).toPromise().then( () => {
      this.getLogs();
      this.getArchive();
    });
  }

  delete(ev) {
    this.logService.deleteLog(ev).toPromise().then( () => {
      this.getLogs();
      this.getArchive();
    });
  }

  show(ev) {
    this.router.navigate(['/description', ev]);
  }

  constructor(public router : Router, public logService : LogService) { }
}

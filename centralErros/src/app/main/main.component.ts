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
  dataSourceArchive;
  displayedColumns: string[] = ['level', 'description', 'origin', 'date', 'frequency', 'actions'];
  
  ngOnInit(): void {
    this.getLogs();
  }
  
  getLogs() {
        this.logService.getLogs().toPromise().then((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSourceArchive = new MatTableDataSource(data);
        this.dataSourceArchive.paginator = this.paginatorArchive;
    })
  }

  archive(ev, log) { 
    log.isArquived = true;
    this.logService.updateLog(ev,log).toPromise();
    this.getLogs();
  }

  unarchive(ev, log) { 
    log.isArquived = false;
    this.logService.updateLog(ev,log).toPromise();
    this.getLogs();
  }

  delete(ev) { 
    this.logService.deleteLog(ev).toPromise();
    this.getLogs();
  }

  show(ev) { 
    this.router.navigate(['/description', ev]);
  }

  constructor(public router : Router, public logService : LogService) { } 
}

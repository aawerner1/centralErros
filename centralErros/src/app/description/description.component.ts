import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../services/log.service';
import { LogFilter } from '../models/logFilter';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  dataLog;
  id: number;
  private sub: any;

  constructor(public logService: LogService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
        this.carregarLog(this.id);
    })

    this.getArquivados()
  }

  carregarLog(id: number) {
    this.logService.getLog(id)
    .toPromise()
    .then((data) => {
      console.table(data)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getArquivados() {
    this.logService.getLogsArquived(new LogFilter()).toPromise().then((data) => {
      console.table(data);
    });
  }
}

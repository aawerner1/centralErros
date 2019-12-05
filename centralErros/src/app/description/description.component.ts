import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../services/log.service';

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
      this.id = +params['id'];
      this.carregarLog(this.id);
    })
  }

  carregarLog(id: number) {
    this.logService.getLog(id)
    .toPromise()
    .then((data) => {
      console.log(data)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

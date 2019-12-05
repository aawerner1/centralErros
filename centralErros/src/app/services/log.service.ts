import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogFilter } from '../models/logFilter';
import { catchError, map, tap } from 'rxjs/operators';
import { Promise } from 'q';

export class log {
  _id: string;
  Description: string;
  Origen: string;
  Level: string;
  Log: string;
  Environment: string;
  Frequency: number;
  Date: Date;
  isArquived: boolean;
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
//const apiUrl = 'http://localhost:64172/api/Deboche';
//const apiUrl = 'assets/api/log.json';

const apiUrl = 'http://www.mocky.io/v2/5de86fa031000086006b117e'

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  getLogs(): Observable<any> {
    return this.http.get(apiUrl , httpOptions);
  }

  getLogsArquived(filter: LogFilter): Observable<any> {
    return this.http.post(apiUrl, filter, httpOptions);
  }

  getLog(id: number) {
    const url = `${apiUrl}/${id}`;
    return this.http.get(apiUrl);
  }

  addLog(log): Observable<log> {
    return this.http.post<log>(apiUrl, log, httpOptions);
  }

  updateLog(id, log): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, log, httpOptions);
  }

  deleteLog(id): Observable<log> {
    const url = `${apiUrl}/delete/${id}`;
    return this.http.delete<log>(url, httpOptions);
  }

}

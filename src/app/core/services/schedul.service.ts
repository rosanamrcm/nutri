import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scheduled} from 'src/app/interfaces/scheduled';
import { AppoimentHistory } from 'src/app/interfaces/appoimentHistory';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchedulService {

  constructor(private httpClient: HttpClient) { }

  scheduled() {
    return this.httpClient.get<Scheduled[]>(`${API_PATH}scheduled`)
  }

  appoimentHistory() {
    return this.httpClient.get<AppoimentHistory[]>(`${API_PATH}appoiment_history`)
  }
}

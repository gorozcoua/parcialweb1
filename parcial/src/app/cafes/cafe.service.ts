import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Cafe } from './cafe';


@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl = environment.baseUrl + 'Grupo3.json';

  constructor(private http: HttpClient) { }

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }

}

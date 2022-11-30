import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumbersSortData } from './numdata';

@Injectable({
  providedIn: 'root'
})
export class NumService {

  private apiServerUrl = 'http://localhost:8080'


  constructor(private http: HttpClient){}

  public getNums(numbersSortData: NumbersSortData) {
    return this.http.post(`${this.apiServerUrl}/numbers/sort-command`, numbersSortData);
  }

}
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CurrencyRequest {
  currency: string;
  name: string;
}

interface CurrencyRequestLog {
  id: number;
  currencyCode: string;
  personName: string;
  date: string; // You can use string or Date type here based on your preference
  currencyExchangeRate: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  currencyCode: string = '';
  userName: string = '';
  currencyValue: number | undefined; // Initialize as 'undefined'
  requests: CurrencyRequestLog[] = [];

  constructor(private http: HttpClient) {}

  getCurrencyValue() {
    const body: CurrencyRequest = {
      currency: this.currencyCode,
      name: this.userName,
    };

    this.http
      .post<number>(
        'http://localhost:8080/currencies/get-current-currency-value-command',
        body
      )
      .subscribe((response) => {
        this.currencyValue = response; 
        this.getAllCurrencyRequests();
      });
  }

  getAllCurrencyRequests() {
    this.http
      .get<CurrencyRequestLog[]>(
        'http://localhost:8080/currencies/requests'
      )
      .subscribe((response) => {
        this.requests = response;
      });
  }
}
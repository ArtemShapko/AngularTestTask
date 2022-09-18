import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Card } from '../card/card';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Card[]> {
    return this.http.get<Card[]>(
      'https://63236066bb2321cba918be69.mockapi.io/item'
    );
  }
}

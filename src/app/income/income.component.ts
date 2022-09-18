import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../card/card.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  data: Card[] = [];
  itemsIncome: Card[] = [];
  constructor(private server: HttpService) {}

  ngOnInit(): void {
    this.server.getData().subscribe((data: Card[]) => {
      this.data = data;
      this.itemsIncome = this.data.filter((v: Card) => v.type === 'income');
    });
  }
}

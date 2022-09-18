import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../card/card.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
})
export class InvestmentComponent implements OnInit {
  data: Card[] = [];
  itemsInvestment: Card[] = [];
  constructor(private server: HttpService) {}

  ngOnInit(): void {
    this.server.getData().subscribe((data: Card[]) => {
      this.data = data;
      this.itemsInvestment = this.data.filter(
        (v: Card) => v.type === 'investment'
      );
    });
  }
}

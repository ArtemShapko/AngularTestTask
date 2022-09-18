import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../card/card.service';
import { Card } from '../card/card';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
})
export class LoanComponent implements OnInit {
  data: Card[] = [];
  itemsLoan: Card[] = [];
  constructor(private server: HttpService) {}

  ngOnInit(): void {
    this.server.getData().subscribe((data: Card[]) => {
      this.data = data;
      this.itemsLoan = this.data.filter((v: Card) => v.type === 'loan');
    });
  }
}

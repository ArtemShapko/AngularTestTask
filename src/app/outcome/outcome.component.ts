import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../card/card.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss'],
})
export class OutcomeComponent implements OnInit {
  data: Card[] = [];
  itemsOutcome: Card[] = [];
  constructor(private server: HttpService) {}

  ngOnInit(): void {
    this.server.getData().subscribe((data: Card[]) => {
      this.data = data;
      this.itemsOutcome = this.data.filter((v: Card) => v.type === 'outcome');
    });
  }
}

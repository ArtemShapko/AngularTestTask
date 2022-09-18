import { Component, OnInit } from '@angular/core';
import { HttpService } from './card.service';
import { Card } from './card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  providers: [HttpService],
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private server: HttpService) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.scss']
})
export class EconomicComponent implements OnInit {
  cards: any[] = [
    {
      title: 'Card Title 1',
      description: 'This is the description for card 1.',
      imageUrl: 'assets/money.png'
    },
    {
      title: 'Card Title 2',
      description: 'This is the description for card 2.',
      imageUrl: 'assets/money.png' 
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

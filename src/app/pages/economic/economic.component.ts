import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.scss']
})
export class EconomicComponent implements OnInit {
  cards: any[] = [
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
    {
      title: 'How to thrive in an Economic Slowdown',
      description:`With about 17.4 million enterprises, it is no denial that SMEs account forms approximately 50% and 90% of
       both industrial jobs and the manufacturing sector respectively.`,
      imageUrl: 'assets/money.png'
    },
   
  ];

  currentPage: number = 1;
  itemsPerPage: number = 6;
  constructor() { }

  ngOnInit(): void {
  }

  getPaginatedCards(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.cards.slice(startIndex, endIndex);
  }

  setPage(page: number): void {
    if (page > 0 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

  totalPages(): number {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }
}

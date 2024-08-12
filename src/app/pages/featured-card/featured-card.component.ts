import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {
  posts = [
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Celebrate Singles' Day with amazing deals." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Exclusive offers for Valentine's Day." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Don't miss out on the Black Friday discounts." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Cyber Monday is here with huge savings." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Shop Christmas specials and gift ideas." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Kick off the New Year with incredible deals." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Refresh your home with spring sales." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Hot summer deals you can't resist." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Get ready for school with these great deals." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Cyber Monday is here with huge savings." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Shop Christmas specials and gift ideas." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Kick off the New Year with incredible deals." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Refresh your home with spring sales." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Hot summer deals you can't resist." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Get ready for school with these great deals." },
    { title: "World's Singles' Day", image: 'assets/single-day.png', description: "Spooky discounts for Halloween." },
  ];
  currentPage = 1;
  itemsPerPage = 6;
  paginatedPosts: any[] = [];

  ngOnInit() {
    this.paginatePosts();
  }

  paginatePosts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPosts = this.posts.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.paginatePosts();
  }

  get totalPages(): number {
    return Math.ceil(this.posts.length / this.itemsPerPage);
  }
}

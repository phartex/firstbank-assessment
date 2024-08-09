import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  backgroundImages = [
    '/assets/fbn-personal2.png',
    '/assets/video2.png',
    'assets/man.png'
  ];

  currentIndex = 0;
  activeLine = 1;

  touchStartX = 0;
  touchEndX = 0;
  loading: boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.callSetTimeOut();
  };

  callSetTimeOut() {
    setTimeout(() => {
      this.loading = true;
      
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }, 1000);
  }
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    if (this.touchEndX < this.touchStartX) {
      this.nextImage();
    }

    if (this.touchEndX > this.touchStartX) {
      this.prevImage();
    }
  }

  nextImage() {
    if (this.currentIndex < this.backgroundImages.length - 1) {
      this.currentIndex++;
      this.updateActiveLine();
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateActiveLine();
    }
  }

  changeBackground(index: number) {
    this.currentIndex = index;
    this.updateActiveLine();
  }

  updateActiveLine() {
    this.activeLine = (this.currentIndex % 3) + 1;
  }

}

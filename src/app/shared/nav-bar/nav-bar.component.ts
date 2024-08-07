import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  show!: boolean;
  constructor(router: Router) { }

  ngOnInit(): void {
    this.navBehaviour();
  }

  toggle() {
    this.show = !this.show;
  }

  navigate() {
  };

  navBehaviour(){
    const navbar = document.querySelector('.nav-container');
    const logoLigt: any = document.getElementById('logo-light');
    const logoDark: any = document.getElementById('logo-dark');
    logoDark.style.display = 'none';
    window.onscroll = () => {
      if (window.scrollY > 600) {
        navbar?.classList.add('nav-active-black');
        navbar?.classList.remove('nav-active-white');
        logoLigt.style.display = 'none';
        logoDark.style.display = 'block';
      } else {
        logoDark.style.display = 'none';
        logoLigt.style.display = 'block';
        
        navbar?.classList.remove('nav-active-black');
        navbar?.classList.add('nav-active-white');
      }
    };
  }
}
import { Component } from '@angular/core';
import { RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
 
  loadingSound = new Audio('/assets/stairs.wav');
  isTransitioning = false;
  gifSrc = 'assets/loading.gif';


  constructor(private router: Router) {}

  async navigateWithTransition(route: string) {

  this.gifSrc = `assets/loading.gif?t=${Date.now()}`;  
  
  this.isTransitioning = true;
  console.log(this.isTransitioning);
  this.loadingSound.currentTime = 0;
  this.loadingSound.play();

  await this.delay(700);

    try {
      await this.router.navigate([route]);
    } finally {
      await this.delay(100);
      console.log('Navigation completed');
      this.isTransitioning = false;
      console.log(this.isTransitioning);
    }
}

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { App } from '../app';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private app: App) {}

  confirmsound = new Audio('/assets/cursorconfirm.wav');
  equipcursorsound = new Audio('/assets/equipcursor.wav');


   //Functions for sound effects
  hoversound() {
    this.equipcursorsound.play();
    this.equipcursorsound.currentTime = 0;
  }
  confirmmenusound() {
    this.confirmsound.play();
    this.confirmsound.currentTime = 0;
  } 

  @Output() navigate = new EventEmitter<string>();

  goTo(route: string) {
    this.navigate.emit(route);
  }
}

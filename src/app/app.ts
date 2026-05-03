import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('AngularTest');
  selectedIndex = -1;
  showDialog = false;
  showEquipMenu = false;
  dialogText = '';
  items = ['Talk', 'Goods', 'PSI', 'Equip', 'Check'];
backgrounds = [
  { name: 'Natural Pattern shirt', url: 'url("/assets/pikminback.jpg")' },
  { name: 'Old-worn shirt', url: 'url("/assets/earthback.jpg")' },
  { name: 'Sci-fi jacket', url: 'url("/assets/metroidd.gif")' },
  { name: 'Space suit', url: 'url("/assets/metroidback.gif")' },
  { name: 'Nostalgic sweater', url: 'url("/assets/motherback.jpg")' }
];

  currentBackground = this.backgrounds[0].url;

  setSelected(index: number) {
    this.selectedIndex = index;
  }
  
  //Code to select the "Talk" option
  onSelect(item: string) {
    if (item === 'Talk') {
      this.dialogText = 'Who are you talking to?';
      this.showDialog = true;
    }
    if (item === 'Equip') {
      this.showEquipMenu = true;
    }
  }

  selectBackground(bg: any) {
  this.currentBackground = bg.url;
  this.showEquipMenu = false;
  }
}

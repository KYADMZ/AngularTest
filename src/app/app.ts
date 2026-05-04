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
  check = false;
  dialogText = '';
  showMenuOption = false;
  items = ['Talk', 'Goods', 'PSI', 'Equip', 'Check'];
  backgrounds = [
  { name: 'Straw hat', url: 'url("/assets/pikminback.jpg")' },
  { name: 'Old-worn boots', url: 'url("/assets/earthback.jpg")' },
  { name: 'Sci-fi glasses', url: 'url("/assets/metroidd.gif")' },
  { name: 'Summer shirt', url: 'url("/assets/wuhu.jpg")' },
  { name: 'Nostalgic sweater', url: 'url("/assets/motherback.jpg")' }
  ];
  goods = [
    { good: 'saturn', url:'url("/assets/saturn-valley.gif")' },
    { good: 'starman', url:'url("/assets/starman.gif")' },
    { good: 'moonside', url:'url("/assets/moonside.gif")' },
    { good: 'saturnboard', url:'url("/assets/saturnboard.gif")' },
    { good: 'mother3', url:'url("/assets/mother3.gif")' }
  ]

  currentBackground = this.backgrounds[0].url;
  boxitem = this.goods[0].url;
 

  setSelected(index: number) { this.selectedIndex = index; }
  showMenu() { this.showMenuOption = true; }
  
  //Code to select the "Talk" option
  onSelect(item: string) {
    if (item === 'Talk') {
      this.dialogText = 'Who are you talking to?';
      this.showDialog = true;
    }
    if (item === 'Check') {
      this.check = true;
    }
    if (item === 'Equip') {
      this.showEquipMenu = true;
    }
    
  }

  selectBackground(bg: any) {
  this.currentBackground = bg.url;
  this.showEquipMenu = false;
    switch(bg.url) {
      case this.backgrounds[0].url:
        this.boxitem = this.goods[0].url;
        break;
      case this.backgrounds[1].url:
        this.boxitem = this.goods[1].url;
        break;
      case this.backgrounds[2].url:
        this.boxitem = this.goods[2].url;
        break;
      case this.backgrounds[3].url:
        this.boxitem = this.goods[3].url;
        break;
      case this.backgrounds[4].url:
        this.boxitem = this.goods[4].url;
        break;
    }
  }

  
}

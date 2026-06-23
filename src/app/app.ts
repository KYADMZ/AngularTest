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
  //Booleans for the menu options
  showDialog = false;
  showEquipMenu = false;
  check = false;
  dialogText = '';
  showMenuOption = false;
  showGoodsMenu = false;
  equipsound = new Audio('/assets/equip.wav');
  cursorsound = new Audio('/assets/cursor.wav');
  confirmsound = new Audio('/assets/cursorconfirm.wav');
  equipcursorsound = new Audio('/assets/equipcursor.wav');

  //Arrays
  items = ['Talk', 'Goods', 'PSI', 'Equip', 'Check']; //Main menu options
  backgrounds = [
  { name: 'Straw hat', url: 'url("/assets/pikminback.jpg")' },
  { name: 'Old-worn boots', url: 'url("/assets/earthback.jpg")' },
  { name: 'Sci-fi glasses', url: 'url("/assets/metroidd.gif")' },
  { name: 'Summer shirt', url: 'url("/assets/wuhu.jpg")' },
  { name: 'Nostalgic sweater', url: 'url("/assets/motherback.jpg")' }
  ]; //Background/Equip options
  goods = [
    { good: 'saturn', url:'url("/assets/saturn-valley.gif")' },
    { good: 'starman', url:'url("/assets/starman.gif")' },
    { good: 'moonside', url:'url("/assets/moonside.gif")' },
    { good: 'saturnboard', url:'url("/assets/saturnboard.gif")' },
    { good: 'mother3', url:'url("/assets/mother3.gif")' }
  ] //Check options
menus = [
  { name: 'Potion', icon: '/icons/potion.png', action: 'heal' },
  { name: 'Key', icon: '/icons/key.png', action: 'key' },
  { name: 'Map', icon: '/icons/map.png', action: 'map' },
  { name: 'Shield', icon: '/icons/shield.png', action: 'shield' }
]; //Goods menu options

  currentBackground = this.backgrounds[0].url;
  boxitem = this.goods[0].url;
 

  setSelected(index: number) { 
    this.selectedIndex = index; 
    if(this.selectedIndex !== -1) {
      this.cursorsound.play(); 
      this.cursorsound.currentTime = 0;
    }
     }
  showMenu() { this.showMenuOption = true; }
  
  //Code section to select the "Talk" option
  onSelect(item: string) {
    if (item === 'Talk') {
      this.dialogText = 'Who are you talking to?';
      this.showDialog = true;
    }
    if (item === 'Goods') {
      this.showGoodsMenu = true;
    }
    if (item === 'Check') {
      this.check = true;
    }
    if (item === 'Equip') {
      this.showEquipMenu = true;
      
    }
    this.confirmsound.play();
    this.confirmsound.currentTime = 0;
  }

  //Code section for the "Equip" and "Check" options
  hoversound() {
    this.equipcursorsound.play();
    this.equipcursorsound.currentTime = 0;
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
    this.equipsound.play();
    this.equipsound.currentTime = 0;
    
  }

  selectItem(item: any) {
  
  this.handleItemAction(item);
  this.confirmsound.play();
  this.confirmsound.currentTime = 0;
}
//Code section for the "Goods" menu options
  handleItemAction(menu: any) {
    switch (menu.action) {
      case 'heal':
        this.dialogText = 'You used a Potion! '+ '\n\n' + 'When I was 12 years old, I managed to defeat the final boss of Majoras Mask without the Fierce deity mask with only a quarter heart left. Me and my friend were really hyped!.';
        break;

      case 'key':
      this.dialogText = 'The key opens the door!... or a coffer? '+ '\n\n' + ' For some reason I didnt get any keys to my house until I was 19 years old, so whenever I came back from high-school and nobody was home, I had to climb the house railing and the backyard door to get in. I sometimes got some scratches on my arms.';
        break;

      case 'map':
        this.dialogText = 'You check the map. '+ '\n\n' + ' I played Black-Myth Wukong from release for a good while and I never figured out the button to open the map so I just assumed it was a game feature for immersion or something so it didnt had a map, it wasnt until I got to chapter 5 after around 28 hours of gameplay when I accidentally clicked a button and the map opened! I felt really stupid.';
        break;

      case 'shield':
        this.dialogText = 'You equip the Shield! '+ '\n\n' + ' When I started playing my favorite MMORPG game, I refused to unlock or even level up the tank job that had a shield (dont remember why, I just disliked it so much) so I never touched the job at all. Little did I know that later in the game it would become my favorite job for progging and clearing the most difficult content of the game! I was so harsh with you PLD job, my beloved.';
        break;
    }

    this.showDialog = true;
  }
}

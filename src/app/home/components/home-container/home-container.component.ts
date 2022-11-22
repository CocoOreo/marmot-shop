import { Component, OnInit } from '@angular/core';
import { topMenu } from 'src/app/shared/configs/top-menu';
import { MenuItem } from 'src/app/shared/components/top-menu/top-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent {
  menu = topMenu;

  list = [
    {
      img: 'assets/images/lamp.svg',
      price: 1356.89,
      title: 'Minimal Stand',
      id: 2,
    },
    {
      img: 'assets/images/lamp.svg',
      price: 1356.89,
      title: 'Minimal Stand',
      id: 3,
    },
    {
      img: 'assets/images/lamp.svg',
      price: 1356.89,
      title: 'Minimal Stand',
      id: 4,
    },
    {
      img: 'assets/images/lamp.svg',
      price: 1356.89,
      title: 'Minimal Stand',
      id: 5,
    },
    {
      img: 'assets/images/lamp.svg',
      price: 1356.89,
      title: 'Minimal Stand',
      id: 6,
    },
    {
      img: 'assets/images/lamp.svg',
      price: 1356.89,
      title: 'Minimal Stand',
      id: 7,
    },
  ];

  constructor(private router: Router) {}

  handleTabSelected(item: MenuItem) {
    console.log('Select', item);
    this.router.navigate(['home', item.link]);
  }
}

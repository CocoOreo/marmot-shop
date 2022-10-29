import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface MenuItem {
  title: string;
  img: string;
  active: string;
}

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  constructor() {}

  selectedIndex = 0;

  @Input() menu: MenuItem[] = [];

  @Output() tabSelected = new EventEmitter();

  handleSelection(index: number) {
    if (index === this.selectedIndex) {
      return;
    }
    this.selectedIndex = index;
    this.tabSelected.emit(this.menu[this.selectedIndex]);
  }

  ngOnInit(): void {
    console.log('Comp: TopMenu');
  }
}

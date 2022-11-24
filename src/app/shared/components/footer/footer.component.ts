import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Tab {
  id: number;
  img: string;
  activeImg: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // Foorter Props
  @Input() height: string = '75px';
  @Input() width: string = '100%';
  @Input() iconHeight: string = '24px';
  @Input() iconWidth: string = '24px';
  @Input() tabs: Tab[] = [];

  @Output() tabChange = new EventEmitter();
  selectedIndex = 0;
  handleChangeTab(index: number) {
    this.selectedIndex = index;
    this.tabChange.emit(this.tabs[index]);
  }
  constructor() {}
}

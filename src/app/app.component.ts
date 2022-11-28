import { Component } from '@angular/core';
import { tabs } from './shared/configs/footer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marmot-shop';
  tabs = tabs;
}

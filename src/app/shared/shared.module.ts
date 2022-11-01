import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
  declarations: [TopMenuComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, TopMenuComponent],
})
export class SharedModule {}

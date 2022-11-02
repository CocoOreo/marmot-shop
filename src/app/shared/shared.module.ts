import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [TopMenuComponent, FooterComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, TopMenuComponent, FooterComponent],
})
export class SharedModule {}

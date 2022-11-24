import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [HomeContainerComponent, ProductListComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}

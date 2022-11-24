import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent, ProductListComponent } from './home';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'popular',
        pathMatch: 'full',
      },
      {
        path: ':tabLink',
        component: ProductListComponent,
      },
    ],
  },
  //   { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}

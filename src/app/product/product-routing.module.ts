import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', redirectTo: '' },
      {
        path: 'electronics',
        loadChildren: () =>
          import('./electronics/electronics.module').then(
            (m) => m.ElectronicsModule
          ),
      },
      {
        path: 'toys',
        loadChildren: () =>
          import('./toys/toys.module').then((m) => m.ToysModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

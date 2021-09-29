import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerComponent } from './computer/computer.component';
import { ElectronicsComponent } from './electronics.component';
import { LaptopComponent } from './laptop/laptop.component';

const routes: Routes = [
  {
    path: '',
    component: ElectronicsComponent,
  },
  {
    path: 'computer',
    component: ComputerComponent,
  },
  {
    path: 'laptop',
    component: LaptopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectronicsRoutingModule {}

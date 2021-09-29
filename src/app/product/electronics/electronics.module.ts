import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { ComputerComponent } from './computer/computer.component';
import { LaptopComponent } from './laptop/laptop.component';

@NgModule({
  declarations: [ElectronicsComponent, ComputerComponent, LaptopComponent],
  imports: [CommonModule, ElectronicsRoutingModule],
})
export class ElectronicsModule {}

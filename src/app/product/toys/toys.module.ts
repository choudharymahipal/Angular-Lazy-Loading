import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToysRoutingModule } from './toys-routing.module';
import { ToysComponent } from '../toys/toys.component';
import { KidsComponent } from './kids/kids.component';

@NgModule({
  declarations: [ToysComponent, KidsComponent],
  imports: [CommonModule, ToysRoutingModule],
})
export class ToysModule {}

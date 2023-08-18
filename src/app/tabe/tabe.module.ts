import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { tabePageRoutingModule } from './tabe.router.module';

import { tabePage } from './tabe.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, tabePageRoutingModule],
  declarations: [tabePage],
})
export class tabePageModule {}

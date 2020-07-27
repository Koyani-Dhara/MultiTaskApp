import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NameMatchingPagePageRoutingModule } from './name-matching-page-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { NameMatchingPagePage } from './name-matching-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NameMatchingPagePageRoutingModule
  ],
  declarations: [NameMatchingPagePage]
})
export class NameMatchingPagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AddSavingPageRoutingModule } from './add-saving-routing.module';

import { AddSavingPage } from './add-saving.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSavingPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [AddSavingPage]
})
export class AddSavingPageModule {}

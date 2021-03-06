import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import { ExpenseTrackerPagePageRoutingModule } from './expense-tracker-page-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { ExpenseTrackerPagePage } from './expense-tracker-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ExpenseTrackerPagePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [ExpenseTrackerPagePage]
})
export class ExpenseTrackerPagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseTrackerPagePageRoutingModule } from './expense-tracker-page-routing.module';

import { ExpenseTrackerPagePage } from './expense-tracker-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseTrackerPagePageRoutingModule
  ],
  declarations: [ExpenseTrackerPagePage]
})
export class ExpenseTrackerPagePageModule {}

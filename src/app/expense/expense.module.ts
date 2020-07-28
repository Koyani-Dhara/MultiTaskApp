import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { ExpensePageRoutingModule } from './expense-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ExpensePage } from './expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ExpensePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [ExpensePage]
})
export class ExpensePageModule {}

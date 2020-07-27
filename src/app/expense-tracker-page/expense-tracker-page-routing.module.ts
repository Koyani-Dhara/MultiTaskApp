import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseTrackerPagePage } from './expense-tracker-page.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseTrackerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseTrackerPagePageRoutingModule {}

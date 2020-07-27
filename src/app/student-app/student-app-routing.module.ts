import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentAppPage } from './student-app.page';

const routes: Routes = [
  {
    path: '',
    component: StudentAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentAppPageRoutingModule {}
